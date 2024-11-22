'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Label } from "@/components/ui/Label"
import styles from './profile.module.css'

interface Profile {
  full_name: string
  pronouns: string
  description: string
  skills: string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    full_name: '',
    pronouns: '',
    description: '',
    skills: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/auth/login')
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const token = localStorage.getItem('token')
    if (!token) {
      setError('User not logged in')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/dashboard')
      } else {
        setError(data.message || 'Failed to update profile')
      }
    } catch {
      setError('An error occurred while updating your profile.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Complete Your Profile</h1>
        {error && <div className={styles.errorMessage} role="alert">{error}</div>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Label className={styles.label} htmlFor="full_name">Full Name</Label>
            <Input
              type="text"
              id="full_name"
              name="full_name"
              value={profile.full_name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <Label className={styles.label} htmlFor="pronouns">Pronouns</Label>
            <Input
              type="text"
              id="pronouns"
              name="pronouns"
              value={profile.pronouns}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <Label className={styles.label} htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={profile.description}
              onChange={handleInputChange}
              rows={4}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <Label className={styles.label} htmlFor="skills">Skills</Label>
            <Input
              type="text"
              id="skills"
              name="skills"
              value={profile.skills}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? 'Saving...' : 'Save Profile'}
          </Button>
        </form>
      </div>
      <div className={`${styles.bubble} ${styles.bubble1}`}></div>
      <div className={`${styles.bubble} ${styles.bubble2}`}></div>
    </div>
  )
}
