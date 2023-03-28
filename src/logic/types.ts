export interface Content {
  name: string
  author: string
  uploader: string
  warning_text: string
  content: string[]
  startID: number
  story: {
    id: number
    text: string
    note?: string[]
    plot: string
    select?: {
      text: string
      jump: number
    }[]
  }[]
}
