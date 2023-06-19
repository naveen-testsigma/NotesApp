import React, {useState} from "react";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import ViewNote from "../../notes";
import TodoList from "../todolist/todolist";


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
        <Container>{
            maindashshow &&
            <ButtonGroup>
                <Button onClick={Handlenoteshow} className="btn-outline-dark" >
                    Notes
                </Button>
                <Button onClick={Handletodoshow} className="btn-outline-warning">
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
    );
}

export default MainDashboard;