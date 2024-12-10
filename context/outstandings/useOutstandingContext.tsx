import { useContext } from "react";
import { OutstandingContext } from "./outstanding.context";

export const useOutstandingContext = () => useContext(OutstandingContext);