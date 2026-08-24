
import RowElment from "./RowElement";
const List = ({listTitle, listItems, view})=>{
    return (
    <div className="list-body">
        <div className="list-title">
          <h2>{listTitle}</h2>
        </div>
        <div className="list-body">
          {
            listItems && listItems.map((topic) => (
            <RowElment key={topic.id} type={view} content={topic.name} id={topic.id}></RowElment>
            ))
          }
        </div>
      </div>
    );
};
export default List;