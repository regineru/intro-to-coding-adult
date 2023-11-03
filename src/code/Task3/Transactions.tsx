import React from "react";
import { Dropdown, H1, Input, Section, P } from "@dnb/eufemia";
import { TransactionTable } from "./TransactionTable";
import { filterTable } from "../../ignore/codeDump";

export enum Parameter {
  FROM_NAME = "Sender's name",
  FROM_COUNTRY = "Sender's country",
  TO_NAME = "Recipient's name",
  TO_COUNTRY = "Recipient's country",
  AMOUNT = "Amount",
  RISK = 'Risk'
}

export interface TransactionsProps {
  setCurrentSubTab: Function;
}

export default function Transactions(props: TransactionsProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("Transaksjoner");

  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };
  const [inputParameter, setInputParameter] = React.useState(undefined);

  return (
    <Section innerSpace="small" left right variant="white">
      <div className="TransactionsTab">
        <H1>Overview of all transactions</H1>
        {/* Task 3A */}
        <Section variant="white">
          <Section innerSpace="small">
            <Dropdown
              data={[
                Parameter.FROM_NAME,
                Parameter.FROM_COUNTRY,
                Parameter.TO_NAME,
                Parameter.AMOUNT,
                Parameter.RISK,
              ]}
              label="Parameter to be filtered on:"
              title="Choose parameter"
              on_change={({ data }) => setInputParameter(data)}
            />
            <Input
              space
              type="text"
              onChange={handleInputText}
              value={inputText}
              placeholder="Parameter"
            />
          </Section>{" "}
          <TransactionTable
            listOfTransactions={filterTable(inputParameter, inputText)}
          />
        </Section>
      </div>
    </Section>
  );
}
