import AxiosIntsnace from "../config";
import { IMessage } from "./types";

export const getInbox = async (residentialId: string): Promise<IMessage[]> => {
  if (!residentialId) return [];
  return (
    await AxiosIntsnace.get(`/PostToken/FetchInbox?residentId=${residentialId}`)
  ).data;
};
export const readInbox = async (
  residentialId: string,
  mesId: string
): Promise<IMessage | undefined> => {
  if (!residentialId || !mesId) return;
  return (
    await AxiosIntsnace.put(
      `/PostToken/UpdateInbox?residentId=${residentialId}&mesId=${mesId}`
    )
  ).data;
};
