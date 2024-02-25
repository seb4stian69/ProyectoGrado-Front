import { Header } from "./common/headers";

export interface Request<T> {
  headers: Header;
  body: T;
}