// import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppError from "../components/common/AppError";

const AppLayout = dynamic(() => import("../components/common/AppLayout"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>{`[Suspense] Loading.....`}</div>}>
      <ErrorBoundary FallbackComponent={AppError}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ErrorBoundary>
    </Suspense>
  );
}

export default MyApp;
