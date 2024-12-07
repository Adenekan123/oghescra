import axios from "axios";
import AxiosIntsnace from "../config";
import { IAddToken, IToken } from "./types";

const dummyTokens = [
  {
    id: 1,
    tokenId: "kjhgfdsrty",
    visitor: "Ebedi",
    status: "unused",
    login: "0001-01-01T00:00:00",
    logout: "0001-01-01T00:00:00",
    generated: "2022",
    residentId: null,
    visitorNo: 2,
    reason: null,
    active: 0,
    visitorsEmail: "ebedi@gmail.com",
    residentName: null,
    residentAddress: null,
    checkinBy: null,
    checkoutByy: null,
  },
  {
    id: 2,
    tokenId: "gfdsrtyui",
    visitor: "Bunto",
    status: "unused",
    login: "0001-01-01T00:00:00",
    logout: "0001-01-01T00:00:00",
    generated: "2022",
    residentId: null,
    visitorNo: 2,
    reason: null,
    active: 0,
    visitorsEmail: "bunto@gmail.com",
    residentName: null,
    residentAddress: null,
    checkinBy: null,
    checkoutByy: null,
  },
];

export const createToken = async (data: IAddToken): Promise<IToken> => {
  //   return (await AxiosIntsnace.post("/tokens", data)).data;
  console.log(data);
  return await new Promise((resolve) => setTimeout(() => resolve( {
    id: 1,
    tokenId: "kjhgfdsrty",
    visitor: data.visitorName,
    status: "unused",
    login: "0001-01-01T00:00:00",
    logout: "0001-01-01T00:00:00",
    generated: "2022",
    residentId: null,
    visitorNo: 2,
    reason: null,
    active: 0,
    visitorsEmail: data.visitorEmail,
    residentName: null,
    residentAddress: null,
    checkinBy: null,
    checkoutByy: null,
  },), 2000));
};

export const getTokens = async (): Promise<IToken[]> => {
  //   return (await axios.get("/tokens")).data;
  return await new Promise((resolve) =>
    setTimeout(() => resolve(dummyTokens), 2000)
  );
};
