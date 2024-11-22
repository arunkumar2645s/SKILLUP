import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import {supabase} from '../../../config/supabase'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const decoded = verify(token, JWT_SECRET) as { email: string; id: string }
    const { full_name, pronouns, description, skills } = await request.json()

    const { data, error } = await supabase
      .from('profiles')
      .upsert([
        {
          user_id: decoded.id,
          full_name,
          pronouns,
          description,
          skills,
        },
      ])

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'Profile updated successfully', data })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update profile', error }, { status: 500 })
  }
}

