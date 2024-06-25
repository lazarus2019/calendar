import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query'

import { PostAPI } from './post-api'
import { postQueryKey } from './post-constant'
import { PostListDTO } from './post-dto'
import { ListQueryParams } from './post-type'

export function useGetListPost<Data = PostListDTO>(
  params: ListQueryParams,
  options: Omit<UseQueryOptions<PostListDTO, Error, Data>, 'queryFn' | 'queryKey'>,
) {
  const queryKeys = postQueryKey.LIST(params)
  return useQuery<PostListDTO, Error, Data>({
    queryKey: queryKeys,
    queryFn: () => PostAPI.getListPost(params),
    staleTime: 5 * 6000,
    ...options,
  })
}

export function useUpdatePost(
  options: Omit<UseMutationOptions<PostListDTO, Error, ListQueryParams>, 'mutationFn'>,
) {
  return useMutation({
    mutationFn: (payload) => PostAPI.updatePost(payload),
    ...options,
  })
}
