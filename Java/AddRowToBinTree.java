/*
Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

Note that the root node is at depth 1.

The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.

CONSTRAINTS:

The number of nodes in the tree is in the range [1, 10^4].
The depth of the tree is in the range [1, 10^4].
-100 <= Node.val <= 100
-10^5 <= val <= 10^5
1 <= depth <= the depth of tree + 1


*/

public class AddRowToBinTree {

  public TreeNode addOneRow(TreeNode root, int val, int depth) {
    if (depth == 1) {
      return new TreeNode(val, root, null);
    }
    insert(root, val, 1, depth);
    return root;
  }

  private static void insert(TreeNode node, int val, int height, int depth) {
    if (node != null) {
      if (height == depth - 1) {

        node.left = new TreeNode(val, node.left, null);
        node.right = new TreeNode(val, null, node.right);

      } else {
        insert(node.left, val, height + 1, depth);
        insert(node.right, val, height + 1, depth);
      }
    }
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(4);
    root.left = new TreeNode(2, new TreeNode(3), new TreeNode(1));
    root.right = new TreeNode(6, new TreeNode(5), null);


    TreeNode root2 = new TreeNode(4);
    root2.left = new TreeNode(2, new TreeNode(3), new TreeNode(1));


    TreeNode result = new AddRowToBinTree().addOneRow(root, 1, 1);  // [4 1 1 2 null null 6 3 1 5]
    TreeNode result2 = new AddRowToBinTree().addOneRow(root2, 1, 3);

    BreadthFirstSearch.printBFS(result);
    BreadthFirstSearch.printBFS(result2);
  }

}
