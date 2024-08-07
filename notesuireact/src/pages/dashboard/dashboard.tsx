import React, {useState} from "react";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import ViewNote from "../notes/notes";
import TodoList from "../todolist/todolist";
import Navbar from "../../navbar";


const MainDashboard =()=>{
    const [maindashshow,SetMaindashshow] = useState(true);
    const [noteshow,SetNoteshow] = useState(false);
    const [todoshow,SetTodoshow] = useState(false);
    const Handlenoteshow =()=>{
        SetMaindashshow(false);
        SetTodoshow(false);
        SetNoteshow(true);
    }
    const Handletodoshow = () =>{
        SetMaindashshow(false);
        SetNoteshow(false);
        SetTodoshow(true);
    }
    return(
        <>
        <Navbar isLogin={true} />
        <Container>{
            maindashshow &&
            <ButtonGroup className="container-lg p-5 m-5">
                <Button onClick={Handlenoteshow} variant="outline-success">
                    Notes
                </Button>
                <Button onClick={Handletodoshow} variant="outline-danger" >
                    Todolist
                </Button>
            </ButtonGroup>
        }
            {
                todoshow &&
                <TodoList/>
            }
            {
                noteshow &&
               <ViewNote/>
            }
        </Container>
        </>
    );
}

export default MainDashboard;