const verifyReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "VERIFY":
      return { ...state, data: action?.data };
    case "LOGOUT":
      return { ...state, data: null };
    default:
      return state;
  }
};

export default verifyReducer;
