import { Request, Response } from 'express';

export function getTemperature(_req: Request, res: Response): void {
  res.json({ temperature: Math.floor(Math.random() * 50 - 10) });
}
