import { useEffect } from 'react'

interface HeadProps {
  title: string
  description: string
  fonts?: string[]
}

export default function Head({ title, description, fonts }: HeadProps) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      let pageDescription = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement

      if (!pageDescription) {
        pageDescription = document.createElement('meta')
        pageDescription.name = 'description'
        document.head.appendChild(pageDescription)
      }
      pageDescription.content = description
    }

    if (fonts && fonts.length) {
      fonts.forEach((fontRef) => {
        let linkElement = document.querySelector(
          `link[href="${fontRef}"]`
        ) as HTMLLinkElement

        if (!linkElement) {
          linkElement = document.createElement('link')
          linkElement.href = fontRef
          linkElement.rel = 'stylesheet'
          document.head.appendChild(linkElement)
        }
      })
    }

    return () => {
      if (fonts && fonts.length) {
        fonts.forEach((fontRef) => {
          const linkElement = document.querySelector(`link[href="${fontRef}"]`)
          if (linkElement) {
            document.head.removeChild(linkElement)
          }
        })
      }
    }
  }, [title, description, fonts])

  return null
}
