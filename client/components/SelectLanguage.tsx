import { useRouter } from 'next/router'
import { useLocale } from '../lib/hooks'

import { languages } from '../locales'

export default function SelectLanguage() {
  const router = useRouter()
  const { locale } = useLocale()

  const changeLanguage = (e: any) => {
    e.preventDefault()
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      style={{
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        width: '3em',
        padding: '.2em',
        borderRadius: '5px'
      }}
    >
      {languages.map((lang: string, idx: number) => (
        <option key={idx} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  )
}
