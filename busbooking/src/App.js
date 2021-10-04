import './App.css';
import Button from './Button';
import ButtonRight from './ButtonRight';
//import Container from './Container';
import {Provider} from 'react-redux';
import Store from './Store';
import HooksContainer from './HooksContainer';
import './App.css';
//import Changecolor from './Changecolor';
//import UsersContainer from './practice';



function App() {
  return (
  <div>
    <div className="App">
      <h1>welcome to bus booking system</h1>
    </div>
    
    <div className="container">
        <h1>book your seat here</h1>
        <Provider store={Store}>
        {/* <Container/> */}
        <HooksContainer/>
        {/* <UsersContainer /> */}
        </Provider>
        {/* <Changecolor/> */}
        {/* <span>
        <Button number={<h1>seatno-1</h1>}/>
        <Button number={<h1>seatno-2</h1>}/>
        <Button number={<h1>seatno-3</h1>}/>
        <Button number={<h1>seatno-4</h1>}/>
        <Button number={<h1>seatno-5</h1>}/>
        <Button number={<h1>seatno-6</h1>}/>
        </span>
        <span>
        <ButtonRight number={<h1>seatno-7</h1>}/>
        <ButtonRight number={<h1>seatno-8</h1>}/>
        <ButtonRight number={<h1>seatno-9</h1>}/>
        <ButtonRight number={<h1>seatno-10</h1>}/>
        <ButtonRight number={<h1>seatno-11</h1>}/>
        <ButtonRight number={<h1>seatno-12</h1>}/>
        </span> */}
      </div>
    </div>
  );
}

export default App;
