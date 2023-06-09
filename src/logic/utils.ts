import type { Content } from '~/logic/types'

export const content = import.meta.glob<Content>('../../assets/contents/*.yaml', { import: 'default', eager: true })

export const sumNumber = (text: string[]) => {
  return text.map((t: string) => {
    return t.length
  }).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
}

export const theContentDefault: Content = {
  name: '',
  author: '',
  uploader: '',
  warning_text: '',
  content: [],
  startID: 0,
  story: [],
}
