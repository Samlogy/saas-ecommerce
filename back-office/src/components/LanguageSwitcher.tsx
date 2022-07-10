import { Button, MenuItem } from '@chakra-ui/react'
import { Dropdown } from 'components'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    const locale = lang.toLowerCase()
    i18n.changeLanguage(locale)
  }

  return (
    <Dropdown icon={<CustomButton lang={i18n.language} />} label={i18n.language}>
      {i18n.options.supportedLngs &&
        i18n.options.supportedLngs.map(
          (lang: string) =>
            lang !== 'cimode' && (
              <MenuItem
                key={lang}
                onClick={() => changeLanguage(lang)}
                textTransform="uppercase"
                bg={i18n.language === lang ? '#ccc' : 'transparent'}
                borderRadius="5px"
              >
                {lang}{' '}
              </MenuItem>
            )
        )}
    </Dropdown>
  )
}

const CustomButton = ({ lang }: { lang: string }) => {
  const btnRef = React.useRef(null)
  return (
    <Button
      variant="ghost"
      _hover={{
        bg: 'transparent',
        color: 'accent_3',
        border: '1px solid',
        borderColor: 'accent_3'
      }}
      ref={btnRef}
    >
      {lang && lang}
    </Button>
  )
}
