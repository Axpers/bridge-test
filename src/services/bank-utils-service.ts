import { Transaction, TransactionsEntity } from '../models/bank';

export class BankUtilsService {
  private removeDuplicate<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

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
}
