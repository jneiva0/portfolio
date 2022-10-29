import { Button, Hide, IconButton } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { MdTranslate } from 'react-icons/md'

// create a button that will change the language of the app, using next-i18next and chakra-ui
export const I18nButton = () => {
  const { t, i18n } = useTranslation('common')

  const router = useRouter()

  const changeTo = useMemo(
    () => (router.locale === 'en' ? 'pt-BR' : 'en'),
    [router.locale]
  )

  const toggleLanguage = () => {
    const { pathname, query, asPath } = router
    router.push({ pathname, query }, asPath, { locale: changeTo })
  }

  return (
    <>
      <Hide below='lg'>
        <Button
          onClick={toggleLanguage}
          variant='ghost'
          aria-label='toggle language'
          leftIcon={<MdTranslate />}
        >
          {router.locale === 'en' ? 'English' : 'pt-br'}
        </Button>
      </Hide>
      <Hide above='lg'>
        <IconButton
          aria-label='toggle language'
          icon={<MdTranslate />}
          variant='ghost'
          onClick={toggleLanguage}
        />
      </Hide>
    </>
  )
}
