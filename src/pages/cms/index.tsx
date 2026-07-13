import CmsTabs from "@/components/CMS/Tabs"
import { PageHeader } from "@/components/Common/Header/PageHeader"

const CMSPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="CMS"
        description="Manage website content, blogs, pages, and media assets."
      />
      <CmsTabs />
    </div>
  )
}

export default CMSPage
