export type Image = {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

export type Testimonial = {
  id: string
  author: string
  content: string
  photo: Image
}

export type Project = {
  id: string
  title: string
  shortDescription: string
  cover: Image
  link: string
}
