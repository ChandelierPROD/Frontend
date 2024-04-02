export interface IAuth {
  name?: string;
  password: string;
  phone: string;
}

export interface IToken {
  token: string;
}

export interface IError {
  data: {
    not_field_errors: string[];
  };
  status: number;
}

export interface IResponseAuth {
  data: IToken;
}

export interface IFormData {
  phone: string;
  name?: string;
  password: string;
}
