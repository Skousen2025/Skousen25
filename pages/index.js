import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function Home() {
  const { locale } = useRouter()
  const content = {
    pt: { welcome: 'Bem-vindo ao App Skousen', desc: 'Upload de fotos, documentos e rota no Google Maps' },
    en: { welcome: 'Welcome to Skousen App', desc: 'Upload photos, documents and Google Maps route' },
    da: { welcome: 'Velkommen til Skousen App', desc: 'Upload billeder, dokumenter og rute i Google Maps' },
  }

  const { welcome, desc } = content[locale] || content['pt']

  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>{welcome}</h2>
        <p>{desc}</p>
      </main>
    </>
  )
}
