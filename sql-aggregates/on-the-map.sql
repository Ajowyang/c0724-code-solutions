select "countries"."name" as "Country", count(*) as "totalCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId"
