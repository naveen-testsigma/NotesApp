import React, {useState} from "react";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import ViewNote from "../../notes";


const MainDashboard =()=>{
    const [maindashshow,SetMaindashshow] = useState(true);
    const [noteshow,SetNoteshow] = useState(false);
    const [todoshow,SetTodoshow] = useState(false);
    const Handlenoteshow =()=>{
        SetMaindashshow(false);
        SetTodoshow(false);
        SetNoteshow(true);
    }
    return(
        <Container>{
            maindashshow &&
            <ButtonGroup>
                <Button onClick={Handlenoteshow} className="btn-outline-dark" >
                    Notes
                </Button>
                <Button className="btn-outline-warning">
                    Todolist
                </Button>
            </ButtonGroup>
        }
            {
                noteshow &&
               <ViewNote/>
            }
        </Container>
    );
}

export default MainDashboard;