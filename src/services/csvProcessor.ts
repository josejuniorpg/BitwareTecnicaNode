import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import User, { IUser } from '../models/User';

export const processCSV = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const users: IUser[] = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                const user: IUser = new User({
                    name: row.name,
                    email: row.email,
                    age: parseInt(row.age, 10),
                });
                users.push(user);
            })
            .on('end', async () => {
                try {
                    await User.insertMany(users);
                    resolve('File processed and data saved in the database');
                } catch (err) {
                    reject('Error saving users: ' + err);
                }
            })
            .on('error', (err) => {
                reject('Error reading CSV file: ' + err);
            });
    });
};
