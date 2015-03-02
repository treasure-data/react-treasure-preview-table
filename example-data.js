var COUNT = {
  columns: 750,
  rows: 40,
  metadata: 100
}

window.columns = (function () {
  var columns = [], i = COUNT.columns
  while (i--) {
    switch (i % 4) {
      case 0:
        columns.push({name: 'col_' + i, title: 'col_' + i, type: 'int'})
        break
      case 1:
        columns.push({name: 'col_' + i, title: 'col_' + i, type: 'string'})
        break
      case 2:
        columns.push({name: 'col_' + i, title: 'col_' + i, type: 'int'})
        break
      case 3:
        columns.push({name: 'col_' + i, title: 'col_' + i, type: 'array<int>'})
        break
      case 4:
        columns.push({name: 'col_' + i, title: 'col_' + i, type: 'array<string>'})
        break
    }

  }
  return columns
})()

window.rows = (function (columns) {
  var rows = [], i = COUNT.rows, row
  var iterate = function (col, idx) {
    var value
    switch (idx % 5) {
      case 0:
        value = Math.random() * idx
        break
      case 1:
        value = idx + ' is a string'
        break
      case 2:
        value = null
        break
      case 3:
        value = [Math.random(), idx]
        break
      case 4:
        value = [Math.random() + '', idx + '']
    }
    row[col.name] = value
  }
  while (i--) {
    row = {}
    columns.forEach(iterate)
    rows.push(row)
  }
  return rows
})(window.columns)

window.metadata = (function (columns) {
  var metadata = {}
  columns.slice(0, COUNT.metadata).forEach(function (column) {
    metadata[column.name] = column.name + ' metadata'
  })
  return metadata
})(window.columns)
