const initialState = {
   globalMovies: [],
   globalMoviesList: [],
   globalListName: '',
   globalSearchFormError: false,
};

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case 'GET_MOVIES_FROM_API':
         return {
            ...state,
            globalMovies: action.payload.globalMovies,
         }
      case 'CLICK_MOVIE_ADD_LIST':
         return {
            ...state,
            globalMoviesList: [...state.globalMoviesList, action.payload],
         }
      case 'CHANGE_NAME_LIST':
         return {
            ...state,
            globalListName: action.payload.globalListName,
         }
      case 'ERROR_SEARCH_MOVIES':
         return {
            ...state,
            globalSearchFormError: action.payload,
         }
      case 'DELETE_MOVIE_LIST':
         return {
            ...state,
            globalMoviesList: [...state.globalMoviesList.filter((item) => item.id !== action.payload)]
         }
      default: return state;
   }
}
