import React from "react";
import { useTranslation } from "react-i18next";
import { PageMeta, Container, Header, Footer } from "../../components/layout";
import { Font } from "../../components/font";
import { JoinSlack, LearnMore } from "../../components/button";
import { LogoAvatar } from "../../components/logo";

const CardIcon = () => (
  <div
    className="absolute w-12 h-12 bg-green-200"
    style={{ left: 20, top: -30 }}
  ></div>
);

const CardLeft = () => {
  const { t } = useTranslation();
  return (
    <div
      className="h-64 w-full rounded-lg relative px-6 py-8"
      style={{ backgroundColor: "#190F03" }}
    >
      <CardIcon />
      <Font.H2 className="text-white">
        {t("home.about.introduction")}
        <span className="text-orange-700 pl-2">{t("home.about.message")}</span>
        <ul>
          <li className="flex justify-center">
            <i className="pr-2 h-5 w-5 bg-orange-100 rounded-full inline-block" />
            Verified Officer Profiles
          </li>
          <li>Officer reputation ratings</li>
          <li>Direct Messaging &amp; More</li>
        </ul>
      </Font.H2>
    </div>
  );
};

const SplitCTA = () => {
  return (
    <div className="flex flex-row flex-no-wrap py-8">
      <div className="flex flex-1">L</div>
      <div className="flex flex-1">R</div>
    </div>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageMeta title="Project Crystal 🔮" description="TODO" />
      <Header />
      <Container>
        <div className="py-16">
          <LogoAvatar />
        </div>
        <Font.H1 className="text-center pb-5">{t("home.mission.text")}</Font.H1>
        <Font.Paragraph className="text-center pb-5">
          {t("home.mission.details")}
        </Font.Paragraph>

        <div className="mx-auto text-center">
          <JoinSlack className="px-8 py-4 border rounded bg-green-700 border-green-700 mx-3 text-white" />
          <LearnMore className="px-8 py-4 border rounded border-green-700 mx-3 text-green-700" />
        </div>

        <div className="flex flex-row flex-no-wrap py-8">
          <div
            className="flex"
            style={{
              flex: 2,
            }}
          >
            <CardLeft />
          </div>
          <div
            className="flex pl-3"
            style={{
              flex: 3,
            }}
          >
            YOU
          </div>
        </div>
        <SplitCTA />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
