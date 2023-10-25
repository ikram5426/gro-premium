
import Head from 'next/head'
import PageSwipe from './components/PageSwipe'


export default async function Home() {

  return (
    <div className='overflow-y-hidden h-[80vh]' style={{ fontFamily: 'Sofiapro' }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
    <PageSwipe/>
    </div>

  )
}
