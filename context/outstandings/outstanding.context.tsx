import {
  IOutstanding,
  IOutstandingBalance,
} from "@/api/outstandings/types";
import { createContext } from "react";

export const OutstandingContext = createContext<{
  oustandings: IOutstanding[];
  totalOutstandings: IOutstandingBalance[];
  loading:boolean;
}>({
  oustandings: [],
  totalOutstandings: [],
  loading:false
});
