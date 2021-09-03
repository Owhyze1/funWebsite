import java.util.HashMap;
import java.util.HashSet;

public class ValidPath {

 /*
  Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
    1 which means a street connecting the left cell and the right cell.
    2 which means a street connecting the upper cell and the lower cell.
    3 which means a street connecting the left cell and the lower cell.
    4 which means a street connecting the right cell and the lower cell.
    5 which means a street connecting the left cell and the upper cell.
    6 which means a street connecting the right cell and the upper cell.

  You will initially start at the street of the upper-left cell (0,0). A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

  Notice that you are not allowed to change any street.

  Return true if there is a valid path in the grid or false otherwise.

  Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    1 <= grid[i][j] <= 6

*/
  private static HashMap<Integer, String[]> map;

  private static void createMap() {
    map = new HashMap<>();
    map.put(1, new String[]{"left", "right"});
    map.put(2, new String[]{"up", "down"});
    map.put(3, new String[]{"left", "down"});
    map.put(4, new String[]{"right", "down"});
    map.put(5, new String[]{"left", "up"});
    map.put(6, new String[]{"right", "up"});

    // map.put(1, new int[]{ 0, -1,  0, 1}); // left, right
    // map.put(2, new int[]{-1,  0,  1, 0}); // up down
    // map.put(3, new int[]{ 0, -1,  1, 0}); // left down
    // map.put(4, new int[]{ 0,  1,  1, 0}); //right down
    // map.put(5, new int[]{ 0, -1, -1, 0});// left up
    // map.put(6, new int[]{ 0,  1, -1, 0}); // right up

    // printHashMap();
  }

  public static boolean hasValidPath(int[][] grid) {
    createMap();
    return helper(grid, 0, 0, new HashSet<String>());
  }

  public static boolean helper(int[][] grid, int row, int col, HashSet<String> visited) {
    // row and col are the starting position
    // the values in directions[] are where to go from starting position\
    boolean valid = false;

    // base case
    if (row == grid.length - 1 && col == grid[0].length - 1) {
      return true;
    }

    int directions = grid[row][col];
    String[] direction = map.get(directions);

    // recursive case(s)
    valid = canMove(direction[0], grid, visited, row, col);
    if (!valid) {
      visited.remove(row + " " + col);
      valid = canMove(direction[1], grid, visited, row, col);
    }

    return valid;
  }

  private static boolean canMove(String current, int[][] grid, HashSet<String> visited, int row, int col) {
    boolean canMove = false;

    if (visited.contains(row + " " + col)) {
      return false;
    }
    int nextRow = row;
    int nextColumn = col;

    if (current == "up") nextRow-- ;
    if (current == "down") nextRow++;
    if (current == "left") nextColumn--;
    if (current == "right") nextColumn++;

    if (visited.contains(nextRow + " " + nextColumn)) {
      return false;
    }

    if (nextRow >= 0 && nextRow < grid.length && nextColumn >= 0 && nextColumn < grid[0].length) {
      String[] nextDirections = map.get(grid[nextRow][nextColumn]);

      if (isConnected(current, nextDirections[0]) || isConnected(current, nextDirections[1])) {
        visited.add(row + " " + col);
        canMove = helper(grid, nextRow, nextColumn, visited);
      }
    }
    return canMove;
  }

  private static boolean isConnected(String direction, String nextDirection) {
    if (direction == "up" && nextDirection == "down") return true;
    if (direction == "down" && nextDirection == "up") return true;
    if (direction == "right" && nextDirection == "left") return true;
    if (direction == "left" && nextDirection == "right") return true;

    return false;
  }

  public static void main(String[] args) {

    int[][] grid;

    // [[4,1],[6,1]]
    grid = new int[2][2];

    grid[0] = new int[]{4, 1};
    grid[1] = new int[]{6, 1};

    System.out.println(hasValidPath(grid)); // true

    grid = new int[2][3];

    grid[0] = new int[]{2, 4, 3};
    grid[1] = new int[]{6, 5, 2};

    System.out.println(hasValidPath(grid)); // true

    grid[0] = new int[]{1, 2, 1};
    grid[1] = new int[]{1, 2, 1};

    System.out.println(hasValidPath(grid)); // false

    grid[0] = new int[] {1, 1, 2};

    System.out.println(hasValidPath(grid)); // false

    grid = new int[1][7];
    grid[0] = new int[]{1, 1, 1, 1, 1, 1, 3};

    System.out.println(hasValidPath(grid)); // true

    grid = new int[7][1];

    grid[0] = new int[]{2};
    grid[1] = new int[]{2};
    grid[2] = new int[]{2};
    grid[3] = new int[]{2};
    grid[4] = new int[]{2};
    grid[5] = new int[]{2};
    grid[6] = new int[]{6};

    System.out.println(hasValidPath(grid)); // true

    /*
    EXPECTED
    true
    true
    false
    false
    true
    true
    */
  }
}
