import { useState, useEffect } from "react";
import List from "../components/List";
import axios from 'axios';

const AppPage = () => {

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const TOPICS = "Topics";

 useEffect(() => {
    const fetchTopics = async () => {
      try {
        console.log("Start: calling API");
        
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/topics');
        setTopics(response.data);
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
      <div className="app-head">
        <div className="app-title">
          <h1>NLoom</h1>
        </div>
        <div className="app-actions">
          <button>⋮</button>
        </div>
        <div className="app-action-options">
          <button>✖</button>
          <button>new topic</button>
          <button>new sub topic</button>
          <button>archived items</button>
        </div>
      </div>
      <div className="app-meta">
        <div className="search">
          <input type="text" name="search" id="search" />
          <button>🔍︎</button>
        </div>
      </div>
      <List listTitle={TOPICS} listItems={topics} view={TOPICS}></List>
    </div>
  );
};

export default AppPage;