import React from "react";
import "../../App.css";
import HooksContainer from "./HooksContainer";
import { Provider } from "react-redux";
import Store from "../../Store";
import Fade from "react-reveal/Fade";
const Ticket = () => {

  // const history = useHistory();

  // const [value, setValue] = useState("");
  // useEffect(() => {
  //   if (user) {
  //     const docRef = db.collection("userData").doc(user.uid);
  //     var unsubscribe = docRef.onSnapshot((docSnap) => {
  //       if (docSnap.exists) {
  //         console.log(docSnap.data().userData);
  //         setMytodos(docSnap.data().userData);
  //       } else {
  //         console.log("nothing");
  //       }
  //     });
  //   } else {
  //     history.push("/");
  //   }

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const addTodo = () => {
  //   db.collection("userData")
  //     .doc(user.uid)
  //     .set({
  //       todos: [...mytodos, value]
  //     });
  // };

  // useEffect(() => {
  //   const todoRef = firebase.database().ref("Todo");
  //   todoRef.on("value", (snapshot) => {
  //     const todos = snapshot.val();
  //     const todoList = [];
  //     for (let id in todos) {
  //       todoList.push(todos[id]);
  //     }
  //     console.log(todoList);
  //     setTodolist(todoList);
  //   });
  // },[]);
  
  
  
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="App">
        <Fade bottom>
          <h1>welcome to bus booking system</h1>
        </Fade>
      </div>

      <div className="container">
        <h1>book your seat here</h1>
        <Provider store={Store}>
          <HooksContainer />
        </Provider>
      </div>
{/* 
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter todos"
        />
      </div> */}
    </div>
  );
};

export default Ticket;
