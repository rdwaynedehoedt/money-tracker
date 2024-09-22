import { useState } from 'react';
import './App.css';


function App() {
  const[name,setName] = useState( '');
  const[datetime,setDatetime] = useState('');
  const[discription,setDiscription]= useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+ '/transaction';
    fetch(url,{
      method:'POST',
      headers:{'Content-type' : 'application/json '},
      body: JSON.stringify({name,discription,datetime })
    }). then(response=> {
      response.json (). then( json  => {console.log('resuts',json);

      } )
    })
  }
  return (
    <main>
      <h1>
        $400.<span>00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic ">
        <input type="text" 
        value={name} 
        onChange={ev => setName(ev.target.value)}
        placeholder='+200 new Samsung Tv'/>
        <input 
        value={datetime} 
        onChange={ev => setDatetime (ev.target.value)}
        type="datetime-local"/> 
        </div>
        <div className="discription">
        <input 
          value={discription}
          onChange={ev => setDiscription(ev.target.value)}
        type="text" placeholder='discription'/> 
        </div>
        <button  type="Submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
            <div className="left">
              <div className="name"> New Samsung Tv </div>
              <div className="discription"> it was time for new tv </div>
            </div>
            <div className="right ">
            <div className="price red"> -500$</div>
            <div className="datetime"> 2024-12-18   12:32</div>
            </div>
        </div>
      </div>
      <div className="transactions">
        <div className="transaction">
            <div className="left">
              <div className="name"> New website  </div>
              <div className="discription"> it was time for new tv </div>
            </div>
            <div className="right ">
            <div className="price green"> +400$</div>
            <div className="datetime"> 2024-12-1 8   12:32</div>
            </div>
        </div>
      </div>
      <div className="transactions">
        <div className="transaction">
            <div className="left">
              <div className="name"> New Samsung Tv </div>
              <div className="discription"> it was time for new tv </div>
            </div>
            <div className="right ">
            <div className="price red"> -700$</div>
            <div className="datetime"> 2024-12-18 12:32</div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default App;