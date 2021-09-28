import java.util.List;
import java.util.ArrayList;
/*
Given the root of a binary tree, return all duplicate subtrees.
For each kind of duplicate subtrees, you only need to return the root node of any one of them.
Two trees are duplicate if they have the same structure with the same node values.

CONSTRAINTS
The number of the nodes in the tree will be in the range [1, 10^4]
-200 <= Node.val <= 200

          1
        /   \
       2     3
     /     /   \
    4     2     4
         /
        4

Input:    root = [1 2 3 4 null 2 4 null null 4]
Output:          [[2 4] [4]]

DFS    preorder  [1 2 4 3 2 4 4]
       brackets  [1 [2 [4]] [3 [2 [4]] [4]]]
       paths from parent
            [1 2 4]
            [1 3 2 4]
            [1 3 4]

          1
        /   \
       2     3
     /     /   \
    4     4     2
              /
             4

preorder = [1 2 4 | 3 4 | 2 4|]

THOUGHTS
depth first search to create string, find patterns in string, add patterns to duplicates array
print DFS with brackets around groups of parent then kids, i.e. [parent (left)(right)]

*/
public class FindDuplicateSubtrees {

  public static List<TreeNode> findDuplicateSubtrees(TreeNode root) {
    List<TreeNode> duplicates = new ArrayList<TreeNode>();
    String output = preorderDFS(root, "");
    System.out.print(output);
    return duplicates;
  }

  private static String preorderDFS(TreeNode node, String output) {
    if (node != null) {
      output += node.value;
      output = preorderDFS(node.left, output);
      output = preorderDFS(node.right, output);
    }
    return output;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2, new TreeNode(4), null);
    root.right = new TreeNode(3, new TreeNode(2, new TreeNode(4), null), new TreeNode(4));

    TreeNode root2 = new TreeNode(1);
    root2.left = new TreeNode(2, new TreeNode(4), null);
    root2.right = new TreeNode(3, new TreeNode(4), new TreeNode(2, null, new TreeNode(4)));

    // findDuplicateSubtrees(root);
    findDuplicateSubtrees(root2);
  }
}
