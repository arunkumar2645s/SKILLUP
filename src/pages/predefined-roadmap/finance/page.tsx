import { TechStackDetails } from '@/components/tech-stack-details'

const financeSubdivisions = [
  { name: 'Blockchain and Cryptocurrencies', slug: 'finance/blockchain', description: 'Decentralized digital currencies and ledger technologies' },
  { name: 'Trading & Risk Management', slug: 'finance/risk-management', description: 'Automated trading strategies using algorithms' },
]

export default function FinancePage() {
  return <TechStackDetails name="Finance Technology" subdivisions={financeSubdivisions} />
}

