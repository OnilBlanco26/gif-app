import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"
import AddLimit from "./components/AddLimit"
import AnimatedText from "./components/AnimatedText"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mono'])
    const [limit, setLimit] = useState(5);

    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return; 

      setCategories([newCategory, ...categories])
    }

    const onAddLimit = (lim) => {
      setLimit(lim)
    }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        
       <AnimatedText text='Find your favorite gifs'  className="mb-8"/>
        <div className="flex gap-8">
        <AddCategory 
        // setCategories={setCategories} 
        onAddCategory={onAddCategory}
        />
        <AddLimit onAddLimit={onAddLimit} />
        </div>

     {
      categories.map(category => (
        <GifGrid key={category} category = {category} limit={limit} />
      ))
     }
       
    </div>
  )
}

export default GifExpertApp