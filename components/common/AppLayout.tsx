import { FC, ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
interface AppLayoutProps {
  children?: ReactNode;
}
const AppLayout: FC<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};
export default AppLayout;
