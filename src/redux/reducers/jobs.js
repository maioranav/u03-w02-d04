import { GET_JOBS, JOBS_ERROR, JOBS_LOADED, JOBS_LOADING } from "../actions";

const initialState = {
   jobs: [],
   isLoading: false,
   error: ""
}

const jobsReducer = (state = initialState, action) => {

   switch (action.type) {
      case JOBS_LOADING:
         return { ...state, isLoading: true, error: "" }
      case JOBS_LOADED:
         return { ...state, isLoading: false }
      case JOBS_ERROR:
         return { ...state, error: action.payload }
      case GET_JOBS:
         return { ...state, jobs: action.payload }
      default:
         return state;
   }


}

export default jobsReducer