import { MainLayout } from '../components/layouts/MainLayout'
import Link from '../node_modules/next/link'


export default function AboutPage() {
  return (
    <MainLayout>
      <h1> Contact page </h1>
        
      <h1 className={'title'}>
        Ir a <Link href="/"> Home </Link>
      </h1>

      <p className={'description'}>
        Editar{' '}
        <code className={'code'}>pages/contact.js</code>
      </p>
    </MainLayout>
  )
}
