export interface IToken {
  id: number;
  tokenId: string | null;
  visitor: string | null;
  status: string | null;
  login: string;
  logout: string;
  generated: string;
  residentId: number | null;
  visitorNo: number;
  reason: string | null;
  active: number;
  visitorsEmail: string | null;
  residentName: string | null;
  residentAddress: string | null;
  checkinBy: string | null;
  checkoutByy: string | null;
}

export interface IAddToken {
  visitorName: string;
  visitorEmail: string;
  visitorPhone: string;
  reason: string;
  visitorNo: number;
}
