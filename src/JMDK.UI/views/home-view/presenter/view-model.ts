import type { Content } from '@/JMDK.UI/types/content'

export type ViewModel = {
  content: {
    heading: string
    handle: string
    description: string
    buttonOptions: Content.Button[]
    hashTags: string[]
  }
}
