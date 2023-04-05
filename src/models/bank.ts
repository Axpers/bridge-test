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

export interface AccountTransaction {
  label: string;
  amount: string;
  currency: string;
}

export interface Links {
  self: string;
  next: string;
}

export interface AccountResponse {
  acc_number: number;
  amount: number;
  transactions: AccountTransaction[];
}

export interface AccountsEntity {
  accounts: Account[];
  links: Links;
}

export interface TransactionsEntity {
  transactions: Transaction[];
  links: Links;
}
