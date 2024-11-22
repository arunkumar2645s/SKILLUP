import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '../../components/Button';
import styles from './signup.module.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== reenterPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, reenterPassword }),
    });

    const data = await res.json();

    if (res.status === 201) {
      router.push('/auth/login');
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Sign Up</h1>
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
          <div className={styles.inputGroup}>
            <label htmlFor="reenterPassword" className={styles.label}>Re-enter Password</label>
            <input
              id="reenterPassword"
              type="password"
              value={reenterPassword}
              onChange={(e) => setReenterPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <Button type="submit" className={styles.button}>Sign Up</Button>
        </form>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <p className={styles.loginLink}>
          Already have an account? <Link href="/auth/login" className={styles.link}>Log in</Link>
        </p>
      </div>
      <div className={`${styles.bubble} ${styles.bubble1}`}></div>
      <div className={`${styles.bubble} ${styles.bubble2}`}></div>
    </div>
  );
};

export default SignupPage;
