import AxiosIntsnace from "../config";
import { IOutstanding, IOutstandingBalance } from "./types";

const oustandings:IOutstanding[] = [
  {
    dueType: "Car Stiker",
    billAmount: 72000,
    outStandingBal: 0,
    billDate: "1/1/2023",
    plot: "",
    zone: "",
    username: "",
    transdate: "3/8/2024",
    residentID: "ORA1000000196 ",
    status: true,
  },
  {
    dueType: "Electricity ",
    billAmount: 2000,
    outStandingBal: 0,
    billDate: "1/1/2023",
    plot: "",
    zone: "",
    username: "",
    transdate: "3/8/2024",
    residentID: "ORA1000000196 ",
    status: true,
  },
];

export const getOutstandings = async (): Promise<IOutstanding[]> => {
  // return (await AxiosIntsnace.get("/bills/allbills")).data;
  return  new Promise((resolve,reject) => setTimeout(() => resolve(oustandings), 2000)); 
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
