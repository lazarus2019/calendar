import { Course } from '@/services/courses/type'

type CourseItemProps = {
  item: Course
}

function CourseItem({ item }: CourseItemProps) {
  const { id, name } = item
  return (
    <div>
      {id} - {name}
    </div>
  )
}

export default CourseItem
