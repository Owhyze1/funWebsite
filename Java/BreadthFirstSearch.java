import java.util.Queue;
import java.util.LinkedList;

public class BreadthFirstSearch {
  public static void printBFS(TreeNode root) {
    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    TreeNode node;

    if (root != null)
      queue.add(root);

    while (queue.size() > 0) {
      node = queue.remove();

      if (node.left != null)
        queue.add(node.left);
      if (node.right != null)
        queue.add(node.right);

      System.out.print(node.value + " ");
    }
  }

  public static void main(String[] args) {
    TreeNode tree1 = new TreeNode(1, new TreeNode(3, new TreeNode(5), null), new TreeNode(2));

    printBFS(tree1);
  }

}
