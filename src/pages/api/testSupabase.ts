// src/pages/api/testSupabase.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/config/supabase';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase.from('test_table').select('*');

      if (error) {
        res.status(500).json({ message: error.message });
        return;
      }

      res.status(200).json(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
