import type { Content } from '~/logic/types'

export const content = import.meta.glob<Content>('../../assets/contents/*.yaml', { import: 'default', eager: true })
