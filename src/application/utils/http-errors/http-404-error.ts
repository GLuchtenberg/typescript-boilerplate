import { HTTPClientError } from "./http-client-error";

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404;

  constructor(message: string | object = "Not found") {
    super(message);
  }
}
