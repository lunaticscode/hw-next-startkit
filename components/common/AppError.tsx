import { FC, useEffect } from "react";
import { FallbackProps } from "react-error-boundary";

const AppError: FC<FallbackProps> = (props) => {
  const { error } = props;
  useEffect(() => {
    console.log({ error });
  }, [error]);
  return <></>;
};
export default AppError;
