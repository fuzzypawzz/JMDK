import type { Button } from '@/JMDK.UI/types/content/button.types'

type HomeViewContent = {
  heading: string
  handle: string
  description: string
  buttonOptions: Button[]
  textTransitionValues: string[]
  hashTags: string[]
}

export type ViewModel = {
  content: HomeViewContent
  textTransitionTargetElementId: string
}
