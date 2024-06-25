import { FormEvent, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { useGetDetailCourse } from '@/services/courses/hook'

function CourseCreateEditPage() {
  const [name, setName] = useState('')
  const [params] = useSearchParams()
  const { id = '' } = useParams()
  //   const id = params.get('id') ?? ''

  const { data, isFetching } = useGetDetailCourse(id)


  useEffect(() => {
    if (data) setName(data.name)
  }, [data])

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ submitData: e.target[0].value })
  }

  return (
    <div>
      {isFetching && <p>Loading...</p>}
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default CourseCreateEditPage
