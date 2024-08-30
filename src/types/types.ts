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
