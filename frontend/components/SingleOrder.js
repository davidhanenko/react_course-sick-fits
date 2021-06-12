import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';

const OrderSingleItemStyles = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  grid-auto-flow: column;
  gap: 2rem;
  img {
    width: 200px;
  }
`;

const OrderItemsStyles = styled.div`
  display: grid;
  grid-auto-columns: auto;
  gap: 4rem;
  h2 {
    margin-top: 5rem;
  }
`;

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      total
      charge
      user {
        id
      }
      items {
        id
        name
        quantity
        price
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

function OrderItem({ item }) {
  return (
    <OrderSingleItemStyles>
      <img src={item.photo.image.publicUrlTransformed} alt={item.name} />
      <h4>{item.name}</h4>
      <h4>
        {item.quantity} &times; {formatMoney(item.price)}
      </h4>
    </OrderSingleItemStyles>
  );
}

export default function SingleOrder({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { order } = data;

  return (
    <div>
      <OrderItemsStyles>
        <Head>
          <title>Sick Fits - {order.id}</title>
        </Head>
        {order.items.map(item => (
          <OrderItem key={item.id} item={item} />
        ))}
        <h2>Your order total is: {formatMoney(order.total)}</h2>
      </OrderItemsStyles>
    </div>
  );
}
