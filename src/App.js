import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [tasks , tasklist] = useState([]);
  const [ addtasks , addtasklsit] = useState("");
  const [done,setdone] = useState(false);

  const addtask = () =>
  {
    if(addtasks !==(""))
    {
      tasklist([...tasks , addtasks ]);
      addtasklsit("");
    }
  }

  const isdone = (index) =>{

    setdone(!done);
    if(!done)
    {
      const updatedTasks = tasks.filter((tasks, idx) => idx !== index);
      tasklist(updatedTasks);
    }
  }

  return (

    
      <div className='main'>
        <div className='left'> 
          <div className='leftbox'>
        <h1> To Do List</h1>
          <input type='text' placeholder='add to do ' value={addtasks} onChange={(e)=>addtasklsit(e.target.value)} />
          <button onClick={addtask}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-node-plus-fill" viewBox="0 0 16 16">
          <path d="M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13m.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0"/>
          </svg>
          </button>
          </div>
          </div>

          <div className='right'>
          <div className='mytasklist'>
          <h3>tasks list</h3>
          {tasks.map((tasks,index) =>
          (
            <ul>
                <li key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FBA382" class="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  {tasks}
                  <button onClick={() => isdone(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FBA382" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  </button>
                </li>
            </ul>

          ))}
          </div>
          </div>
        </div>





  );
}

export default App;
