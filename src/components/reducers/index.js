const initialState = {
  loading: false,
  news: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {
        ...state,
        loading: true,
      };
    case 'NEWS_RECIEVED':
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
