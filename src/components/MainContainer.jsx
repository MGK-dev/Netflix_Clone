import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const MainContainer = () => {

  const movie = useSelector(store => store.movie?.nowPlayingMovies); //? is if any error


  return (
    <div>
        <VideoTitle />
        <VideoBackground /> 
    </div>
  )
}

export default MainContainer