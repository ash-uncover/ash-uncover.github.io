Array.prototype.remove = function (item) {
  const index = this.indexOf(item)
  if (index >= 0) {
    return this.splice(index, 1)
  }
  return []
}