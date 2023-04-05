import { MainRouter } from './controllers/main-router';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const mainRouter = new MainRouter();

app.use(express.json());
app.use('/', mainRouter.getRouter());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
