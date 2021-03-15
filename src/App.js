import React,{Component} from 'react';
import Header from '../src/Header';
import './App.css';
function App() {
  let subscribers = [
    {
      id:101,
      name:'Tejas',
      phone:9742827993
    },
    {
      id:102,
      name:'M',
      phone:9421441141
    }
  ]
  let subscriberList = subscribers.map((value,index)=>{
    return (
      <div className="grid-container" key={value.id}>
        <span className="grid-item">{value.name}</span>
        <span className="grid-item">{value.phone}</span>
      </div>
    )
  })

  return (
    <div>
      <Header></Header>
      <button className="addBtn">Add</button>
      <br/>
      <div className="grid-container">
        <span className="grid-item">Name</span>
        <span className="grid-item">Phone</span>
      </div>
      {subscriberList}
    </div>
  );
}

export default App;
