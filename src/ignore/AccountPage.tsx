import React from "react";
import { Breadcrumb, H1, H2, H3, NumberFormat, Section } from "@dnb/eufemia";
import { Account, Transaction } from "../data/Models";
import { transfer_to, pay_from } from "@dnb/eufemia/icons";
import { TransactionTableForAccounts } from "./TransactionTableForAccounts";

export type AccountProps = {
  account: Account | undefined;
  setAccountClicked: Function;
};

export const findBalance = (transactions: Transaction[]) => {
  return transactions.reduce(
    (totalBalance, transaction) => totalBalance + transaction.amount,
    0
  );
};

export default function AccountPage(props: AccountProps) {
  const { account, setAccountClicked } = props;
  if (account == undefined) {
    return;
  }

  return (
    <Section top bottom variant="white">
      <Breadcrumb spacing>
        <Breadcrumb.Item
          text="Accounts"
          variant="previous"
          onClick={() => {
            setAccountClicked("Customer");
          }}
        />
      </Breadcrumb>
      <H1>{account.name}</H1>
      <H3 style={{ fontWeight: "normal" }}>Balance</H3>
      <H2>
        <NumberFormat currency>
          {findBalance(account.transactions)}
        </NumberFormat>
      </H2>
      <Section top variant="lavender" innerSpace="small">
        <TransactionTableForAccounts
          listOfTransactions={account.transactions}
        />
      </Section>
    </Section>
  );
}
