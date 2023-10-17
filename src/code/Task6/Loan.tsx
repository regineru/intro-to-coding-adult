import React from "react";
import { Dropdown, H1, Input, Section, P, H2, Space, Button, Slider } from "@dnb/eufemia";
import loan from "../../ignore/loan.png"

export interface TransactionsProps {
    setCurrentSubTab: Function;
}

const calculateLoan = () => {
  const something = "";
  return (
    <Section spacing="large" style_type="light">
      <P>Halåååå</P>
    </Section>
  );
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
          <Space space="large">

          <Slider
            min={0}
            max={6000000}
            value={70}
            label="Boligens pris:"
            numberFormat={{
              currency: 'NOK',
            }}
            tooltip={true}
            onChange={({ value }) => console.log('onChange:', value)}
          />
          <Slider
            min={0}
            max={10}
            value={5.04}
            label="Rente:"
            numberFormat={{
              percent: true,
            }}
            tooltip={true}
            onChange={({ value }) => console.log('onChange:', value)}
          />
          <Slider
            min={0}
            max={30}
            value={25}
            label="Nedbetalingstid:"
            numberFormat={{
              currency: 'NOK',
            }}
            tooltip={true}
            onChange={({ value }) => console.log('onChange:', value)}
          />
          </Space>
          <Space style={{display: "flex", justifyContent: "center"}}>
            {/* Task 6A: create button */}
            <Button
              text="Apply" 
              title="apply"
              variant="secondary"
              icon="chevron_right"
              size="default"
              right
              onClick={() => calculateLoan()}
            /> 
          </Space>
       </Section>
      </div>
    </Section>
  );
}
