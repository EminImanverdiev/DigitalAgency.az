import { createContext, useContext } from "react";

const CoursesContext = createContext();

export function useCoursesContext() {
  return useContext(CoursesContext);
}

export default CoursesContext;
