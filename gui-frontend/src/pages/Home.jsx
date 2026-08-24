import { useState, useEffect } from "react";
import List from "../components/List";
import axios from 'axios';

const Home = () => {

  const [topics, setTopics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const TOPICS = "Topics";

 useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/topics');
        setTopics(response.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
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
      {
        !loading && 
        error != null ? 
          topics != null ?
          <List listTitle={TOPICS} listItems={topics} view={TOPICS}></List>
          :
          <div className="error">
          <p>Something went wrong. It's not you, It's us. Try after sometime</p>
        </div>
        :
        topics != null ?
        <List listTitle={TOPICS} listItems={topics} view={TOPICS}></List>
        :
        <div className="warning">
          <p>No topics found!. add new topics and get started!</p>
        </div>
      }
    </div>
  );
};

export default Home;