import express from 'express';
import { Router } from 'express-serve-static-core';
import { BankApiService } from '../services/bank-api-service';

export class BankController {
  private bankService: BankApiService;
  private router: Router;

  constructor() {
    this.bankService = new BankApiService();
    this.router = express.Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get('/health', async (req, res) => {
      const result = await this.bankService.getHealth();
      res.send(result);
    });
    this.router.get('accounts', (req, res) => {
      res.send(this.bankService.getAccounts());
    });
    this.router.get('transactions', (req, res) => {
      res.send(this.bankService.getTransactions());
    });
  }

  getRouter() {
    return this.router;
  }
}
