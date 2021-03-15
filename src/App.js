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
      phone:9421441144
    }
  ]

  let deleteSubscriber = (id)=>{
    console.log(id);
     subscribers = subscribers.map((value,index)=>{
      
        return value;
      
    })
    console.log(subscribers); 
  }


  let subscriberList = subscribers.map((value,index)=>{
    return (
      <div className="grid-container" key={value.id}>
        <span className="grid-item">{value.name}</span>
        <span className="grid-item">{value.phone}</span>
        <button className="delete">Delete</button>
      </div>
    )
  })

  return (
     <div>
      <Header heading="Phone Directory"></Header>
      <button className="add-btn">Add</button>
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
