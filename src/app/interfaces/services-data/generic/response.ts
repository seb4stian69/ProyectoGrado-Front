import { Header } from "./common/headers";
import { Error } from "./common/error";

export interface Response<T> {
  headers: Header;
  body: T;
  error: Error;
}