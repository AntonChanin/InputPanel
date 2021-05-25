import React, { useState } from 'react';
import { EditButton } from '../edit-button/edit-button.component';
import './edit-form.style.css';

const EditForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');
    return (
      <form 
        className="edit-form"
        onSubmit={event => {
          event.preventDefault();
          saveTodo(value);
          setValue('');
        }}
      >
        <textarea
          className="edit-form__edit-area"
          onChange={event => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <div className="edit-form__edit-btn">
          <EditButton
            onSubmit={
              event => {
                event.preventDefault();
                saveTodo(value);
                setValue('');
              }
            }
          >
          Send
          </EditButton>
        </div>
        
      </form>
  );
};
export default EditForm;