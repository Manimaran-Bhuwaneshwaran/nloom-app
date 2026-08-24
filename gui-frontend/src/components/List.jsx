
import RowElment from "./RowElement";
const List = ({listTitle, listItems, view})=>{
  // console.log(listItems);
  
    return (
    <div className="list-body">
        {view == "SubTopics"? 
        <div className="list-title remove-margin-top-20px">
          <h2>{listTitle}</h2>
        </div>
          : <div className="list-title">
            <h2>{listTitle}</h2>
          </div>
        }
        
        <div className="list-body">
          {
            listItems && listItems.map((topic) => (
            <RowElment key={topic.id} type={view} content={topic.name} id={topic.id} misc={listTitle}></RowElment>
            ))
          }
        </div>
      </div>
    );
};
export default List;