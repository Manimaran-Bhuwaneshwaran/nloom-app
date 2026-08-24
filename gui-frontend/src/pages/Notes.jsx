import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Notes = () => {

    const [notes, setnotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {subTopicName, subTopicId, topicName} = useLocation().state;

    useEffect(()=>{
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
                            <div className="entry">
                                <p>{note.content}</p>
                                <div className="light">
                                    <div className="status-bar">
                                        {/* <span>{note.updatedAt}</span> */}
                                        {note.isEdited && <span className="edited">edited</span>}
                                    </div>
                                    <div className="actions">
                                        <button>...</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    {/* <div className="new-note">
                        <textarea name="newNote" id="newNote"></textarea>
                        <button>⌞ ⌝</button>
                        <button>➤</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Notes;