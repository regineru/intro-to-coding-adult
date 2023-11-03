import { Button, Flex, H1, P, Section } from "@dnb/eufemia";
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
        <Flex.Container>
          <Flex.Item size={2}>
            <P>Firstname:</P>
          </Flex.Item>
          <Flex.Item size={10}>{firstName}</Flex.Item>

          <Flex.Item size={2}>
            <P>Lastname: </P>
          </Flex.Item>
          <Flex.Item size={10}>{lastName}</Flex.Item>

          <Flex.Item size={2}>
            <P>Reason letter: </P>
          </Flex.Item>
          <Flex.Item size={10}>{motivationLetter}</Flex.Item>

          <Flex.Item size={2}>
            <P>Files: </P>
          </Flex.Item>
          <Flex.Item size={10}>
            {files.map((f) => (
              <P>{f.file.name}</P>
            ))}
          </Flex.Item>
        </Flex.Container>

        <Flex.Container top>
          <Flex.Item>
            <Button
              variant="secondary"
              onClick={() => {
                setSubmittedApplication(false);
              }}
            >
              Back
            </Button>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="primary"
              onClick={() => {
                setFirstName(undefined);
                setLastName(undefined);
                setMotivationLetter(undefined);
                setFiles([]);
                setSubmittedApplication(false);
              }}
            >
              Send application to DNB
            </Button>
          </Flex.Item>
        </Flex.Container>
      </Section>
    </>
  );
};
