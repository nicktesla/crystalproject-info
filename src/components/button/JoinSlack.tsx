import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

type ExtraProps = {
  className?: string;
};
// TODO move ExtraProps to Button...
export const JoinSlack: FunctionComponent<ExtraProps> = (props) => {
  const { t } = useTranslation();
  return <Button label={t("joinSlack")} {...props} />;
};
