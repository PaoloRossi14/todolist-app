import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // this code fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refresh when submiting

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos([...todos, input]); -> when it is not refreshed by the db
    setInput("");
    console.log("...Adding an event");
  };

  return (
    <div className="App">
      <h1>TO-DO LIST APP</h1>
      <form>
        <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)} // will store in short-term memory
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          disabled={!input}
          variant="contained"
          color="primary"
        >
          Add To Do
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
