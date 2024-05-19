import { configureStore } from "@reduxjs/toolkit";
import projectSlicer from "./projectsSlice";
import workSlicer from "./workSlice";
import postSlice from "./cardSlice";

const store = configureStore({
  reducer: {
    projects: projectSlicer.reducer,
    work: workSlicer.reducer,
    post: postSlice,
  },
});
export default store;
