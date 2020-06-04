import React from "react";
import { useTranslation } from "react-i18next";
import { PageMeta } from "../../components/layout";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageMeta title="Project Crystal 🔮" description="TODO" />
      <h1>{t("home.welcome")}</h1>
    </>
  );
};

export default HomePage;
