// src/pages/api/auth/profile.ts

import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Secret key

// Define the structure of the decoded JWT token
interface DecodedToken {
  email: string;
  id: string; // Or number, depending on your token payload
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    try {
      // Verify the JWT token and cast it to the DecodedToken interface
      const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

      // If the token is valid, you can send the user data back
      res.status(200).json({ email: decoded.email });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
