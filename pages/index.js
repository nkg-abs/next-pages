import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
      <Link href='/sales'>sales</Link>
      </div>
      <Link href='/tasks'>tasks</Link>
    </>
  )
}
