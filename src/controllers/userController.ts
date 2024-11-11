import { Request, Response } from 'express';
import path from 'path';
import { processCSV } from '../services/csvProcessor';

export const uploadCSV = async (req: Request, res: Response) => {
    try {
        const filePath = path.join(__dirname, '../../data.csv');
        const message = await processCSV(filePath);
        res.status(200).json({ message });
    } catch (error) {
        res.status(500).json({ error: 'An unknown error occurred: ' + String(error) });
    }
};
