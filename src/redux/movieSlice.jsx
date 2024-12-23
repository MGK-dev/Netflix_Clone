import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upComingMovie:null,
        toggle:false
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state, action) => {
            state.popularMovie = action.payload;
        },
        getTopRatedMovie:(state, action) => {
            state.topRatedMovie = action.payload;
        },
        getUpComingMovie:(state, action) => {
            state.upComingMovie = action.payload;
        },
        setToggle:(state) => {
            state.toggle = !state.toggle;
        }
        
    }
})
export const { getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpComingMovie, setToggle } = movieSlice.actions;
export default movieSlice.reducer;