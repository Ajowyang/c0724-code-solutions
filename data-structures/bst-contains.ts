import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns true iff `value` is in the BST.
 */
export function contains(bst: BinarySearchTree, value: number): boolean {
  if (!bst.root) {
    return false;
  }
  let current = bst.root as TreeNode;
  if (current.value === value) {
    return true;
  }
  while (value !== current.value) {
    if (value < current.value) {
      if (current.left) {
        current = current.left;
      } else {
        return false;
      }
    } else if (value > current.value) {
      if (current.right) {
        current = current.right;
      } else {
        return false;
      }
    }
  }

  return true;
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  if (!node) {
    return false;
  }
  if (node.value === value) {
    return true;
  }
  if (value < node.value) {
    containsRecursive(node.left, value);
  } else if (value > node.value) {
    containsRecursive(node.right, value);
  }

  return false;
}
