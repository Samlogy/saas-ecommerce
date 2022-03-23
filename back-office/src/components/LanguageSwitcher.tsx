import { useTranslation } from 'react-i18next'
import { IconButton, MenuItem } from '@chakra-ui/react'
import { AiOutlineGlobal } from 'react-icons/ai'

import { Dropdown } from 'components'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    const locale = lang.toLowerCase()
    i18n.changeLanguage(locale)
  }

  return (
    // <select onChange={changeLanguage} defaultValue={i18n.language} className="select-language">
    //   {i18n.options.supportedLngs &&
    //     i18n.options.supportedLngs.map(
    //       (lang: string) =>
    //         lang !== 'cimode' && (
    //           <option key={lang} value={lang}>
    //             {lang}
    //           </option>
    //         )
    //     )}
    // </select>
    <Dropdown
      icon={
        <IconButton
          aria-label="language selector"
          icon={<AiOutlineGlobal size="18" color="#ccc" />}
          bg="transparent"
        />
      }
    >
      {i18n.options.supportedLngs &&
        i18n.options.supportedLngs.map(
          (lang: string) =>
            lang !== 'cimode' && (
              <MenuItem onClick={() => changeLanguage(lang)} textTransform="uppercase">
                {' '}
                {lang}{' '}
              </MenuItem>
            )
        )}
    </Dropdown>
  )
}

export default LanguageSwitcher
