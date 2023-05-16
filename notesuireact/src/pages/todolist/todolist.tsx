import axios from "axios";
import React, { useEffect, useState } from "react"
import Cookies  from "js-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";
const TodoList=()=>{
    const [todolist,setTodolist]=useState([] as any);
    const [userId,setUserId]=useState(null);
    const [addTask,setAddTask]=useState(false);
    const [updateTake,setUpdateTask]=useState(false);
    const [search,setSearch]=useState("");
    const [todoData,setTodoData]=useState("");
    const [updateData,setUpdatedata]=useState("");
    const [updateUserId,setUpdateUserId]=useState(0);
    const [updateId,setUpdateId]=useState(0);
    const handleAddTask=()=>{
        setAddTask(true);
    }
    const handleAddedTask=()=>{
        const JWT=Cookies.get('user');
        setAddTask(false);

        axios.post("http://localhost:8080/todolist/",{
            userId:userId,
            todoData:todoData
        },{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>window.location.reload()).catch(err=>console.log(err));
    }
    const searchTask=(event:any)=>{
        if(event.target.value==="")
        {
            getUserId();
        }
        else
        {
            const JWT=Cookies.get('user');
            axios.get("http://localhost:8080/todolist/search?query=id:"+userId+",title:"+event.target.value,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>{
                setTodolist([]);
                res.data.map((data:any)=>{
                    setTodolist((element: any)=>[...element,data]);
                })
                console.log(res.data);
                
            })

        }

    }
    const handleSearch=(event:any)=>{
        setSearch(event.target.value);
        searchTask(event);

    }
    useEffect(()=>{
        getUserId();
        console.log("Came here")
    },[]);
    const getUserId=()=>{
        const JWT=Cookies.get('user');
        if(JWT)
        {
            let email=jwt_decode<JwtPayload>(JWT);
            axios.get("http://localhost:8080/user/"+email.sub,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>{
                setUserId(res.data);
                getTodoList(res.data);
            })

        }
        
    }
    const getTodoList=(userId:number)=>{
        const JWT=Cookies.get('user');
        axios.get("http://localhost:8080/todolist/search?query=id:"+userId,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>{
            setTodolist([]);
            res.data.map((data:any)=>{
                setTodolist((element: any)=>[...element,data]);
            })
            console.log(res.data);
            
        })
    }
    const handleUpdatedTask=()=>{
        const JWT=Cookies.get('user');
        setUpdateTask(false);
        axios.put("http://localhost:8080/todolist/"+(updateId),{
            userId:updateUserId,
            todoData:updateData
        },{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>window.location.reload());
    }
    const handleUpdateTask=()=>{
        setUpdateTask(true);
    }
    const deleteTask=(data:any)=>{
        const JWT=Cookies.get('user');
        axios.delete("http://localhost:8080/todolist/"+data.id,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>window.location.reload()).catch(err=>{
            console.log(err);
        });
    }
    const handleTodoData=(event:any)=>{
        setTodoData(event.target.value);
    }
    const updateTask=(data:any)=>{
        handleUpdateTask();
        setUpdatedata(data.todoData);
        setUpdateUserId(data.userId);
        setUpdateId(data.id);

    }
    const handleUpdateData=(data:any)=>{
        setUpdatedata(data.target.value);
    }
        return (
        <>
        <div className="container p-5">
  <div className="input-group">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch}/>
    <button  className="btn border-0"><i className="bi bi-search" style={{fontSize: '1.5rem'}}></i></button>
  </div>
    <div   className="container border-dark border-3 rounded " style={{marginTop:'3rem'}}>
  {todolist.length==0 &&  <h5 className="border-dark bg-danger rounded opacity-25 display-6" >not found ! </h5> }
      
  </div>
  {addTask &&
  <form>
  <button  className="btn btn-outline-dark " onClick={handleAddedTask}>Add Tasks</button>
    <div>

      <input  style={{margin:'1rem',textAlign: 'center', width: '12rem', height: '2rem', boxShadow:' 0 0 5px rgba(0, 0, 0, 0.3)', backgroundColor: '#fafafa'}}
              type="text"
              id="noteUpdateHeading"
              name="noteHeading"
              value={todoData}
              onChange={handleTodoData}
              required
              minLength={1}/>


      <div className="text-warning m-2" >Task is required</div>
    </div>
  </form>
}
{updateTake &&
  <form>
  <button type="submit" className="btn btn-primary" onClick={handleUpdatedTask} >Update task</button>
    <div>

      <input  style={{margin:'1rem',textAlign: 'center', width: '12rem', height: '2rem', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', backgroundColor: '#fafafa'}}
              placeholder="add tasks here"
              type="text"
              id="noteHeading"
              name="noteHeading"
              value={updateData}
              onChange={handleUpdateData}
              required
              minLength={1}

      />

      <div className="text-success m-2" >Task is required</div>
    </div>
    
  </form>}
 {!addTask && <button type="submit" className="btn btn-dark" onClick={handleAddTask}>Add task</button>}
  {todolist.length>0 &&
  <table className="table table-light"  style={{marginTop: '3rem'}}>
    
    <tr>
      <th scope="col">tododata</th>
    </tr>
    {todolist.map((data:any)=> (<><thead className="table-dark">
    </thead>
    <tbody>
    <tr>
      <td className="d-flex justify-content-between">
        <span>  {data.todoData}</span>
        <a ><i onClick={()=>updateTask(data)} >🖊️</i></a>
        <a ><i onClick={()=>deleteTask(data)} >❌</i></a>
      </td>
    </tr>
    </tbody>
    </>
))}
  </table>
}
</div>
  
</>

    )
}
export default TodoList;