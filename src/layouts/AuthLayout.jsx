import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageMainLayout from "./PageMainLayout";

export default function AuthLayout() {
  return (
    // <Outlet />
    <>
      <Header />
      <PageMainLayout>
        <Outlet />
      </PageMainLayout>
    </>
  );
}
