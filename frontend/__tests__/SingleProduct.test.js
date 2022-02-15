import { render, screen } from '@testing-library/react';

import { MockedProvider } from '@apollo/react-testing';
import SingleProduct, { SINGLE_ITEM_QUERY } from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();

// we need to make some fake data
const mocks = [
  {
    // when someone request this query and variable combo
    request: {
      query: SINGLE_ITEM_QUERY,
      variables: {
        id: '123',
      },
    },
    // return this data
    result: {
      data: {
        Product: product,
      },
    },
  },
];

describe('<Single Product/>', () => {
  it('renders with proper data', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    // wait for test ID
    // findBy.. give us a async func to select element(wait for ~3sec - after test fail). getBy.. is not async
    await screen.findByTestId('singleProduct');

    expect(container).toMatchSnapshot();
  });

  it('errors out when item not found', async () => {
    const errorMock = [
      {
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: {
            id: '123',
          },
        },
        result: {
          errors: [{ message: 'Item not found' }],
        },
      },
    ];

    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    await screen.findByTestId('graphql-error');
    
    expect(container).toHaveTextContent('Shoot');
    expect(container).toHaveTextContent('Item not found');
  });
});
