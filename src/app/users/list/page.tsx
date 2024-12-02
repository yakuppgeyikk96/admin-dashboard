import { PageLayout } from "@/components/layout/PageLayout";
import UserListPage from "@/components/users/list";

export default function UsersListPage() {
  return (
    <PageLayout
      title="User List"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "User List" }]}
    >
      <UserListPage />
    </PageLayout>
  );
}
