import React from "react";
import { Dropdown, H1, Input, Section, P, H2, Space, Button, Slider, Upload } from "@dnb/eufemia";

export interface TransactionsPageProps {
    setCurrentTab: Function;
}

export default function ApplyJob(props: TransactionsPageProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Positions");

  return (
    <Section spacing="large" left right style_type="white">
        <H1 style={{textAlign:"center"}}>Available positions in DNB!</H1>
        <div className="job-header-container" style={{ marginLeft: "10rem", marginRight: "10rem",display: "flex", justifyContent:"center"}}>
        <Section spacing="large" style_type="white">
            <H2>Hopefully, after being introduced to programming and the endless possibilities that code can do, you would like to apply for an available position as a software developer in DNB.</H2>
        </Section>
      </div>
      <Section style_type="white" spacing="large" style={{marginLeft: "10rem", marginRight: "10rem",}}>
        <Upload 
        acceptedFileTypes={['jpg', 'png', 'pdf']} 
        id="upload-basic" 
        title="Upload document"
        text="Drag & drop, or choose a file you would like to upload."
        fileTypeDescription="Allowed file formats:"
        fileSizeDescription="Max file size:"
        />
      </Section>
    </Section>
  );
}
