import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  const result = traverseRecursive(bst.root);
  console.log(result);
  return result;
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  const result: number[] = [];

  return result;
}
