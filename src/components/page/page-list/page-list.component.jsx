import React, { useState } from 'react';
import EditForm from '../../../components/edit-form/edit-form.component';
import Typer from '../../typer/typer.component';
import './page-list.style.css';

const PageList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="page-list">
      <EditForm saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}/>
      <div className="list">
        {todos.map((todo, index) => (
          <div className="list__item" key={index.toString() + Math.random()*100}>
            <Typer
              last={index+1 === todos.length} 
              dataText={[todo]}
            />
          </div>
        ))}
      </div>
    </div>
)};

export default PageList;