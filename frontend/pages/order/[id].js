import SingleOrder from '../../components/SingleOrder';

export default function SingleOrderPage({ query }) {
  return (
    <div>
      <SingleOrder id={query.id} />
    </div>
  );
}
