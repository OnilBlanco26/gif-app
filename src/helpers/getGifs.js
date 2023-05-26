export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=RZu1OdikEZaZkBzx6sk1a0QQK2Y9Ko7Y&q=${category}&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json()

    
   
   const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
   }))
   console.log(gifs)
   return gifs
}
