import { createContext, useContext } from "react";

const AgencyContext = createContext();
export function useAgencyContext() {
    return useContext(AgencyContext);
  }
  
export default AgencyContext;
