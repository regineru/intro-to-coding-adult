import { Card, FormStatus, H1, H2, P, Section, Upload } from "@dnb/eufemia";
import { Field, Form } from "@dnb/eufemia/extensions/forms";
import { useState } from "react";
import { ApplicationResult } from "./ApplicationResult";

export const Application = () => {
  // Task 7C: create similar states like the one below
  const [submittedApplication, setSubmittedApplication] = useState(false);

  return (
    <>
      {!submittedApplication && (
        <Section spacing="large" left right style_type="white">
          <H1 style={{ textAlign: "center" }}>Apply for a job in DNB!</H1>
          {/* Task 7B: Create the application form below this line */}
        </Section>
      )}

      {submittedApplication && (
        <ApplicationResult
          firstName={undefined}
          lastName={undefined}
          motivationLetter={undefined}
          files={undefined}
          setSubmittedApplication={undefined}
          setFirstName={undefined}
          setLastName={undefined}
          setMotivationLetter={undefined}
          setFiles={undefined}
        />
      )}
    </>
  );
};
