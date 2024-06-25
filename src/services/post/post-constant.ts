import { ListQueryParams } from './post-type'

export const postEndpoint = {
  LIST: 'news/list',
}

export const postQueryKey = {
  ALL: ['posts'],
  LIST: (params: ListQueryParams) => [...postQueryKey.ALL, params],
} as const
