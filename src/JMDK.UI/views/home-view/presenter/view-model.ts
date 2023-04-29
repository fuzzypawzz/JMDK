import type { Button } from '@/JMDK.UI/types/content/button.types'

type HomeViewContent = {
  heading: string
  handle: string
  description: string
  buttonOptions: Button[]
  hashTags: string[]
}

export type ViewModel = {
  content: HomeViewContent
}
