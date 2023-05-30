
const AddLimit = ({onAddLimit}) => {

    const handleSelect = (event) =>{
        const value = event.target.value;
        onAddLimit(value)
    }

  return (
    <select onChange={handleSelect} className="select select-warning w-[5rem] rounded-md">
    <option disabled selected>5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="25">25</option>
    <option value="35">35</option>
    <option value="50">50</option>
  </select>
  )
}

export default AddLimit