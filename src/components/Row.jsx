import React,{useState,useEffect} from 'react'
import tmdbAxiosinstance from '../tmdbAxiosinstance'
import './Row.css'



function Row({title,fetchUrl}) {
  const [allMovies,setAllMovies]=useState([])

  const base_url_img='https://image.tmdb.org/t/p/original'

  const fetchData=async ()=>{
    const response= await tmdbAxiosinstance.get(fetchUrl)
    // console.log(response.data.results)
    setAllMovies(response.data.results)

    console.log(allMovies)
  }

  // fetchdata()
  // console.log(fetchUrl)
  useEffect(()=>{
    fetchData()
  },[])

  console.log(allMovies)
  

  return (
    <div className='row'>
      <h1 >{title}</h1>

      <div className='movies-row'>
        {/* <button>kjsfh</button> */}
        {
          allMovies?.map((item)=>(
              <>
                <div className='movie-div'>
                  
                  <img className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="" />
              
                  <p className='movie-name'>{item.original_title}{item.name}</p>
                </div>

              </>
              
          ))
          
        }
        <button>fdsf</button>
      </div>
    </div>
    
  )
}

export default Row