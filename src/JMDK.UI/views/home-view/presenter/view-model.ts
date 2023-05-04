import type { Content } from '@/JMDK.UI/types/content'

type HomeViewContent = {
  heading: string
  handle: string
  description: string
  buttonOptions: Content.Button[]
  hashTags: string[]
}

export type ViewModel = {
  content: HomeViewContent
}
