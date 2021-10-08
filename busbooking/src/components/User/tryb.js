import { useState } from 'react';

const Tryb = () => {
    
    const [show,setShow]=useState(true)
    return (
      <div className="App">
       {
         show?<h1>Hello World !</h1>:null
       }
       <button onClick={()=>setShow(true)} >Show</button>
       <button onClick={()=>setShow(false)} >Hide</button>
  <button onClick={()=>setShow(!show)} >Toggle</button> 
      </div>
    );
  }
    // const [state, setState] = useState({ fName: "mhhhd", lName: "dhdsewwwwwwwwwwwwww" });


    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };


    // return (

    //     <div>
    //         <h1>try</h1>
    //         <input
    //             value={state.fName}
    //             type="text"
    //             onChange={handleChange}
    //             name="fName"
    //         />
    //         <input
    //             value={state.lName}
    //             type="text"
    //             onChange={handleChange}
    //             name="lName"
    //         />
    //     </div>
    // )
    // const [todos, setTodos] = useState([
    //     { id: 1, title: "Selectus aut autem", completed: false },
    //     { id: 2, title: "Luis ut nam facilis et officia qui", completed: false },
    //     { id: 3, title: "Fugiat veniam minus", completed: false },
    //     { id: 4, title: "Aet porro tempora", completed: true },
    //     { id: 5, title: "Laboriosam mollitia et enim quasi", completed: false }
    // ]);

//     const changeInput = (e) => {
//         todos.map(items => items.id === parseInt(e.target.value) && (items.completed = e.target.checked));
//         setTodos([...todos], todos);
//     }
//     return (
//         <div className="container">
//             {todos.map(items => {
//                 return (
//                     <div key={items.id}>
//                         <label>
//                             <input type="checkbox"
//                                 onChange={changeInput}
//                                 value={items.id}
//                                 checked={items.completed} />&nbsp; {items.title}</label>
//                     </div>
//                 )
//             })}
//         </div>
//     );


// }

export default Tryb
