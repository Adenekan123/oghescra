import { useContext } from "react";
import { TokenContext } from "./token.context";

export const useTokenContext = () => useContext(TokenContext);