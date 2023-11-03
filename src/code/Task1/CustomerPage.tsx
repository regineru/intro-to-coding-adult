import React, { useEffect, useState } from "react";
import AccountTable from "../Extra/AccountTable";
import { customer } from "../../data/customer";
import unknown from "./ProfilePictures/Unknown.png";
import AdaLovelace from "./ProfilePictures/AdaLovelace.png";
import AmalClooney from "./ProfilePictures/AmalClooney.jpg";
import CelineDion from "./ProfilePictures/CelineDion.jpg";
import ChimamandaAdichie from "./ProfilePictures/ChimamandaAdichie.jpg";
import KamalHarris from "./ProfilePictures/KamalaHarris.png";
import GraceHopper from "./ProfilePictures/GraceHopper.jpg";
import MichelleObama from "./ProfilePictures/MichelleObama.jpg"
import TaylorSwift from "./ProfilePictures/TaylorSwift.png";
import GretaThunberg from "./ProfilePictures/GretaThunberg.png";
import { H1, H2, Img, Section } from "@dnb/eufemia";
import "../../ignore/styles.css";
import AccountPage from "../../ignore/AccountPage";

export interface CustomerPageProps {
  setCurrentTab: Function;
}

/** */
export default function CustomerPage(props: CustomerPageProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Kunde");
  const [accountClicked, setAccountClicked] = useState("Customer");

  return (
    <Section left right variant="white">
      <div className="CustomerTab">
        {accountClicked === "Customer" && (
          <>
            {/* Task 1A: Change the header here */}
            <H1>Welcome unknown user!</H1>
            <Img
              /* Task 1B: Change the picture here */
              src={unknown}
              alt="User Picture"
              width="250rem"
              height="250rem"
              style={{ borderRadius: "50%" }}
              bottom
              top
            />
            <Section innerSpace="medium" variant="lavender">
              <AccountTable
                accountList={customer.accounts}
                setAccountClicked={setAccountClicked}
              />
            </Section>
          </>
        )}

        {accountClicked !== "Customer" && (
          <>
            <AccountPage
              account={customer.accounts.find(
                (account) =>
                  account.name === accountClicked ||
                  account.number === accountClicked
              )}
              setAccountClicked={setAccountClicked}
            />
          </>
        )}
      </div>
    </Section>
  );
}
