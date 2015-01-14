
var COUNT = {
  columns: 750,
  rows: 40,
  metadata: 100,
};

window.columns = (function () {
  var columns = [], i = COUNT.columns;
  while (i--) columns.push({name: 'col_' + i, title: 'col_' + i, type: 'int'});
  return columns;
})();

window.rows = (function (columns) {
  var rows = [], i = COUNT.rows, row;
  var iterate = function (col, idx) {
    row[col.name] = Math.random() * idx;
  };
  while (i--) {
    row = {};
    columns.forEach(iterate);
    rows.push(row);
  }
  return rows;
})(window.columns);

window.metadata = (function (columns) {
  var metadata = {};
  columns.slice(0, COUNT.metadata).forEach(function (column) {
    metadata[column.name] = column.name + ' metadata';
  });
  return metadata;
})(window.columns);
