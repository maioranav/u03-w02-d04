const initialState = {
   //IL NOSTRO STATO INIZIALE
   favs: []
}

const mainReducer = (state = initialState, action) => {


   //eseguo qualcosa per ogni azione.tipo del reducer interpellato

   switch (action.type) {
      case "ADDFAV":
         return { ...state, favs: [...state.favs, action.payload] };
      case "DELETEFAV":
         return { ...state, favs: state.favs.filter((element) => element._id !== action.payload) };
      default:
         return state;
   }


}

export default mainReducer