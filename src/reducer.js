export const initialState = {
  noo3: "action",
  noo3s: [
    "Trending",
    "TopRated",
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Mystey",
    "SciFi",
    "Western",
    "Animation",
    "Movies",
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NOO3":
      return {
        noo3: action.noo3,
      };

    default:
      return state;
  }
};

export default reducer;
