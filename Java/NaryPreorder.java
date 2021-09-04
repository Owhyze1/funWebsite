import java.util.List;
import java.util.ArrayList;

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};

PREORDER parent, left to right
*/

public class NaryPreorder {
  public static List<Integer> preorder(Node root) {
    List<Integer> nodes = new ArrayList<Integer>();
    helper(root, nodes);
    return nodes;
  }

  public static void helper(Node node, List<Integer> nodes) {
    if (node != null) {
      nodes.add(node.val);
      List<Node> kids = node.children;

      if (kids != null)
        for (int i = 0; i < kids.size(); i++) {
          helper(kids.get(i), nodes);
        }
    }
  }

  public static void main(String[] args) {
    Node root;
    List<Node> rootKids = new ArrayList<Node>();
    List<Node> leaves = new ArrayList<Node>();

    leaves.add(new Node(5));
    leaves.add(new Node(6));

    rootKids.add(new Node(3, leaves));
    rootKids.add(new Node(2));
    rootKids.add(new Node(4));

    root = new Node(1, rootKids);

    List<Integer> result = preorder(root);

    for (int i = 0; i < result.size(); i++) {
      System.out.print(result.get(i) + " ");
    }
  }
}
