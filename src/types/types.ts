export type LoginUserReq = {
  NIU: string,
  password: number
}

export type VoteReq ={
  No_Pilihan: number,
  NIU: string,
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
  misi: string[],
  proker: {
    Jangka_Pendek: string[],
    Jangka_Panjang: string[],
  },
  votes?: number,
}
