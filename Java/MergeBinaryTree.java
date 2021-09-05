
/*
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

            1                   2                           3
          /   \                /  \                       /    \
         3     2       +      1    3          =          4      5
        /                      \    \                  /  \    / \
       5                        4    7                5    4 null 7
      /                                              /
    10                                              10
       BFS
       [3, 4, 5, 5, 4, 7, 10]
*/
public class MergeBinaryTree {

  public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
    return helper(root1, root2);
  }

  // PRE ORDER
  private static TreeNode helper(TreeNode node1, TreeNode node2) {
    TreeNode combo = new TreeNode();

    if (node1 != null && node2 != null) {
      combo.value = node1.value + node2.value;
      combo.left = helper(node1.left, node2.left);
      combo.right = helper(node1.right, node2.right);

    } else if (node2 != null) {
      combo.value = node2.value;
      combo.left = node2.left;
      combo.right = node2.right;

    } else if (node1 != null) {
      combo.value = node1.value;
      combo.left = node1.left;
      combo.right = node1.right;

    } else {
      combo = null;
    }

    return combo;
  }

  public static void main(String[] args) {
    TreeNode tree1 = new TreeNode(1, new TreeNode(3, new TreeNode(5, new TreeNode(10), null), null), new TreeNode(2));
    TreeNode tree2 = new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7)));

    System.out.print("Tree 1 --> ");
    BreadthFirstSearch.printBFS(tree1);
    System.out.print("\nTree 2 --> ");
    BreadthFirstSearch.printBFS(tree2);

    TreeNode merged = new MergeBinaryTree().mergeTrees(tree1, tree2);

    System.out.print("\nMerged --> ");
    BreadthFirstSearch.printBFS(merged);


  }

}
