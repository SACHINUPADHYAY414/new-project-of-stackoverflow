const apikeyReducer = (state = null, action) => {
  switch (action.type) {
    case "API_KEY":
      return { ...state, key: action.payload };
    default:
      return state;
  }
};
export default apikeyReducer;
