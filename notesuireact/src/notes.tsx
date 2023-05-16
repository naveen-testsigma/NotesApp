import React, { useEffect, useState } from "react";
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import { NoteService } from "./service/notes.service";
import Note  from "./models/notes";
import UserService from "./service/userservice.service";
import {Cookies} from "react-cookie";
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";

const ViewNote = () => {
    const [note, setNotes] = useState<Note[]>([]); // Specify the type for the note array
    const [searchQuery, setSearchQuery] = useState("")
    const [noteHeading, setNoteHeading] = useState('');
    const [id ,setId] = useState(Number);
    const [noteBody, setNoteBody] = useState('');
    const [getNotesActivate, setGetNotes] = useState(true)
    const [addnotesActivate, setAddnotesActivate] = useState(false)
    const cookie = new Cookies();
    const [deletetoggle,setDeltetoggle] = useState(true);
    const [validated, setValidated] = useState(false);
    const addNotepass = () => {
    const note = new Note();
    note.noteHeading = noteHeading;
    note.noteBody = noteBody;
    note.userId = id;
    NoteService.addNote(note).then(()=>{
        console.log("added succesfully");
        setGetNotes(true);
        setAddnotesActivate(false);
    }).catch(()=>
    {
        alert("problem in adding notes");
    })
    }

    const handleaddSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
            addNotepass();
        }
    }
        useEffect(() => {
            let userid;
            if (cookie.get("user")) {

                // @ts-ignore
                UserService.getid(jwtDecode(cookie.get("user")).sub).then((data: any) => {
                    NoteService.getAllNotes(searchQuery, data).then((res: any) => {
                        setNotes(res);
                    });
                });
            }
        }, [getNotesActivate,deletetoggle,searchQuery]);

        function deleteNote(note:any) {
            NoteService.removeNote(note.id);
            if(deletetoggle == true)
                setDeltetoggle(false);
            else setDeltetoggle(true);
        }

        function Updatenote(notes:any) {
            setId(notes.id);
            setAddnotesActivate(true);
            setGetNotes(false);
        }

        const AddNote = () => {
            return (
                <Form noValidate validated={validated} onSubmit={handleaddSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="title"
                                    onChange={(e) => setNoteHeading(e.target.value)}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter title.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>notes</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="notes"
                                onChange={(e) => setNoteBody(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">enter notes!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">update note</Button>
                </Form>
            );
        }
        const GetNotes = () => {
            return (
                <Row>
                    {note?.map((notes: Note) => (
                        <Col md={6} lg={4} sm={12} key={notes.id} className="mt-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-between">
                                        <span>{notes.noteHeading}</span>
                                        <span>
                    <Card.Link onClick={()=>Updatenote(notes)}>update</Card.Link>
                    <Card.Link onClick={()=>deleteNote(notes)}>delete</Card.Link>
                  </span>
                                    </Card.Title>
                                    <Card.Text>{notes.noteBody}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            );
        }
    const addfunction = () => {

    };
    const Searchbox =()=>{
        return(
            <div className="input-group">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e)=>setSearchQuery(e.target.value)} />
            <div className="btn-group" >
            <button className="btn border-0" onClick={()=>{addfunction()}}><i className="fa fa-plus-square" aria-hidden="true"/></button>
                </div>
           </div>
                );
    }
        return(
            <Container style={{border: "none"}}>
                <Searchbox/>
                {getNotesActivate &&
                    <GetNotes/>
                }
                {
                    addnotesActivate &&
                    <AddNote/>
                }
            </Container>
        );
    }


export default ViewNote;