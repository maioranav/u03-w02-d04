export const ADDFAV = "ADDFAV";
export const DELETEFAV = "DELETEFAV";
export const GET_JOBS = "GET_JOBS";
export const JOBS_ERROR = "JOBS_ERROR";
export const JOBS_LOADING = "JOBS_LOADING";
export const JOBS_LOADED = "JOBS_LOADED";

export const getJobsAction = (query, type = "search") => {

   const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?";

   return async (dispatch, getState) => {
      try {
         dispatch({
            type: JOBS_LOADING,
         });
         const response = await fetch(baseEndpoint + type + "=" + query + "&limit=20");
         if (response.ok) {
            const { data } = await response.json();
            dispatch({
               type: GET_JOBS,
               payload: data
            });
            setTimeout(() => { dispatch({ type: JOBS_LOADED }) }, 1000)
         } else {
            dispatch({
               type: JOBS_ERROR,
               payload: "Error while fetching"
            });
            setTimeout(() => { dispatch({ type: JOBS_LOADED }) }, 1000)
         }
      } catch (error) {
         dispatch({
            type: JOBS_ERROR,
            payload: `${error}`
         });
         setTimeout(() => { dispatch({ type: JOBS_LOADED }) }, 1000)
      }
   }
}

export const clearJobsList = () => {
   return async (dispatch, getState) => {
      dispatch({
         type: GET_JOBS,
         payload: ""
      });
      setTimeout(() => { dispatch({ type: JOBS_LOADED }) }, 1000)
   }
}

export const removeFavJob = (id) => {
   return async (dispatch, getState) => {
      dispatch({ type: DELETEFAV, payload: id })
   }
}

export const addFavJob = (data) => {
   return async (dispatch, getState) => {
      dispatch({ type: ADDFAV, payload: data })
   }
}