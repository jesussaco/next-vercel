

import { MainLayout } from '../components/layouts/MainLayout'
import Link from '../node_modules/next/link'

export default function Home() {
  return (
  <MainLayout>
    <h1> Pricing page </h1>
    <h1 className={'title'}>
      Ir a
      <Link href="/about"> About </Link>
    </h1>
    <p className={'description'}>
      Editar{' '}
      <code className={'code'}>pages/pricing.js</code>
    </p>
  </MainLayout>
  )
}