import React, { useState } from 'react'
import "./AddNew.css";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddNew() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addNewTask = event => {
    event.preventDefault();
    setNewTask('');
  };
  const addToList = () => {
    console.log(newTask)
    if(newTask !== ""){
      setTodoList([...todoList, {text: newTask, isDone: false}]);
    }
  }
  const checkBoxHandler = (e, todo) => {
    const newTodo = todoList.map(t => {
      if (t.text === todo.text) {
        return {...t, isDone: !t.isDone};
      }
      return t;
    });
    setTodoList(newTodo);
  }
  const deleteHandler = () => {
    if(Object.keys(todoList).length === 0){
      return window.alert("nothing to be deleted")
    }
    const newList = todoList.filter(t => {
        return !t.isDone;
    })
    setTodoList(newList);
    if(newList.length === 0){
      return window.alert("congrats!")
    }
  }
  const deleteButtonHandler = (e, todo) => {
    const newList = todoList.filter((t) => {
      return t != todo;
    });
    setTodoList(newList);
  }

  return (
    <div className='app__body'>
        
      <div className='app__todos'>
          {todoList.length === 0 ? "" : todoList.map((todo, i) => 
            <div key={i} className='app__todo'>
              <Stack direction='horizontal' gap={3}>
              <div>{" "}</div>
              <Form.Check value={todo}
              checked={todo.isDone} 
              onChange={e => checkBoxHandler(e.target.value, todo)}>
              </Form.Check>
              <label className={todo.isDone ? "strike" : "todo"} >
                {todo.text}
              </label>
              <Button onClick={(e) => {deleteButtonHandler(e, todo)}}>Delete</Button>
              </Stack>
            </div>
            )}
      </div>
      <div className='app__inputForm'>
        <Stack direction='horizontal' gap={1}>
        <form className='app__addTask' onSubmit={addNewTask} >
            <input type="text" placeholder="New task..." className='app__input' required
              value={newTask} onChange={e => setNewTask(e.target.value)}></input>
          <Button variant="secondary" active type='submit' onClick={addToList}>Add</Button>
        </form>
        <div className="vr" />
        <Button variant="outline-danger" onClick={e => deleteHandler(e.target.value)}>Delete Completed Tasks</Button>
      </Stack>
      </div>
      
    </div>
  )
}

export default AddNew