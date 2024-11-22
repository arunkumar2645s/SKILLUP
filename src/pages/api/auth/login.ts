// src/pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {supabase} from '../../../config/supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, data.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: data.email, id: data.id }, JWT_SECRET);

    // Check if it's the user's first login and if they have profile data
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', data.id)
      .single();

    if (!profileData) {
      return res.status(200).json({ token, firstTime: true });
    }

    return res.status(200).json({ token, firstTime: false });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
