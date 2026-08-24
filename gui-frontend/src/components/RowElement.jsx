import { Link } from "react-router-dom";

const RowElement = ({type, content, id, misc}) => {
  const topic = {topicName: content, topicId: id};
  const subTopic = {subTopicName: content, subTopicId: id, topicName: misc};
  
  return (
    <div className="row-element row element">
      {type == "Topics" && <Link to="/subTittle" state={topic}>
        <h3 id= {type+ "-" +id} className={type}> ⤷ {content}</h3>
      </Link>}
      {type == "SubTopics" && <Link to="/notes" state={subTopic}>
        <h3 id= {type+ "-" +id} className={type}> ⤷ {content}</h3>
      </Link>}
      
    </div>
  );
};

export default RowElement;