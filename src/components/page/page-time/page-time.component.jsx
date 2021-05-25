import React from 'react';
import ReactDOM from 'react-dom';
import './page-time.styles.css';

const PageTime = () =>{ 
 
function tick() {
  // Формируем JSX объект element
  const element = (
    <div className="root-time__time-now"> {new Date().toLocaleTimeString()}</div>
  );
   
  // Передаем element в DOM , React следит за предыдущим и новым состоянием элемента
  // и заменяет старое значение на новое
  ReactDOM.render(
    element,
    document.getElementById('root-time')
  );
   
 }
 // Вызываем функцию tick() через секунду
  setInterval(tick, 1000);
  return (
    <div className="page-time" id="root-time"></div>
  );
};
export default PageTime;