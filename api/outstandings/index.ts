import AxiosIntsnace from "../config";
import { IOutstandingBalance, ITotalOutstandings } from "./types";

export const getTotalOtstandings = async (): Promise<ITotalOutstandings[]> => {
  return (await AxiosIntsnace.get("/bills/allbills")).data;
};
export const getOtstandingBalanace = async (
  residentialId: string
): Promise<IOutstandingBalance[] | undefined> => {
  if (!residentialId) return;
  return (
    await AxiosIntsnace.get(
      `/PostToken/FetchOutstandingBalance?residentId=${residentialId}`
    )
  ).data;
};
