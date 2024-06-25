import { useGetListCourses } from '@/services/courses/hook'

import CourseItem from './CourseItem'

function CourseList() {
  const { data = [], isFetching } = useGetListCourses({})
  return (
    <div>
      {isFetching && <p>Loading...</p>}
      {data.map((item) => (
        <CourseItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CourseList
