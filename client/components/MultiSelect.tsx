import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  MenuOptionGroup,
  MenuItemOption,
  MenuButtonProps,
  Input,
  Button
} from '@chakra-ui/react'
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri'

export type IMultiSelect = {
  label: string
  options: string[]
  onChange?: (selectedValues: string[]) => void
  buttonProps?: MenuButtonProps
  selectedOptions: any
  setSelectedOptions: any
}
export default function MultiSelect(props: IMultiSelect): JSX.Element {
  const { label, options, buttonProps, selectedOptions, setSelectedOptions } = props
  const [search, setSearch] = useState<any>({ input: '', result: [] })

  console.log(search)

  function onFilter(e: any) {
    const value = e.target.value
    setSearch({ ...search, input: value })
    const newValue = value.toLowerCase()

    for (let i = 0; i < options.length; i++) {
      if (options[i].toLowerCase().indexOf(newValue) > -1) {
        // keep the loop
      } else {
        setSearch({ ...search, result: [...search.result, options[i]] })
      }
    }
  }
  return (
    <Menu closeOnSelect={false} isLazy>
      {({ onClose, isOpen }: any) => (
        <>
          <MenuButton
            as={Button}
            bg={'white'}
            color={selectedOptions.length ? 'accent_5' : 'gray_4'}
            borderColor={selectedOptions.length ? 'accent_5' : 'gray_4'}
            border="1px solid"
            p="1rem"
            borderRadius="10px"
            w="15rem"
            textAlign="left"
            _focus={{
              outline: 'none'
            }}
            _hover={{ bg: 'transparent' }}
            rightIcon={isOpen ? <RiArrowDownSLine size={20} /> : <RiArrowRightSLine size={20} />}
            {...buttonProps}
          >
            {label} {selectedOptions.length > 0 && ` (${selectedOptions.length})`}
          </MenuButton>
          <MenuList aria-orientation="vertical">
            <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  setSelectedOptions([])
                  setSearch({ input: '', result: [] })
                  onClose()
                }}
              >
                Clear all
              </MenuItem>
              <Input
                type="search"
                placeholder="search"
                value={search.input}
                onChange={onFilter}
                w="90%"
                ml=".75rem"
                borderRadius="10px"
                focusBorderColor="accent_5"
              />
            </MenuGroup>
            <MenuDivider />
            <MenuOptionGroup
              title={undefined}
              defaultValue={selectedOptions}
              type="checkbox"
              // @ts-ignore Arguments type is just wrong upstream.
              onChange={(values: string[]) => {
                setSelectedOptions(values.filter(_ => _.length))
                props.onChange?.(values)
              }}
            >
              {options.map(option => {
                return (
                  <MenuItemOption
                    key={`multiselect-menu-${option}`}
                    // @ts-ignore <MenuItemOption> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                    type="button"
                    /* eslint-enable @typescript-eslint/ban-ts-comment */
                    value={option}
                  >
                    {option}
                  </MenuItemOption>
                )
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

MultiSelect.displayName = 'MultiSelect'
