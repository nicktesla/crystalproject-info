import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

type ExtraProps = {
  className?: string;
};
export const LearnMore: FunctionComponent<ExtraProps> = (props) => {
  const { t } = useTranslation();
  return <Button label={t("learnMore")} {...props} />;
};
