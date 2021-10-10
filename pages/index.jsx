import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h2>Link to 'potato' Page</h2>
      <Link href="/vegetable/potato">
        <a>Move to './vegetable/potato'</a>
      </Link>
    </div>
  );
};

export default index;
