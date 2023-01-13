import Head from "next/head";
import { FC } from "react";
interface AppHeadProps {
  pageTitle?: string;
}
const AppHead: FC<AppHeadProps> = (props) => {
  const { pageTitle } = props;
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};
export default AppHead;
