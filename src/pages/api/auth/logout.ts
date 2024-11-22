// src/pages/api/auth/logout.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    // Clear the JWT token on logout (optional, depending on how you're handling JWT storage)
    res.setHeader('Set-Cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly;');

    // Respond with success
    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
