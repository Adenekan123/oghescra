import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { TokenContext } from "./token.context";
import { IAddToken, IToken } from "@/api/tokens/types";
import { createToken, getTokens } from "@/api/tokens";

interface IProps {
  children: ReactNode;
}
const TokenProvider = (props: IProps) => {
  const { children } = props;
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [loading, setLoading] = useState(false);

  const addTokenAsync = useCallback(async (data: IAddToken) => {
    try {
      setLoading(true);
      const token = await createToken(data);
      if (!token) throw new Error("Failed to create token");
      setTokens((prev) => [token, ...prev]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getToken = useCallback(async () => {
    try {
      setLoading(true);
      const tokens = await getTokens();
      if (!tokens) throw new Error("Failed to get tokens");
      setTokens(tokens);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getToken();
  }, [getToken]);

  const value = { tokens, addTokenAsync, loading };
  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

export default TokenProvider;
