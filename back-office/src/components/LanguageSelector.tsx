import React from 'react'
import { useTranslation } from 'react-i18next'
// import { Flex } from '@chakra-ui/react'

const lngs: any = {
  en: { nativeName: 'En' },
  fr: { nativeName: 'Fr' }
}

function LanguageSelector() {
  const { i18n } = useTranslation()
  const changeLanguage = (e: any) => {
    const locale = e.target.value
    i18n.changeLanguage(locale)
  }

  return (
    <>
      <select onChange={changeLanguage} className="select-language">
        {Object.keys(lngs).map((lng: any) => (
          <option key={lng} value={lng}>
            {' '}
            {lngs[lng].nativeName}{' '}
          </option>
        ))}
      </select>
    </>
  )
}

export default LanguageSelector
