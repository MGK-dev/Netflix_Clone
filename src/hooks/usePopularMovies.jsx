import axios from "axios";
import { useDispatch } from "react-redux";
import { Popular_Movie, options } from "../utils/constant";
import { getPopularMovie } from "../redux/movieSlice";

const usePopularMovies = async () => {
  try {
    const dispatch = useDispatch();
    const res = await axios.get(Popular_Movie, options);
    dispatch(getPopularMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovies;
