import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { OutstandingContext } from "./outstanding.context";
import { IOutstanding, IOutstandingBalance } from "@/api/outstandings/types";
import { getBalanace, getOutstandings } from "@/api/outstandings";

interface IProps {
  children: ReactNode;
}
const OutstandingProvider = (props: IProps) => {
  const { children } = props;

  const [loading, setLoading] = useState(false);

  const [oustandings, setOutstandings] = useState<{
    oustandings: IOutstanding[];
    totalOutstandings: IOutstandingBalance[];
  }>({ oustandings: [], totalOutstandings: [] });

  const residentialId = useMemo(() => "1", []);
  const value = { ...oustandings, loading };

  const loadOutstandings = useCallback(async () => {
    try {
      setLoading(true);
      const [balance,oustandings] = await Promise.all([
        getBalanace(residentialId),
        getOutstandings(),
      ]);

      const value = {
        oustandings: oustandings ?? [],
        totalOutstandings: balance || [],
      };
      setOutstandings(value);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [
    setOutstandings,
    getBalanace,
    getOutstandings,
    residentialId,
    setLoading,
  ]);

  useEffect(() => {
    loadOutstandings();
  }, []);
  return (
    <OutstandingContext.Provider value={value}>
      {children}
    </OutstandingContext.Provider>
  );
};

export default OutstandingProvider;
