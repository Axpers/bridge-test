export interface Account {
  acc_number: number;
  amount: number;
  currency: string;
}

export interface Transaction {
  id: number;
  label: string;
  sign: string;
  amount: string;
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

export interface TransactionsResponse {
  transactions: Transaction[];
  links: Links;
}
