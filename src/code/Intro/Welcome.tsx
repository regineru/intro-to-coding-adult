import { H1, InfoCard, P, Section } from "@dnb/eufemia";
import oslo from "../../ignore/oslo.jpg";
import "../../ignore/styles.css";

export interface WelcomeProps {
  setCurrentTab: Function;
}

export default function Welcome(props: WelcomeProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Velkommen");
  return (
    <Section left right="0.25" variant="white">
      <div className="WelcomeTab">
        {/* Intro Task A */}
        <H1 style={{ margin: 20, color: "black" }}>Welcome to the workshop!</H1>
        {/* Intro Task C */}
        <Section
          variant="sea-green"
          style={{
            padding: "2rem",
            minWidth: "40rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "1rem",
          }}
        >
          <img src={oslo} style={{ width: "500px" }} />
          <P
            style={{
              color: "white",
              fontSize: "large",
            }}
          >
            In this workshop we will go though a set of tasks related to web
            development. We will work on both the customer page and the employee
            page, which is meant to be a view for respectivly customers and AML
            workers in a fictive DNB online bank.
            <br></br>
            <br></br>
            The end goal of the tasks is to come up with a name that is
            suspicious in an AML context. In this simplified online bank,
            suspicious means that the person has transfered money to Russia,
            violating the international sanctions about not supporting the war.
          </P>
        </Section>
        <br />
        <InfoCard
          style={{ fontSize: "large", bottom: "0px" }}
          text="Do not hesitate to ask us for help or if you have any questions"
        ></InfoCard>
      </div>
    </Section>
  );
}
