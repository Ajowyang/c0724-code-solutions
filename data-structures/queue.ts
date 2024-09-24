export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    // Not implemented

    this.nodes.unshift({
      data: item,
      priority,
    });
    this.nodes.sort(function (a: Node<T>, b: Node<T>) {
      return b.priority - a.priority;
    });
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    } else {
      const result = this.nodes.shift() as Node<T>;
      return result.data;
    }
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    }

    return this.nodes[0].data;
  }
}
