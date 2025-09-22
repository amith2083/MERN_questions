var obj = [{ id: 1, name: "john" }, { id: 2, name: "doe" }];

obj = obj.map(({ id, name }) => ({
  id,
  value: name
}));

console.log(obj);

//[{ id: 1, value: "john" },{ id: 2, value: "doe" }]
