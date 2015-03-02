module.exports = {
  metadata: {
    // number: 'a number',
    // string: 'a string',
    object: 'an object'
  },
  rows: [
    {number: 1, string: '1', object: {map: '1'}, stringArray: ['1'], intArray: [1]},
    {number: 2, string: '2', object: {map: '2'}, stringArray: ['2'], intArray: [2]},
    {number: 3, string: '3', object: {map: '3'}, stringArray: ['3'], intArray: [3]},
    {number: 4, string: '4', object: {map: '4'}, stringArray: ['4'], intArray: [4]},
    {number: 5, string: '5', object: {map: '5'}, stringArray: ['5'], intArray: [5]}
  ],
  columns: [
    {name: 'number', title: 'Number', type: 'integer'},
    {name: 'string', title: 'String', type: 'string'},
    {name: 'object', title: 'Object', type: 'map<string,string>'},
    {name: 'stringArray', title: 'String Array', type: 'array<string>'},
    {name: 'intArray', title: 'Int Array', type: 'array<int>'}
  ]
};
