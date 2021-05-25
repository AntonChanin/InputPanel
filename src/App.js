import React, { useState } from 'react';
import  PageList  from './components/page/page-list/page-list.component';
import  PageTime  from './components/page/page-time/page-time.component';
import './App.css';

function App() {
  const [touchStatus, setTouchStatus] = useState(true);
  let x1 = null;
  let y1 = null;

  function handleTouchStart(e) {
    const firstTouch = e.nativeEvent.touches[0];
    
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY
  }

  function handleTouchEnd(e) {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = e.nativeEvent.changedTouches[0].clientX;
    let y2 = e.nativeEvent.changedTouches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // r - l
      if (xDiff > 0) {
        setTouchStatus('swipe-right');
        console.log('right', 'swipe-right');
      } else {
        setTouchStatus('swipe-left');
        console.log('left', touchStatus);
      }
    }
    x1 = null;
    y1 = null;
  }

  return (
    <div className="App">
      <div className="app-swipe" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className={`swipe ${touchStatus}`}>
          <PageList/>
        {/* <div className={touchStatus === 'end-left' ? !touchStatus ? 'swipe-right' : 'swipe-left' : touchStatus}> */}
          <PageTime/>
        </div>
      </div>
    </div>
  );
}

export default App;
