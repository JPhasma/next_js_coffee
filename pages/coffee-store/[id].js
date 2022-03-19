import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
  const router = useRouter();

  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href='/' scroll={true}>
        Back to home
      </Link>
    </div>
  );
};

export default CoffeeStore;
