import { Request, Response} from 'express'

exports.helloWorld = (req: Request, res: Response) => {
  res.send('Hello, World');
};
