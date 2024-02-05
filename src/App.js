import flowers from './flowers.png';
import yay from './yay.gif';
import './App.css';
import { useState } from 'react';

const App = () => {
  let [yesH, setYesH] = useState(75);
  let [yesW, setYesW] = useState(75);
  let [greenLight, setGreenLight] = useState(false);

  const noClicked = () => {
    setYesH(yesH+=25);
    setYesW(yesW+=25);
    const top = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    const left = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    document.getElementById('no-button').style.position = 'absolute';
    document.getElementById('no-button').style.top = `${top}px`;
    document.getElementById('no-button').style.left = `${left}px`;
  };

  const yesClicked = () => {
    setGreenLight(true);
    document.getElementById('buttons').style.display = 'none';
  };

  const renderYes = () => {
    return (
      <div>Yay &lt;3</div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
          Will you be my Valentines babygirl? :3
        <img src={greenLight ? yay : flowers} className="App-logo" alt="logo" />
        <div id='buttons' className='buttons' style={{display: 'flex'}}>
          <button
            className='yes'
            style={{width: yesW, height: yesH}}
            onClick={yesClicked}
          >Yes</button>
          <button
            id='no-button'
            className='no'
            style={{width: '75px', height: '75px'}}
            onClick={noClicked}
          >No</button>
        </div>
        {greenLight ? renderYes() : null}
      </header>
    </div>
  );
}

export default App;
