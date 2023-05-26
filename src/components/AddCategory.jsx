import { useState } from "react"


const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch')

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
    }
    
  return (
    <input
        className="border-2"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ handleOnChange }
    />
  )
}

export default AddCategory