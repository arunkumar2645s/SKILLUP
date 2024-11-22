import { TechStackDetails } from '@/components/tech-stack-details'

const cybersecuritySubdivisions = [
  { name: 'Network Security', slug: 'cybersecurity/network', description: 'Protecting computer networks from intrusion' },
  { name: 'Application Security', slug: 'cybersecurity/application', description: 'Securing software applications from threats' },
  { name: 'Information Security', slug: 'cybersecurity/information', description: 'Protecting sensitive data from unauthorized access' },
  { name: 'Operational Security', slug: 'cybersecurity/operational', description: 'Securing processes and systems in day-to-day operations' },
  { name: 'Disaster Recovery', slug: 'cybersecurity/disaster-recovery', description: 'Planning for and recovering from catastrophic events' },
]

export default function CybersecurityPage() {
  return <TechStackDetails name="Cybersecurity" subdivisions={cybersecuritySubdivisions} />
}

