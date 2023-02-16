const initialState = {
   //IL NOSTRO STATO INIZIALE
   favs: []
}

const mainReducer = (state = initialState, action) => {


   //eseguo qualcosa per ogni azione.tipo del reducer interpellato

   switch (action.type) {
      case "ADDFAV":
         if (state.favs.filter((element) => element._id === action.payload._id).length > 0) {
            alert("Hai già aggiunto questo elemento")
            return state
         } else {
            return { ...state, favs: [...state.favs, action.payload] }
         }
      case "DELETEFAV":
         return { ...state, favs: state.favs.filter((element) => element._id !== action.payload) };
      default:
         return state;
   }


}

export default mainReducer