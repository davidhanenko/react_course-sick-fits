import { resetIdCounter, useCombobox } from 'downshift';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

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
            placeholder: 'Search for a Item',
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
