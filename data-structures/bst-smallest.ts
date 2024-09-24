import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the smallest value in the BST, or `Infinity` if the tree is empty.
 */
export function smallest(bst: BinarySearchTree): number {
  if (!bst.root) {
    return Number.POSITIVE_INFINITY;
  }
  let current = bst.root;
  while (current.left) {
    current = current.left;
  }
  return current.value;
}

function smallestRecursive(node: TreeNode | undefined): number {
  return 0;
}
