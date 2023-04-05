import axios from 'axios';

export class BankApiService {
  private apiUrl = process.env.BANK_API_URL;

  async getHealth() {
    const healthUrl = `${this.apiUrl}/health`;
    const { data } = await axios.get<string>(healthUrl);

    return data;
  }

  getAccounts() {}

  getTransactions() {}
}
