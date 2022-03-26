import { useTranslation } from 'react-i18next'
import { MenuItem } from '@chakra-ui/react'
import { AiOutlineGlobal } from 'react-icons/ai'

import { Dropdown } from 'components'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    const locale = lang.toLowerCase()
    i18n.changeLanguage(locale)
  }

  return (
    <Dropdown icon={<AiOutlineGlobal size="18" color="#ccc" />} label={i18n.language}>
      {i18n.options.supportedLngs &&
        i18n.options.supportedLngs.map(
          (lang: string) =>
            lang !== 'cimode' && (
              <MenuItem
                key={lang}
                onClick={() => changeLanguage(lang)}
                textTransform="uppercase"
                bg={i18n.language === lang ? '#ccc' : 'transparent'}
              >
                {' '}
                {lang}{' '}
              </MenuItem>
            )
        )}
    </Dropdown>
  )
}

export default LanguageSwitcher
