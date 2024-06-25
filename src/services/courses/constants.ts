const coursesEndpointPrefix = '/courses'

export const coursesEndpoint = {
  getAll: coursesEndpointPrefix,
  getDetail: (id: string) => `${coursesEndpointPrefix}/${id}`,
  createDetail: coursesEndpointPrefix,
  updateDetail: (id: string) => `${coursesEndpointPrefix}/${id}`,
  deleteDetail: (id: string) => `${coursesEndpointPrefix}/${id}`,
}

export const coursesQueryKeys = {
  all: ['courses'] as const,
  list: (params: any) => [...coursesQueryKeys.all, 'course-list', params],
  detail: (id: string) => [...coursesQueryKeys.all, 'course-detail', id],
}
