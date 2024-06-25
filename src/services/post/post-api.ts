import axiosService from '@/config/axios'

import { postEndpoint } from './post-constant'
import { PostListDTO } from './post-dto'
import { ListQueryParams } from './post-type'

export const PostAPI = {
  getListPost: (params: ListQueryParams): Promise<PostListDTO> => {
    return axiosService.get(postEndpoint.LIST, { params })
  },
  updatePost: (payload: ListQueryParams): Promise<PostListDTO> => {
    return axiosService.put(postEndpoint.LIST, payload)
  },
}
