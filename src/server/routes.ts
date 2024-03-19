import { Router } from 'express';

const router = Router();

router.get('/', (req, res) =>
  res.status(200).send(`NODE_ENV=${process.env.NODE_ENV}`)
);

export { router };
