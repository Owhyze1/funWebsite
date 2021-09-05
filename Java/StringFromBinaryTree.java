
/*
Given the root of a binary tree, construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

  INPUT [1, 2, 3, null, 4]

        1                                                 1
      /   \                                             /   \
     2     3                                           2     3
   /                                                    \
  4                                                      4

  OUTPUT

  1(2(4))(3)                                           1(2()(4))(3)

  CONSTRAINTS

  number of nodes = range [1, 10^4]
  -1000 <= node.val <= 1000

  Each child node
  - starts with left parenthesis
      - if left child is NULL and right child is NON-NULL, add empty parenthesis before right child
      - any of child's node children follow same parenthesis, BUT appear BEFORE right parent of its parent
  - ends with right parenthesis

  1(2()(4))(3)
*/

public class StringFromBinaryTree {

  public String tree2str(TreeNode root) {
    if (root == null) return "";
    return root.value + helper(root);
  }

  private static String helper(TreeNode root) {
    String left = "";
    String right = "";
    if (root != null) {

      if (root.left != null) {
        left = "(" + root.left.value + helper(root.left) + ")";
      }
      if (root.right != null) {
        right = "(" + root.right.value + helper(root.right) + ")";

        if (root.left == null)
          left = "()";
      }

    }
    return left + right;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3));
    TreeNode root2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3));

    System.out.println(new StringFromBinaryTree().tree2str(root));
    System.out.println(new StringFromBinaryTree().tree2str(root2));
  }

}
