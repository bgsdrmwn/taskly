import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../libs/dbConnect.js';

const collection = await db.collection('users');

export const signup = async (req, res, next) => {
    try {
    const { username, email, password } = req.body;

    const query = {
        $or: [{ email }, { username }],
    };
    const existingUser = await collection.findOne(query);

    if (existingUser) {
        return next({
        status: 422,
        message: 'Email atau Username sudah terdaftar.',
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        username,
        email,
        password: hashedPassword,
        avatar: 'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    await collection.insertOne(user);

    res.status(201).json({
        message: 'Pendaftaran berhasil.',
        user: { username, email, avatar: user.avatar },
    });
    } catch (error) {
    next({
        status: 500,
        error,
    });
    }
};