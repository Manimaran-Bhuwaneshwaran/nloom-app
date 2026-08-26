import { useState, useEffect } from "react";
import List from "../components/List";
import axios from 'axios';

import { useLocation } from 'react-router-dom';

const SubTitttles = () => {
  const [subTopics, setSubTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SUB_TOPICS = "SubTopics";

  const {topicName, topicId} = useLocation().state;

 useEffect(() => {
    const fetchTopics = async () => {
      try {
        console.log("Start: calling API", topicId, topicName);
        
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/subtopics/topic/' + topicId);
        setSubTopics(response.data);
        console.log("Success: calling API", response.data);
      } catch (err) {
        console.log("Error: calling API", err.message);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
        console.log("End: calling API");
      }
    };

    fetchTopics();
  }, []);

    return (
        <div className="app-container">
            {!loading && <List listTitle={topicName} items={subTopics} view={SUB_TOPICS} topic={topicId}></List>}
            
        </div>
    );
};

export default SubTitttles;