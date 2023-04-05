import axios from 'axios';
import {
  AccountsEntity,
  Transaction,
  TransactionsEntity,
} from '../models/bank';
import { BankUtilsService } from './bank-utils-service';

export class BankApiService {
  private readonly utilsService: BankUtilsService;
  private readonly apiUrl = process.env.BANK_API_URL;
  private readonly apiKey = process.env.BANK_API_KEY;

  constructor() {
    this.utilsService = new BankUtilsService();
  }

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

    const result = this.utilsService.getAdaptedTransactions(data);
    return result;
  }
}
