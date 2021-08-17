export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    case "LOGOUT":
      return {
        ...state,
        IsLogin: false,
      };
  }
};
