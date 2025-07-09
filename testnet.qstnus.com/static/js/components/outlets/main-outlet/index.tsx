import React from "react";
import { Outlet } from "react-router-dom";

import { Page, Header, Footer } from "components";

import { useHandleUser } from "hooks";

const MainOutlet: React.FC = () => {
  useHandleUser();
  return (
    <Page>
      <div className="flex flex-col min-h-screen">
        <Header.DesktopHeader />

        <div className="flex-1">
          <Outlet />
        </div>

        <div className="mx-7">
          <Footer />
        </div>
      </div>
    </Page>
  );
};

export default MainOutlet;
