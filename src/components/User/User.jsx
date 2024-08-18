import { useParams } from "react-router-dom"
const User = () => {
    const { userid } = useParams()
  return (
    <div className="text-center text-white bg-gray-700 p-4 text-3xl">User : {userid}</div>
  )
}

export default User