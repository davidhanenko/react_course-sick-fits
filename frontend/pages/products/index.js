import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

export default function ProductPage() {
  // query come from useRouter hoor, and contain query with number of page(because [page].js file (name of file is the parameter))
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
