import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <span>How would you like to upload?</span>
      <span><Link href="/upload/manual">Manually upload data</Link></span>
      <span><Link href="/upload/csv">Upload data from CSV file</Link></span>
    </header>
  );
}
