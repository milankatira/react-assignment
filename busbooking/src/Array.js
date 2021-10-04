let arr = [{
    userId: 1,
    id: 100,
    title: "delectus aut autem",
    completed: false
},
{
    userId: 1,
    id: 101,
    title: "quis ut nam facilis et officia qui",
    completed: false
},
{
    userId: 1,
    id: 102,
    title: "fugiat veniam minus",
    completed: false
},
{
    userId: 1,
    id: 103,
    title: "et porro tempora",
    completed: true
}]

const newState = arr.map(arr =>
    arr.id === 101 ? { ...arr, completed: true } : arr
);