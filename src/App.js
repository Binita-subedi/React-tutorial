import React, { Component } from 'react' ;
import './App.css';
import Greet from './Component/Greeting';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
class App extends Component {
    render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
       {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter /> */}
       {/* <Greet name='Bruce' heroname='Batman'><p>This is a children props</p></Greet>
       <Greet name='Clark' heroname='superman'><button>Action</button></Greet>
       <Greet name='Diana' heroname='wonder women'/>
       <Welcome name='Bruce' heroname='Batman'/>
       <Welcome name='Clark' heroname='superman'/> */}
       {/* <Message /> */}
      </div>
    );
  }
}
export default App;
