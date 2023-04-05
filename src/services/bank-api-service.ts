import axios from 'axios';
import { AccountsResponse } from '../models/bank';

export class BankApiService {
  private readonly apiUrl = process.env.BANK_API_URL;
  private readonly apiKey = process.env.BANK_API_KEY;

  async getHealth(): Promise<string> {
    const healthUrl = `${this.apiUrl}/health`;
    const { data } = await axios.get<string>(healthUrl);

    return data;
  }

  async getAccounts() {
    const accountsUrl = `${this.apiUrl}/accounts`;
    console.log(this.apiKey);

    const headers = {
      'x-api-key': this.apiKey,
    };

    const { data } = await axios.get<AccountsResponse>(accountsUrl, {
      headers,
    });

    return data;
  }

  getTransactions() {}
}
