import { Request, Response, NextFunction } from "express";

// Get '/'

export const getData = (req: Request, res: Response, next: NextFunction): void => {

  // Return data to the client
  
  let items: object[] = [];
  items = [
    {
      name: `Mahmoud Serag`,
      age: 22,
      isMarried: false
    },
    {
      name: `Islam Mohamed Youssef`,
      age: 25,
      isMarried: true
    },
    {
      name: `Mohamed Ibrahim`,
      age: 22,
      isMarried: false
    },
    {
      name: `Mohamed Sobhi`,
      age: 23,
      isMarried: true
    }
  ]

  let result: object = {};
  result = {
    success: true,
    code: 200,
    message: 'Response Send Successfully.',
    items: items
  };

  res.status(200).json({
    result
  });
}
