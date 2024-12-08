import AxiosIntsnace from "../config";

const dummyMessages: IMessage[] = [
  {
    id: 1,
    subject: "New visitor",
    message: `Your expected visitor(s) (James) has been let into your Estate/GRA and should be with you shortly`,
    status: 0,
  },
  {
    id: 2,
    subject: "Due payments",
    message: `You have an outstanding paymnent, check your outstandings`,
    status: 1,
  },
  
];
import { IMessage } from "./types";

export const getInbox = async (residentialId: string): Promise<IMessage[]> => {
  if (!residentialId) return [];
  // return (
  //   await AxiosIntsnace.get(`/PostToken/FetchInbox?residentId=${residentialId}`)
  // ).data;
  return await new Promise((resolve) =>
    setTimeout(() => resolve(dummyMessages), 2000)
  );
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
