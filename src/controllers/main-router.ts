import { BankController } from './bank-controller';
import express from 'express';
import { Router } from 'express-serve-static-core';

export class MainRouter {
  private mainRouter: Router;
  private bankController: BankController;

  constructor() {
    this.bankController = new BankController();

    this.mainRouter = express
      .Router()
      .get('/', (req, res) => {
        res.send('Health ok !');
      })
      .use('/bank', this.bankController.getRouter());
  }

  getRouter() {
    return this.mainRouter;
  }
}
