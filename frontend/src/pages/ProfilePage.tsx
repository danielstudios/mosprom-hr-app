import withAuth from "@/helpers/withAuth"
import { USER_ROLE } from "@/stores/authStore"

const Profile = () => {
  return (
    <div>
      <p>Личный кабинет</p>
      <div>

      </div>
    </div>
  )
}

export const ProfilePage = withAuth(Profile, [USER_ROLE.ADMIN, USER_ROLE.HR, USER_ROLE.UNIVERSITY])