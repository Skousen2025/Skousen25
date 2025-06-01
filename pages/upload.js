import Header from '../components/Header'

export default function Upload() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>Upload de Arquivos</h2>
        <input type="file" multiple />
      </main>
    </>
  )
}
