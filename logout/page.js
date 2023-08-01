
import { cookies } from 'next/dist/client/components/headers'
function page() {

  cookies().set({
    name:'token',
    value:'',
    path:'/'
  })
  return (
    <div>page</div>
  )
}

export default page