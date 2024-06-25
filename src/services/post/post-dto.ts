type PaginationList = {
  total: number
  page: number
  limit: number
}

export type PostItemDTO = {
  id: string
  title: string
  content: string
}

export type PostListDTO = {
  items: PostItemDTO[]
  pagination: PaginationList
}
