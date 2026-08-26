import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Choose your preferred theme
import { formatIsoDate } from '../utils/dateUtils';


const Notes = () => {

    const [notes, setnotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [editNoteId, setEditNoteId] = useState("");
    const [noteCreatedAt, setNoteCreatedAt] = useState("");
    const [inputText, setInputText] = useState("");
    const [hasMessage, setHasMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const placeholderText = "Notes content goes here!";
    
    const {subTopicName, subTopicId, topicName} = useLocation().state;

    const handleAddNewElementAction = () => {
      console.log("clicked", inputText);
      if(inputText === "" || inputText.trim().length === 0) {
        setHasMessage(true);
        setStatusMessage('enter valid content to add into notes');
        setInputText("");
        setTimeout(()=>{
          setHasMessage(false)
          setStatusMessage("");
        }, 5000);
        
      } else {
        console.log("valid input!");
        addNote(inputText);
      }
    };
    const addNote = async (noteContent) => {
        let payload;
        if(editNoteId.length != 0) {
            payload = {
                "id":editNoteId,
                "subTopicId": subTopicId,
                "userId": "mani007",
                "isEdited": true,
                "isArchived": false,
                "content": noteContent,
                "createdAt": Date.now(),
                "updatedAt":  Date.now()
            }
        } else {
            payload = {
                "subTopicId": subTopicId,
                "userId": "mani007",
                "isEdited": false,
                "isArchived": false,
                "content": noteContent,
                "createdAt": noteCreatedAt,
                "updatedAt":  Date.now()
            }
        }
        await axios.post("http://localhost:8080/api/notes", payload)
        .then((res)=>{
            setHasMessage(true);
            setStatusMessage(editNoteId.length != 0? 
                'Note updated!' : 
                'New note added! ');
            setInputText("");
            setEditNoteId("");
            loadNotes();
            setTimeout(()=>{
                setHasMessage(false)
                setStatusMessage("");
            }, 5000);
        })
        .catch((err)=>{
            setHasMessage(true);
            setStatusMessage(editNoteId.length != 0?
                'update operation failed, Err:' +err:
                'Adding new note operation failed, Err:' +err);
            setInputText("");
            setEditNoteId("");
            setTimeout(()=>{
                setHasMessage(false)
                setStatusMessage("");
            }, 5000);
        })
    }
    const handleInputTextChange = (e) => {
        setInputText(e.target.value);
        e.target.style.height = "auto"; 
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }

    const handleEdit = (noteId, noteContent, noteCreatedDate) => {
        setInputText(noteContent);
        setEditNoteId(noteId);
        setNoteCreatedAt(noteCreatedDate);
    }
    const loadNotes = async () => {
        try {
            console.log("start");
            
            setLoading(true);
            const response = await axios.get('http://localhost:8080/api/notes/subTopic/' + subTopicId);
            setnotes(response.data);
            console.log("success", response.data);
        } catch (err) {
            setError(err.message || 'Something went wrong');
            console.log("error", err.message);
        } finally {
            setLoading(false);
            console.log("end");
        }
    }
    useEffect(()=>{
        loadNotes();
    },[]);

    return (
        <div className="app-container">
            <div className="notes">
                <div className="notes-head">
                    <h3>{topicName} / {subTopicName}</h3>
                </div>
                <div className="notes-body">
                    <div className="notes-entry">
                        {!loading && notes.map((note)=>(
                            <div className="entry" key={note.id}>
                                {/* <p>{note.content}</p> */}
                                <div className="markdown-wrapper">
                                    <Markdown rehypePlugins={[rehypeHighlight]}
                                    >{note.content.replace(/\n/g, '  \n')}</Markdown>
                                </div>
                                <div className="light">
                                    <div className="status-bar">
                                        <span>{formatIsoDate(note.updatedAt)}</span>
                                        {note.isEdited && <span className="edited">edited</span>}
                                    </div>
                                    <div className="actions">
                                        {note.id !== editNoteId ? 
                                        <button onClick={()=>handleEdit(note.id, note.content, note.createdAt)}>🖍</button>:
                                        <button disabled>🚫</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className="new-item">
                    {hasMessage && 
                        <p style={{color: 
                            statusMessage.includes("enter valid") || 
                            statusMessage.includes("err") ? "red": "green"
                        }} className="statusMessage">{statusMessage}</p>}
                    
                    <div className="row">
                        <textarea 
                        rows={1}
                        name="noteContent" id="noteContent" 
                        placeholder={placeholderText} 
                        value={inputText} 
                        onChange={handleInputTextChange}></textarea>
                        {/* <input type="text"/> */}
                        <button onClick={handleAddNewElementAction}>➤</button>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;