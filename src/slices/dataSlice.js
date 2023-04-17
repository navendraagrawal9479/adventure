import { createSlice } from "@reduxjs/toolkit";
import getData from "../assets/StaticText";
import language from "../assets/language";

const initialState = {
  language: language.ENGLISH,
  data: getData(language.ENGLISH)
}

const dataSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload.language
      state.data = getData(action.payload.language)
    }
  }
});

export const {setLanguage} = dataSlice.actions;

export default dataSlice.reducer;