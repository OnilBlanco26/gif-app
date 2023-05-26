import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = () => {
       setCategories(['valorant', ...Categories])
    }

  return (
    <div className="flex flex-col justify-center">
        
        <h1 className="">
          GifExpertApp
        </h1>
        <AddCategory />

        <button className="border-2 " onClick={onAddCategory}>Agregar</button>
        <ol className="list-item">
            {Categories.map( categorie => (
                <li key={categorie}>{categorie}</li>
            ))}
           </ol>
    </div>
  )
}

export default GifExpertApp