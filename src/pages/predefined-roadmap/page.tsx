import Link from 'next/link';
import styles from '../predefined.module.css';

const techStacks = [
  { name: 'Full Stack', slug: 'full-stack', description: 'Frontend, Backend, and Database technologies' },
  { name: 'Cybersecurity', slug: 'cybersecurity', description: 'Protecting systems, networks, and programs from digital attacks' },
  { name: 'Artificial Intelligence', slug: 'ai', description: 'Machine learning, neural networks, and intelligent systems' },
  { name: 'DevOps', slug: 'devops', description: 'Combining software development and IT operations' },
  { name: 'Software Development Engineer', slug: 'sde', description: 'Building and maintaining software systems' },
  { name: 'Finance Technology', slug: 'finance', description: 'Technology used in financial services' },
  { name: 'Cloud Computing', slug: 'cloud', description: 'Delivering computing services over the internet' },
  { name: 'Data Science', slug: 'data-science', description: 'Extracting knowledge and insights from data' },
  { name: 'Mobile Development', slug: 'mobile', description: 'Creating applications for mobile devices' },
  { name: 'Internet of Things', slug: 'iot', description: 'Connecting and exchanging data between devices and systems' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Tech Stack Roadmaps</h1>
      <div className={styles.grid}>
        {techStacks.map((stack) => (
          <Link href={`/predefined-roadmap/${stack.slug}/page`} key={stack.slug} className={styles.card}>
            <div>
              <h2 className={styles.cardTitle}>{stack.name}</h2>
              <p className={styles.cardDescription}>{stack.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
