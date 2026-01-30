import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Site is running</h1>
      <p>The app server is up. Use the links below:</p>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link href="/social-hub">Social Hub</Link>
        <Link href="/social-media-example">Social Media Example</Link>
      </nav>
    </main>
  )
}
