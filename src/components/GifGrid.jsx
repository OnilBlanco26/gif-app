import GifCard from "./GifCard"
import useFetchGifs from "../hooks/useFetchGifs"
import PropTypes from 'prop-types';
import AnimatedText from "./AnimatedText";

const GifGrid = ({ category, limit }) => {

  const {images, isLoading} = useFetchGifs(category, limit)
  
    
  return (
    <div className="mt-8">
       
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="flex flex-wrap items-center justify-center gap-4 bg-base-200/30 mx-4 rounded-md p-2 border-2 border-yellow-400 shadow-lg shadow-yellow-400">
        <AnimatedText text={category} className="text-4xl text-yellow-400" />
            {
                images.map((image) => (
                  <GifCard key={image.id} {...image} />
                ))
            }
        </div>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid