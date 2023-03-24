const initialState = {
  users: [],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TODOS":
      return { ...state, users: action.data };
    default:
      return state;
  }
};
