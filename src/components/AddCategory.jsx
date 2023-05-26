import { useState } from "react"


const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
      event.preventDefault()
      if(inputValue.trim().length <= 1) return 

      onNewCategory( inputValue.trim())
      setInputValue('')
    }
    
  return (
    <form onSubmit={ onSubmit } action="">
      <input
          className="border-2"
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={ handleOnChange }
      />
    </form>
  )
}

export default AddCategory