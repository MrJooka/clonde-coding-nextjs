import { useRouter } from 'next/router';
import Link from 'next/link';

const name = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>Hello</h2>
      <Link href="/">
        <a>Move to './'</a>
      </Link>
    </div>
  );
};

export default name;
