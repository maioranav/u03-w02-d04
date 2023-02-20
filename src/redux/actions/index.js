export const ADDFAV = "ADDFAV";
export const DELETEFAV = "DELETEFAV";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const getJobsAction = (query) => {

   const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

   return async (dispatch, getState) => {
      try {
         const response = await fetch(baseEndpoint + query + "&limit=20");
         if (response.ok) {
            const { data } = await response.json();
            dispatch({
               type: GET_JOBS,
               payload: data
            });
         } else {
            dispatch({
               type: GET_JOBS_ERROR
            });
         }
      } catch (error) {
         dispatch({
            type: GET_JOBS_ERROR
         });
      }
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