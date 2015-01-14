module.exports = {
  metadata: {
    // number: 'a number',
    // string: 'a string',
    object: 'an object'
  },
  rows: [
    {number: 1, string: '1', object: {map: '1'}},
    {number: 2, string: '2', object: {map: '2'}},
    {number: 3, string: '3', object: {map: '3'}},
    {number: 4, string: '4', object: {map: '4'}},
    {number: 5, string: '5', object: {map: '5'}},
  ],
  columns: [
    {name: 'number', title: 'Number', type: 'integer'},
    {name: 'string', title: 'String', type: 'string'},
    {name: 'object', title: 'Object', type: 'map'}
  ]
};
