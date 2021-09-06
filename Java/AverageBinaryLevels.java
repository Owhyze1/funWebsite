import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;
/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

CONSTRAINTS:

The number of nodes in the tree is in the range [1, 10^4].
-2^31 <= Node.val <= 2^31 - 1

INPUT root binary tree
OUTPUT array of double values
EDGE CASES
  tree with only 1 node
  null nodes
*/

public class AverageBinaryLevels {
  public List<Double> averageOfLevels(TreeNode root) {
    List<Double> avg = new ArrayList<Double>();
    LinkedList<TreeNode> queue = new LinkedList<>();
    double sum = 0;
    int nodesAtCurrentLevel = 0;
    int childNodesAdded = 0;
    int count = 0;

    queue.add(root);
    nodesAtCurrentLevel++;

    while (queue.size() > 0) {
      count = nodesAtCurrentLevel;

      while (nodesAtCurrentLevel > 0) {
        TreeNode node = queue.remove();
        nodesAtCurrentLevel--;
        if (node != null) {
          sum += node.value;

          if (node.left != null) {
            queue.add(node.left);
            childNodesAdded++;
          }
          if (node.right != null) {
            queue.add(node.right);
            childNodesAdded++;
          }
        }
      }
      avg.add(sum / count);
      nodesAtCurrentLevel = childNodesAdded;
      childNodesAdded = 0;
      sum = 0;
    }
    return avg;
  }

  /*
    add root node to queue, number of nodes added = 1
    remove root node, decrement # of nodes, calculate average
      add root kids
      if any NON-NULL kid, increment # of nodes (2 for left AND right)
    iterate through queue until # of nodes have beeen removed, decremenet # of nodes with each removal (stop when # of nodes = 0)
  */

  public static void main(String[] args) {
    TreeNode root = new TreeNode(3);
    root.left = new TreeNode(9, new TreeNode(15), new TreeNode(7));
    root.right = new TreeNode(20);

    TreeNode root2 = new TreeNode(3);
    root2.left = new TreeNode(9);
    root2.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

    List<Double> result = new AverageBinaryLevels().averageOfLevels(root);
    List<Double> result2 = new AverageBinaryLevels().averageOfLevels(root2);

    for (Double value : result) {
      System.out.print(value + " ");
    }
    System.out.println();
    for (Double value : result2) {
      System.out.print(value + " ");
    }
  }




}
