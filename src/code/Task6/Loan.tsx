import React from "react";
import { Dropdown, H1, Input, Section, P, H2, Space, Button } from "@dnb/eufemia";
import loan from "../../ignore/loan.png"


export interface TransactionsProps {
    setCurrentSubTab: Function;
}

export default function Loan(props: TransactionsProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("Loan");



  return (
    <Section spacing="large" left right style_type="white">
      <div className="loan-container">
        <H1>Mortgage</H1>
        <Section spacing="large" style_type="white">
            <H2>Get a mortgage offer and advice throughout your housing journey.</H2>
        </Section>
        <Section spacing="large" style_type="white">
          <Space space="small">
            <img src={loan}/>
          </Space>
            {/* Task 6A: create button */}
            <Button
              text="Apply" 
              title="apply"
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
