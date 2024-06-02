import AddUserBtn from "@/components/AddUserBtn"
import UserLists from "@/components/UserLists"

export default function Home() {
  return (
    <div className="max-w-6xl  mx-auto py-12 ">
      <section className="flex justify-between items-center">
        <h2>User Management</h2>
        <AddUserBtn />
      </section>
      <UserLists />
    </div>
  )
}
