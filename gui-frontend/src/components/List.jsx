
import RowElment from "./RowElement";
import { useState } from "react";
import axios from "axios";
import {BASE_URL} from '../constants/constants';

const List = ({listTitle, items, view, topic})=>{
    const [listItems, setListItems] = useState(items);
    const [showInput, setShowInput] = useState(false);
    const [inputText, setInputText] = useState("");
    const [hasMessage, setHasMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const placeholderText = view === "Topics" ? 
    "enter topic to add" :
    "enter sub topic to add";

    const handleShowInputChange = () => {
      setShowInput(true);
    }
    const handleAddNewElementAction = () => {
      console.log("clicked", inputText);
      if(inputText === "" || inputText.trim().length === 0) {
        setHasMessage(true);
        setStatusMessage('enter valid ' + view);
        setInputText("");
        setTimeout(()=>{
          setHasMessage(false)
          setStatusMessage("");
        }, 5000);
        
      } else {
      console.log("valid input!");
      view === "Topics" ? 
        addTopic(inputText)
        :
        addSubTopic(inputText);
      
      }
    };
    const handleInputTextChange = (e) => {
      setInputText(e.target.value);
    }
    const addTopic = async (topicName) => {
      const newTopic = {
          "userId":"mani007",
          "isEdited":false,
          "name":topicName,
          "createdAt":Date.now(),
          "updatedAt":Date.now()
        }
      await axios.post(BASE_URL + "/api/topics", newTopic)
      .then((res)=>{
        console.log('new topic added!', res);
        setHasMessage(true);
        setStatusMessage('new topic added!');
        setListItems([...listItems, res.data]);
        setInputText("");
        setTimeout(()=>{
          setHasMessage(false)
          setStatusMessage("");
        }, 5000);
      })
      .catch((err)=>{
        console.log('new topic add opeartion failed! err:', err);
      });
    }
    const addSubTopic = async (subTopicName) => {
      const newSubTopic = {
          "topicId": topic,
          "userId":"mani007",
          "isEdited":false,
          "name":subTopicName,
          "createdAt":Date.now(),
          "updatedAt":Date.now()
        }
      await axios.post(BASE_URL + "/api/subtopics", newSubTopic)
      .then((res)=>{
        console.log('new subtopic added!', res);
        setHasMessage(true);
        setStatusMessage('new subtopic added!');
        setListItems([...listItems, res.data]);
        setInputText("");
        setTimeout(()=>{
          setHasMessage(false)
          setStatusMessage("");
        }, 5000);
      })
      .catch((err)=>{
        console.log('new sub topic add opeartion failed! err:', err);
      });
    }
    return (
    <div className="list-body">
        {view == "SubTopics"? 
        <div className="list-title remove-margin-top-20px">
          <h2>{listTitle}</h2>
          {/* <div className="actions">
            <button>🖍</button>
            <button>🗑</button>
          </div> */}
        </div>
          : <div className="list-title">
            <h2>{listTitle}</h2>
          </div>
        }
        
        <div className="list-body">
          {
            listItems && listItems.map((topicItem) => (
            <RowElment key={topicItem.id} type={view} content={topicItem.name} id={topicItem.id} misc={listTitle}></RowElment>
            ))
          }
        </div>
        <div className="new-item">
          {hasMessage && 
          <p style={{color: 
          statusMessage.includes("enter valid") || 
          statusMessage.includes("err") ? "red": "green"
          }} className="statusMessage">{statusMessage}</p>}
          {showInput ? 
          <div className="row">
            <input type="text" placeholder={placeholderText} 
            value={inputText} onChange={handleInputTextChange}/>
            <button onClick={handleAddNewElementAction}>➤</button>
          </div>
          :
          <div className="new-button">
            <button onClick={handleShowInputChange}>✚</button>
          </div>
          }
          
        </div>
      </div>
    );
};
export default List;