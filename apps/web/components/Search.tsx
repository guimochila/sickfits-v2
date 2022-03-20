import { resetIdCounter, useCombobox } from 'downshift'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import { DropDown, DropDownItem, SearchStyles } from './styled/DropDown'
import useSearch from '../hooks/useSearch'
import { useRouter } from 'next/router'

function Search() {
  resetIdCounter()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string | undefined>('')
  const { data, isLoading, refetch } = useSearch(searchTerm)
  const debouncedFindItem = useRef(debounce(refetch, 350))
  const items = data?.searchTerms || []
  const {
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    isOpen,
    inputValue,
  } = useCombobox({
    items,
    itemToString: item => item?.name || '',
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem?.id}`,
      })
    },
  })

  useEffect(() => {
    const currentDebounceRef = debouncedFindItem.current
    return () => currentDebounceRef.cancel()
  }, [])

  useEffect(() => {
    async function updateSearch() {
      setSearchTerm(inputValue)
      await debouncedFindItem.current()
    }

    updateSearch()
  }, [inputValue])

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: isLoading ? 'loading' : '',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              {...getItemProps({ item })}
              highlighted={index === highlightedIndex}
            >
              <Image
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width={40}
                height={40}
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length ? (
          <DropDownItem highlighted={false}>
            Sorry, no items for {searchTerm}
          </DropDownItem>
        ) : null}
      </DropDown>
    </SearchStyles>
  )
}

export default Search
