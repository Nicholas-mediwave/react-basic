import {useState} from "react";

const AddMovieForm = (props) => {
    const [name, setName] = useState("");
  
    function handleChange(e) {
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      props.onAdd(name);
      setName("");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <input type="submit" value="Add item" />
      </form>
    );
  }

  export default AddMovieForm;