import type { Content } from '@/JMDK.UI/types/content'

export type ViewModel = {
  heading: string
  handle: string
  description: string
  buttonOptions: Content.Button[]
  hashTags: string[]
}
