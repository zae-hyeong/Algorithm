/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  while (root) {
      if (p.val > root.val && q.val > root.val) {
          root = root.right;
      } else if (p.val < root.val && q.val < root.val) {
          root = root.left;
      } else {
          return root;
      }
  }    
};

console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)
);
console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4)
);
console.log(lowestCommonAncestor([2, 1], 2, 1));
