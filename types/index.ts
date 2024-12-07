export interface IVisitor {
  tokenID: string;
  residentID: string;
  residentName: string;
  residentAddress: string;
  visitor: string;
  visitorEmail: string;
  visitorNo: string;
  reason: string;
  status: string;
  active: number;
  generated: string;
  loggedin?: string;
  loggedout?: string;
}

