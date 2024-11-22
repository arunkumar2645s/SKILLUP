// src/pages/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {supabase} from '../../../config/supabase';
import { PostgrestError } from '@supabase/postgrest-js'; // Import PostgrestError

// Define the JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Secret key

// Define the user interface to match your Supabase schema
interface User {
  email: string;
  id: string;  // Ensure 'id' matches the type of your Supabase 'users' table ID (e.g., string or number)
}

// Define the response structure for Supabase insert
interface SupabaseInsertResponse {
  data: User | null;
  error: PostgrestError | null; // Use PostgrestError for the error type
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Create user in Supabase
      const { data, error }: SupabaseInsertResponse = await supabase
        .from('users')
        .insert([{ email, password: hashedPassword }])
        .single();  // Ensure you get a single result back

      if (error) {
        return res.status(400).json({ message: error.message });
      }

      if (data) {
        
        const payload = { email: data.email, id: data.id };

      console.log(payload);

      // Sign the JWT token
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

      // Send the response with the token
      res.status(201).json({ message: 'User created successfully', token });
      }

      // Define the payload for the JWT token
      

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
