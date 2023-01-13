import { GetServerSideProps, NextPage } from "next";
import { NEXT_DATA } from "next/dist/shared/lib/utils";
import { Html, Main, NextScript, DocumentProps, Head } from "next/document";
import { META_CONTENT } from "../utils/const/seo";

const Document: NextPage<DocumentProps> = (props) => {
  const { __NEXT_DATA__: pageData, buildManifest } = props;
  const { page }: NEXT_DATA = pageData;

  const validPagePaths = Object.keys(buildManifest.pages);
  const pagePath = validPagePaths.includes(page) ? page : "/_error";

  return (
    <Html>
      <Head>
        <meta name="title" content={META_CONTENT[pagePath].TITLE as string} />
        <meta
          name="description"
          content={META_CONTENT[pagePath].DESC as string}
        />
        <meta
          name="keywords"
          content={(META_CONTENT[page].KEYWORDS as Array<string>).join(", ")}
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: "",
    },
  };
};
