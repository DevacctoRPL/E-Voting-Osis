export type LoginUserReq = {
  NIU: string,
  password: number
}

export type User = {
  id: number;
  Nama: string;
  NIU: string;
  Password: number;
}

export type currentUserres = {
  data: Promise<any>;
  status: Promise<number>;
}

export type apicalltype = (path:string,data?:any) => Promise<any>
export type candidate = {
  id:number,
  nopil:number,
  org: "OSIS" | "MPK",
  nama_ketua: string,
  nama_wakil: string,
  visi: string,
  misi: string,
  votes?: number,
}
