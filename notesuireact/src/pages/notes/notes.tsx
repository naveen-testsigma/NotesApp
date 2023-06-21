import React, { useEffect, useState } from "react";
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import { NoteService } from "../../service/notes.service";
import Note  from "../../models/notes";
import UserService from "../../service/userservice.service";
import Cookies  from "js-cookie";
import jwtDecode  from "jwt-decode";
const ViewNote = () => {
    const [note, setNotes] = useState<Note[]>([]); // Specify the type for the note array
    const [userId,setUserId]=useState(0);
    const [noteupdate,setNoteupdate] = useState<Note>();
    const [id,setId] = useState(0);
    const [noteHeading, setNoteHeading] = useState('');
    const [searchbox,setSearchbox] = useState(true);
    const [search,setSearch]=useState("");
    const [noteBody, setNoteBody] = useState('');
    const [getNotesActivate, setGetNotes] = useState(true)
    const [addnotesActivate, setAddnotesActivate] = useState(false)
    const [deletetoggle,setDeltetoggle] = useState(true);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (Cookies.get("user")) {

            // @ts-ignore
            UserService.getid(jwtDecode(Cookies.get("user")).sub).then((data: any) => {
                setUserId(data);
                NoteService.getAllNotes(search, data).then((res: any) => {
                    setNotes(res);
                });
            });
        }
    }, [getNotesActivate,deletetoggle,search]);

    function noteAdd(note:any){
        NoteService.addNote(note).then(()=>{
            console.log("added succesfully");
        });
    }
    function noteUpdate(note:any){
        NoteService.updateNote(note).then(()=>{
            console.log("updated successfully");
        })
        setId(0);
    }
    function addNotepass() {
    const note = new Note();
    note.noteHeading = noteHeading;
    note.noteBody = noteBody;
    note.userId = userId;
        console.log("in add notes user " + id + " if update id" );
        if(id==0){
            noteAdd(note);
    }
        else{
            note.id = id;
            noteUpdate(note);
        }
        setGetNotes(true);
        setSearchbox(true);
        setAddnotesActivate(false);
    }
    const handleSearch=(event:any)=>{
        setSearch(event.target.value);
        NoteService.getAllNotes(search, userId).then((res: any) => {
            setNotes(res);

        });

    }
    const handleaddSubmit = (event:any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
            setValidated(true);
            addNotepass();
    };
        function deleteNote(note:any) {
            console.log(note.id + "in delete note");
            NoteService.removeNote(note.id);
            if(deletetoggle === true)
                setDeltetoggle(false);
            else setDeltetoggle(true);
        }

        function Updatenote(notes:any) {
            setId (notes.id);
            setAddnotesActivate(true);
            setGetNotes(false);
            setSearchbox(false);
        }
    const addfunction = () => {
     setAddnotesActivate(true);
     setGetNotes(false);
     setSearchbox(false);
    };

    return(
            <Container style={{border: "none"}}>
                { searchbox &&
                    <Container className="mt-5">
                        <Row>
                            <Col>
                                <Form className="d-flex">
                                    <Form.Control
                                        onChange={handleSearch}
                                        value={search}
                                        type="search"
                                        className="me-2 rounded-pill"
                                        aria-label="Search"
                                    />
                                    <a href='#' onClick={()=>addfunction()} className="text-success">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                </Form>
                            </Col>
                        </Row>
                    </Container>

                }
                {getNotesActivate &&
                    <Row>
                        {note?.map((notes: Note) => (
                            <Col md={6} lg={4} sm={12} key={notes.id} className="mt-2">
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <span>{notes.noteHeading}</span>
                                            <span>
                    <a href='#' className="text-warning p-2" onClick={()=>Updatenote(notes)}><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    <a href='#' className="text-danger" onClick={()=>deleteNote(notes)}><i className="fa fa-trash" aria-hidden="true"></i></a>
                  </span>
                                        </Card.Title>
                                        <Card.Text>{notes.noteBody}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                }
                {
                    addnotesActivate &&
                    <Form noValidate validated={validated} onSubmit={handleaddSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    onChange={(e)=> setNoteHeading(e.target.value)}
                                    placeholder="Title"
                                    value={noteHeading}

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Body</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="body"
                                        onChange={(e)=> setNoteBody(e.target.value)}
                                        value={noteBody}
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Button type="submit" variant="outline-success">Add</Button>
                    </Form>
                }
            </Container>
        );
    }


export default ViewNote;