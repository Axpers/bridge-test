export interface Account {
  acc_number: number;
  amount: number;
  currency: string;
}

export interface Links {
  self: string;
  next: string;
}

export interface AccountsResponse {
  accounts: Account[];
  links: Links;
}
