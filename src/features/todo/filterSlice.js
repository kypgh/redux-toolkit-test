import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "all", // Default filter status
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
    clearFilter: () => "all",
  },
});

// Export actions
export const { setFilter, clearFilter } = filterSlice.actions;

// Export reducer
export default filterSlice.reducer;
