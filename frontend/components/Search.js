import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY(&searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        
      }
    ) { # rename Keystone query to our own
    id
    name
    photo {
      image {
        publicUrlTransformed
      }
    }
    }
  }
`;

export default function Search() {
  resetIdCounter(); // method from Downshift to handle SSR issues, like: ***Prop `aria-controls` did not match. Server: "downshift-5-menu" Client: "downshift-1-menu"***

  const { getMenuProps, getInputProps, getComboboxProps } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('Input changed');
    },
    onSelectedItemChange() {
      console.log('Selected Item change');
    },
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: 'loading',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        <DropDownItem>Hey</DropDownItem>
        <DropDownItem>Hey</DropDownItem>
        <DropDownItem>Hey</DropDownItem>
        <DropDownItem>Hey</DropDownItem>
      </DropDown>
    </SearchStyles>
  );
}
