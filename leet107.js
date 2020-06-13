/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) { return [] }

  const result = []
  const queue = [NaN, root]
  while (queue.length > 1) {
    const node = queue.shift()
    if (node !== node) {
      result.unshift(queue.map(n => n.val))
      queue.push(NaN)
    } else {
      if (node.left) { queue.push(node.left) }
      if (node.right) { queue.push(node.right) }
    }
  }

  return result
};