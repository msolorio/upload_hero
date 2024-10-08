import Link from 'next/link'

export default function ManualUpload() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>How would you like to upload?</span>
      <span><Link href="/upload/manual">Manually upload data</Link></span>
      <span><Link href="/upload/csv">Upload data from CSV file</Link></span>
    </div>
  );
}
