import AppHead from "@components/common/AppHead";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppError from "../components/common/AppError";

const AppLayout = dynamic(() => import("../components/common/AppLayout"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { displayName: pageTitle } = Component;

  return (
    <Suspense fallback={<div>{`[Suspense] Loading.....`}</div>}>
      <ErrorBoundary FallbackComponent={AppError}>
        <AppHead pageTitle={pageTitle} />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ErrorBoundary>
    </Suspense>
  );
}

export default MyApp;
