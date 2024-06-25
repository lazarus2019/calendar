import { useQuery } from '@tanstack/react-query'

import { coursesAPI } from './api'
import { coursesQueryKeys } from './constants'

export const useGetListCourses = (params: any) => {
  const queryKey = coursesQueryKeys.list(params)
  return useQuery({
    queryKey,
    queryFn: () => coursesAPI.getList(params),
  })
}

export const useGetDetailCourse = (id: string) => {
  const queryKey = coursesQueryKeys.detail(id)

  return useQuery({
    queryKey,
    queryFn: () => coursesAPI.getDetail(id),
  })
}
