const Person = ({ name, id, removePerson }) => {

  return (
    <div style={{display: "flex", margin: "10px 400px", justifyContent: "space-around"}}>
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default Person;
