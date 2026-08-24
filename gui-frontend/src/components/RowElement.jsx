const RowElement = ({type, content, id}) => {
  return (
    <div className="row-element row element">
      <h3 id= {type+ "-" +id} className={type}> ⤷ {content}</h3>
    </div>
  );
};

export default RowElement;