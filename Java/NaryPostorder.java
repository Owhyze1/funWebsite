import java.util.List;
import java.util.ArrayList;
/*
public Node (int val, List<Node> children) {...}

POST ORDER
left to right, parent
*/

public class NaryPostorder {

  public List<Integer> postorder(Node root) {
    List<Integer> output = new ArrayList<Integer>();
    helper(root, output);
    return output;
  }

  private void helper(Node node, List<Integer> output) {
    if (node != null) {
      List<Node> kids = node.children;

      if (kids != null) {
        for (int i = 0; i < kids.size(); i++) {
          helper(kids.get(i), output);
        }
      }
      output.add(node.val);
    }
  }

  public static void main(String[] args) {
    List<Node> leaves = new ArrayList<Node>();
    List<Node> rootKids = new ArrayList<Node>();
    Node root;

    leaves.add(new Node(5));
    leaves.add(new Node(6));

    rootKids.add(new Node(3, leaves));
    rootKids.add(new Node(2));
    rootKids.add(new Node(4));

    root = new Node(1, rootKids);

    List<Integer> result = (new NaryPostorder()).postorder(root);

    for (Integer eachNode : result) {
      System.out.print(eachNode + " ");
    }
  }
}
