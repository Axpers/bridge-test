import {
  AccountTransaction,
  Transaction,
  TransactionsEntity,
} from '../models/bank';

export class BankUtilsService {
  getAdaptedTransactions(transactions: TransactionsEntity): TransactionsEntity {
    const transactionsWithoutDuplicate = this.removeDuplicate<Transaction>(
      transactions.transactions,
    );

    const result: TransactionsEntity = {
      transactions: transactionsWithoutDuplicate,
      links: transactions.links,
    };

    return result;
  }

  getTransactionsForAccountDetail(
    transactions: Transaction,
  ): AccountTransaction {
    const accountTransaction: AccountTransaction = {
      label: transactions.label,
      amount: transactions.amount,
      currency: transactions.currency,
    };
    return accountTransaction;
  }

  private removeDuplicate<T>(array: T[]): T[] {
    return [...new Set(array)];
  }
}
