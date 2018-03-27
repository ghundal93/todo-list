var todoList = [];
var id = 0;
import React from "react";

export default class Todo extends React.Component {
constructor()
{
    super();
    this.state = { text:"",isLiElementUpdated:"false",filterName:"ALL"}
}

    onChange = (e) =>{
 this.setState({text:e.target.value});
 }
 onClick = () =>{
     console.log(this.state.text)
   todoList.push({ text: this.state.text,id : id,completed: false})
   id++
   this.setState({text:"",isListElementUpdate:"false"})
 }

onHandleFilterClick = (filterName) => {
    console.log(filterName)
    this.setState({filterName:filterName})
}

 onListElementClick(listId,e){
   if(todoList[listId].completed === false){
       todoList[listId].completed = true
     e.target.className="strike"
   }
   else {
       todoList[listId].completed = false
     e.target.className="no-strike"
   }
   this.setState({isListElementUpdated:"true"})
 }

 render() {
   return(
       <div>
           <input type="text" onChange={this.onChange} value={this.state.text} />
       <button onClick={this.onClick}>OK</button>
       <div>
           <p>
         <span onClick={() => this.onHandleFilterClick("ALL")}>All</span>|
         <span onClick={() => this.onHandleFilterClick("COMPLETED")}>Completed</span>|                            <span onClick={() => this.onHandleFilterClick("PENDING")}>Pending</span>
         </p>
       </div>
       <ul>
           {todoList.map((todo) =>{
         if (this.state.filterName === "COMPLETED" && todo.completed === true)
         {
             console.log("li , completed",todo.completed)
               return <li style={{textDecoration: 'line-through'}} key= {todo.id} id={todo.id} onClick={this.onListElementClick.bind(this,todo.id)}>{todo.text}</li>
         }
         else if (this.state.filterName === "PENDING" && todo.completed === false)
         {
             console.log("li , pending",todo.completed)
               return <li key= {todo.id} id={todo.id} onClick={this.onListElementClick.bind(this,todo.id)}>{todo.text}</li>
         }
         else if (this.state.filterName === "ALL")
         {
             console.log("li , all",todo.completed)
               return <li style={{textDecoration: todo.completed?'line-through':'none'}} key= {todo.id} id={todo.id} onClick={this.onListElementClick.bind(this,todo.id)}>{todo.text}</li>
         }
         })}
       </ul>
     </div>
   );
 }
}