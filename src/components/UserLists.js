import { getAllUsersActions } from "@/actions/actions"
import { lazy } from "react"
const IndivitualUser = lazy(() => import("./IndivitualUser"))

const UserLists = async () => {
  const { data: users } = await getAllUsersActions()
  return (
    <div>
      <h2 className="text-4xl font-bold pt-16 pb-6">User Management</h2>
      <section>
        <div className="grid grid-cols-4 items-center gap-12">
          {users.map((user) => (
            <IndivitualUser key={user?._id} {...{ user }} />
          ))}
        </div>
      </section>
    </div>
  )
}
export default UserLists
