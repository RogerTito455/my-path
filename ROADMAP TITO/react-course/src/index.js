import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greetings";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDom.createRoot(document.getElementById("root"));

const HandleChange = (e) =>{
  console.log(e.target.value)
}
root.render(
  <>
    <TaskCard ready={true} />
    <Button text="Saludar" />

  <form onSubmit={(e)=> {e.preventDefault()
    console.log('enviado')
  }}>
    <h1>Registro de usuario</h1> 
    <button>Send</button>
  </form>
  </>
);
