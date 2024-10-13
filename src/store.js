import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        searchUsersStart: (state) => {
            state.loading = true;
            state.error = "";
        },
        searchUsersSuccess:(state,action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = action.payload.length === 0 ? "Users not found" : "";
        },
        searchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    },
});

export const {
    searchUsersStart,
    searchUsersSuccess,
    searchUsersFailure,
  } = userSlice.actions;

  export const fetchUsers = (username) => async (dispatch) =>{
    dispatch(searchUsersStart());
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${username}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        dispatch(searchUsersSuccess(data));
    } catch(error){
        dispatch(searchUsersFailure("An error occurred while fetching data."));
    }
  };

  const store = configureStore({
    reducer:{
        user:userSlice.reducer,
    },
  });
  
  export default store;