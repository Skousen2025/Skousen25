import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1>App Skousen</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/upload">Upload</Link> | <Link href="/rota">Rotas</Link>
      </nav>
    </header>
  )
}
