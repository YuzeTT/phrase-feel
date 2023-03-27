export interface Content {
  name: string
  author: string
  uploader: string
  warning_text: string
  content: string[]
  story: {
    id: number
    text: string
    plot: string
  }[]
}
