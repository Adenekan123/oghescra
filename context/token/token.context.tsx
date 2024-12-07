import { IAddToken, IToken } from "@/api/tokens/types";
import { createContext } from "react";

export const TokenContext = createContext<{
  tokens: IToken[];
  addTokenAsync: (token: IAddToken) => Promise<void>;
  loading:boolean;
}>({
  tokens: [],
  addTokenAsync: async () => {},
  loading:false
});
