import { AxiosResponse } from "axios";
import { useState } from "react";
import useSwr from "swr";
import { ApiMethods, getApi, postApi, putApi, deleteApi } from "@utils/api";

const IS_DEBUG = true;

const mapMethdoToFetcher: Record<ApiMethods, any> = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

const useCustomSwr = (
  method: ApiMethods,
  path: string | ((...args: any) => string),
  data: any, // body or params
  init: boolean = false,
  suspense: boolean = false
) => {
  const [isPending, setIsPending] = useState(false);
  const [_, occuredError] = useState();
  const {
    data: resultData,
    isValidating,
    error,
    mutate,
  } = useSwr(
    [path, data],
    init
      ? (path: string, data: any) => mapMethdoToFetcher[method](path, data)
      : null,
    {
      suspense,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const handleMutate = async (newPath: string, newData: any) => {
    setIsPending(true);
    await mutate(
      (await mapMethdoToFetcher[method](newPath, newData).catch(
        (apiError: any) => {
          IS_DEBUG && console.log(apiError);
          occuredError(() => {
            IS_DEBUG &&
              console.log("(!)usePostSwr Mutate Error ::: \n", apiError);
            throw apiError;
          });
        }
      )) as AxiosResponse<any, any>,
      { revalidate: false }
    );
    setIsPending(false);
  };

  if (error) {
    IS_DEBUG && console.log("(!)usePostSwr Error ::: \n", { error });
    occuredError(() => {
      throw error;
    });
  }

  return {
    resultData,
    handleMutate,
    isLoading: isValidating || isPending,
  };
};

export default useCustomSwr;
