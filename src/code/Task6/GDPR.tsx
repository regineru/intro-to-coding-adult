import React from "react";
import { Dropdown, H1, Input, Section, P, H2, Space, Button } from "@dnb/eufemia";

export interface TransactionsProps {
    setCurrentSubTab: Function;
}

export default function GDPR(props: TransactionsProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("GDPR");



  return (
    <Section spacing="large" left right style_type="white">
      <div className="TransactionsTab">
        <H1>Your privacy in DNB</H1>
        <Section spacing="large" style_type="white">
            <H2>Information of how we treat personal sensitive information to comply with General Data Protection Regulation (GDPR)</H2>
        </Section>
        <Section spacing="large" style_type="white">
            {/* Task 6A: create button */}
            <Button
              text="Get GDPR Data" 
              title="Get GDPR Data"
              variant="secondary"
              icon="chevron_right"
              size="default"
              right
            /> 
       </Section>
      </div>
    </Section>
  );
}
