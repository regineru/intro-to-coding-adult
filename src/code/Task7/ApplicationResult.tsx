import { Button, H1, P, Section } from "@dnb/eufemia";
import FlexContainer from "@dnb/eufemia/components/flex/Container";
import FlexItem from "@dnb/eufemia/components/flex/Item";
import { UploadFile } from "@dnb/eufemia/components/upload/types";

export interface ApplicationResultProps {
  firstName: String;
  lastName: String;
  motivationLetter: String;
  files: UploadFile[];
  setSubmittedApplication: Function;
  setFirstName: Function;
  setLastName: Function;
  setMotivationLetter: Function;
  setFiles: Function;
}

export const ApplicationResult = (props: ApplicationResultProps) => {
  const {
    firstName,
    lastName,
    motivationLetter,
    files,
    setSubmittedApplication,
    setFirstName,
    setLastName,
    setMotivationLetter,
    setFiles,
  } = props;

  return (
    <>
      <Section space left right style_type="white">
        <H1>Application</H1>
        {/* Task 7E: Create the the application summary here */}
      </Section>
    </>
  );
};
