import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import Link from '../node_modules/next/link'

export default function AboutPage() {
  return (
    <>

        <h1> About page </h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/"> Home </Link>
        </h1>

        <p className={'description'}>
          Editar{' '}
          <code className={'code'}>pages/about.js</code>
        </p>

    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
