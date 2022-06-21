
export function addMovies(mov) {
   return {
      type: 'GET_MOVIES_FROM_API',
      payload: { globalMovies: mov }
   }
}

export function addMovieToList(title, year, id) {
   return {
      type: 'CLICK_MOVIE_ADD_LIST',
      payload: { title, year, id }
   }
}

export function changeNameList(listName) {
   return {
      type: 'CHANGE_NAME_LIST',
      payload: { globalListName: listName }
   }
}

export function getError(isError) {
   return {
      type: 'ERROR_SEARCH_MOVIES',
      payload: isError
   }
}

export function onClickDelete(movieId) {
   return {
      type: 'DELETE_MOVIE_LIST',
      payload: movieId,
   }
}