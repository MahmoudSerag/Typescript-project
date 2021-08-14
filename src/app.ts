import express, { Application } from 'express';
import { router as user } from './routes/user';

const app: Application = express();

const port: string | number = process.env.PORT || 3000;

app.use(user);

app.listen(port, () => {
  console.log(`Server is lestening on port: ${port}`);
});