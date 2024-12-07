import {
  IOutstandingBalance,
  ITotalOutstandings,
} from "@/api/outstandings/types";
import { createContext } from "react";

export const OutstandingContext = createContext<{
  oustandings: IOutstandingBalance[];
  totalOutstandings: ITotalOutstandings[];
}>({
  oustandings: [],
  totalOutstandings: [],
});
