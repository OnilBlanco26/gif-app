import PropTypes from 'prop-types'

const GifCard = ({title, url}) => {



  return (
    <div className='rounded-md w-auto h-auto overflow-hidden bg-white text-black flex flex-col items-center flex-wrap shadow-md shadow-black'>
        <img className='w-full h-auto' src={url} alt={title} />
        <h3 className=" text-lg text-center font-bold uppercase mx-4">{title}</h3>
        {/* <a href={url} download={true} target='_blank'>
            <button>Download</button>
        </a> */}
    </div>
  )
}

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}



export default GifCard