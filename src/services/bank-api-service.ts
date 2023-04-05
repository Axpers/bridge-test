import axios from 'axios';
import { AccountsEntity, TransactionsEntity } from '../models/bank';

export class BankApiService {
  private readonly apiUrl = process.env.BANK_API_URL;
  private readonly apiKey = process.env.BANK_API_KEY;

  async getHealth(): Promise<string> {
    const healthUrl = `${this.apiUrl}/health`;
    const { data } = await axios.get<string>(healthUrl);

    return data;
  }

  async getAccounts(): Promise<AccountsEntity> {
    const accountsUrl = `${this.apiUrl}/accounts`;
    const headers = {
      'x-api-key': this.apiKey,
    };

    const { data } = await axios.get<AccountsEntity>(accountsUrl, {
      headers,
    });
    return data;
  }

  async getTransactions(accountId: number): Promise<TransactionsEntity> {
    const transactionsUrl = `${this.apiUrl}/accounts/${accountId}/transactions`;
    const headers = {
      'x-api-key': this.apiKey,
    };

    const { data } = await axios.get<TransactionsEntity>(transactionsUrl, {
      headers,
    });
    return data;
  }
}
