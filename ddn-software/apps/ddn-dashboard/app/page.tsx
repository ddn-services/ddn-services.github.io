'use client';

import Link from 'next/link';

export default async function IndexPage() {
  return (
    <Link
      href={{
        pathname: '/*'
      }}
    ></Link>
  );
}
