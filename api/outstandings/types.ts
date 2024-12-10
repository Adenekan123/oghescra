export interface IOutstanding {
  dueType: string;
  billAmount: number;
  outStandingBal: number;
  billDate: string;
  plot: string;
  zone: string;
  username: string;
  transdate: string;
  residentID: string;
  status: true;
}
export interface IOutstandingBalance {
  balance: 0;
  residentID: string;
  duetypes: string;
}

