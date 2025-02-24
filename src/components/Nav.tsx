import Link from 'next/link';

export function Nav() {
  const menus = {
    '/': 'Home',
    '/portuguese-to-english': 'Português para inglês',
  };
  return (
    <nav>
      {Object.entries(menus).map(([key, value]) => (
        <Link href={key} key={key} className='mr-4'>
          {value}
        </Link>
      ))}
    </nav>
  );
}
