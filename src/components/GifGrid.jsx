import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import GifCard from "./GifCard"

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
       getImages()
    }, [])
    

  return (
    <>
        <h3 className="text-3xl font-bold">{category}</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
            {
                images.map((image) => (
                  <GifCard key={image.id} {...image} />
                ))
            }
        </div>
    </>
  )
}

export default GifGrid