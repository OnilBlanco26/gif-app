import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return; 

      setCategories([newCategory, ...categories])
    }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        
        <h1 className="">
          GifExpertApp
        </h1>
        <AddCategory 
        // setCategories={setCategories} 
        onAddCategory={onAddCategory}
        />

     {
      categories.map(category => (
        <GifGrid key={category} category = {category} />
      ))
     }
       
    </div>
  )
}

export default GifExpertApp