import AxiosIntsnace from "../config";
import { IOutstanding, IOutstandingBalance } from "./types";

export const getOutstandings = async (): Promise<IOutstanding[]> => {
  return (await AxiosIntsnace.get("/bills/allbills")).data;
};
export const getBalanace = async (
  residentialId: string
): Promise<IOutstandingBalance[] | undefined> => {
  if (!residentialId) return;
  return (
    await AxiosIntsnace.get(
      `/PostToken/FetchOutstandingBalance?residentId=${residentialId}`
    )
  ).data;
};
