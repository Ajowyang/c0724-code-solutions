import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    select * from "grades"
    where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade foes not exist in the database`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { course, name, score } = req.body;
    if (
      !course ||
      !name ||
      !score ||
      !Number.isInteger(+score) ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        `invalid grade, missing name, course, or score, or the score isn't an integer from 0 to 100`
      );
    }
    const sql = `
    insert into "grades" ("course", "name", "score")
    values ($1, $2, $3)
    returning * `;
    const params = [course, name, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;

    const { course, name, score } = req.body;

    if (
      !Number.isInteger(+gradeId) ||
      !course ||
      !name ||
      !score ||
      !Number.isInteger(+score)
    ) {
      throw new ClientError(
        400,
        `invalid gradeId or invalid/missing name, course, or score`
      );
    }
    const sql = `
    update "grades"
    set "course" = $2,
        "name" = $3,
        "score" = $4
    where "gradeId" = $1
    returning *
    `;
    const params = [gradeId, course, name, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'grade does not exist in the database');
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `invalid gradeId`);
    }
    const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
    const params = [gradeId];
    await db.query(sql, params);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
