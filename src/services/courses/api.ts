import axiosService from '@/config/axios'

import { coursesEndpoint } from './constants'
import { Course } from './type'

export const coursesAPI = {
  getList: (params: any): Promise<Course[]> => {
    return axiosService.get(coursesEndpoint.getAll, {
      params,
    })
  },
  getDetail: (id: string): Promise<Course> => {
    return axiosService.get(coursesEndpoint.getDetail(id))
  },
  createDetail: (): Promise<Course> => {
    return axiosService.post(coursesEndpoint.createDetail)
  },
  updateDetail: (): Promise<Course> => {
    return axiosService.put(coursesEndpoint.createDetail)
  },
  deleteDetail: (id: string): Promise<Course> => {
    return axiosService.delete(coursesEndpoint.deleteDetail(id))
  },
}
