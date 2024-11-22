import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button';
import styles from './login.module.css';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 200) {
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <Button type="submit" className={styles.button}>Login</Button>
        </form>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <p className={styles.loginLink}>
          New to Skillup? <Link href="/auth/signup" className={styles.link}>Sign up</Link>
        </p>
      </div>
      <div className={`${styles.bubble} ${styles.bubble1}`}></div>
      <div className={`${styles.bubble} ${styles.bubble2}`}></div>
    </div>
  );
};

export default LoginPage;


