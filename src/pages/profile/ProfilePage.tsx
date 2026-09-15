import Loader from "@/components/Common/Loader"
import { useGetProfileQuery } from "@/store/api/profile/profileApis"
import { PageHeader } from "@/components/Common/Header/PageHeader"
import ProfileHeader from "@/components/Profile/ProfileHeader"
import PersonalDetails from "@/components/Profile/PersonalDetails"

const ProfilePage = () => {
  const { data, isLoading } = useGetProfileQuery(undefined)

  if (isLoading) return <Loader />

  const user = data?.data

  return (
    <>
      <PageHeader
        title="Profile"
        description="Manage your account information."
      />

      <div className="space-y-6">
        <ProfileHeader user={user} />
        <PersonalDetails user={user} />
      </div>
    </>
  )
}

export default ProfilePage
