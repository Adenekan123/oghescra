import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { TokenContext } from "./token.context";
import { IAddToken, IToken } from "@/api/tokens/types";
import { createToken, getTokens } from "@/api/tokens";
import Toast from "react-native-root-toast";
import { router } from "expo-router";
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
      Toast.show("Token created successfully.", {
        duration: Toast.durations.LONG,
        position:Toast.positions.BOTTOM,
        backgroundColor:"green",
        textColor:"#fff"
      });
      setTokens((prev) => [token, ...prev]);
      router.back();

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
