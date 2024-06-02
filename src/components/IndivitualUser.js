import { Button } from "./ui/button"

const IndivitualUser = ({ user }) => {
  return (
    <div
      key={user._id}
      className="max-w-80 break-words border rounded-md  p-5 shadow-xl border-gray-500"
    >
      <section className="flex justify-around my-4 items-center">
        <Button className="bg-blue-500 text-white">Edit</Button>
        <Button className="bg-red-500 text-white">Delete</Button>
        </section>
      <h3 className="text-xl font-semibold">Name : {user.name}</h3>
      <p className="text-lg">Email : {user.email}</p>
      <p className="">Address : {user.address}</p>
    </div>
  )
}
export default IndivitualUser
