import React, { useEffect, useState } from "react";
import { allDNBTransactions } from "../data/transactions";
import { customer } from "../data/customer";
import { H1, H2, Section, Tabs, NumberFormat } from "@dnb/eufemia";
import Transactions from "../code/Task3/Transactions";
import { Transaction } from "../data/CustomerModel";
import { CompanyTransaction } from "../data/TransactionModel";
import { Parameter } from "../code/Task3/Transactions";
import { detectRiskCompany } from "../code/Task3/TransactionTable";
import Dashboard from "../code/Task2/Dashboard";
import CardOverview from "../code/Task6/CardOverview";

export function getAllTransactions() {
  //const allCustomerTransactions = customer.accounts.flatMap(
  //  (account) => account.transactions
  //);
  return allDNBTransactions //.concat(allCustomerTransactions);
}

export interface TransactionsPageProps {
  setCurrentTab: Function;
}

export function TransactionsPage(props: TransactionsPageProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Etterforsker");
  const [currentSubTab, setCurrentSubTab] = useState<string>(() => {
    if (window.sessionStorage.getItem("currentSubTab") != null) {
      return window.sessionStorage.getItem("currentSubTab");
    }
    return "Dashboard";
  });

  useEffect(() => {
    window.sessionStorage.setItem("currentSubTab", currentSubTab.toString());
  }, [currentSubTab]);

  return (
    <Tabs
      left
      selected_key={currentSubTab}
      data={[
        {
          title: "Dashboard",
          key: "Dashboard",
          content: (
            <div className="DashboardTab">
              <Dashboard setCurrentSubTab={setCurrentSubTab} />
            </div>
          ),
        },
        {
          title: "Transactions",
          key: "Transaksjoner",
          content: (
            <div className="TransactionsTab">
              <Transactions setCurrentSubTab={setCurrentSubTab} />
            </div>
          ),
        },
        {
          title: "Card Overview",
          key: "CardOverview",
          content: (
            <div className="">
              <CardOverview setCurrentSubTab={setCurrentSubTab} />
            </div>
          ),
        },
      ]}
    ></Tabs>
  );
}

export function filterTable(
  parameter: Parameter | undefined,
  value: string
): CompanyTransaction[] {
  const filteredTransactions: CompanyTransaction[] = [];
  const allTransactions = getAllTransactions();
  if (value === "") {
    return allTransactions;
  }
  allTransactions.map((transaction) => {
    switch (parameter) {
      case Parameter.FROM_NAME:
        return transaction.from.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(value.toLowerCase().split(" ").join(""))
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.FROM_COMPANY:
        return transaction.from.company
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(value.toLowerCase().split(" ").join(""))
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.TO_NAME:
        return transaction.to.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(value.toLowerCase().split(" ").join(""))
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.TO_COMPANY:
        return transaction.to.company
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(value.toLowerCase().split(" ").join(""))
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.AMOUNT:
        return transaction.amount
          .toString()
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(value.toLowerCase().split(" ").join(""))
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.RISK:
        return detectRiskCompany(transaction.to.location)
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(value.toLowerCase().split(" ").join(""))
          ? filteredTransactions.push(transaction)
          : undefined;
    }
  });
  return filteredTransactions;
}

export function sumTransactions() {
  var sum = 0;
  getAllTransactions().map((transaction) => {
    sum += transaction.amount;
  });
  return <NumberFormat>{sum}</NumberFormat>;
}

export function countCrossBorderTransactions() {
  var innenlandsCounter = 0;
  getAllTransactions().map((transaction) => {
    if (transaction.from.location === transaction.to.location) {
      innenlandsCounter += 1;
    }
  });
  const utenlandsCounter = getAllTransactions().length - innenlandsCounter;
  return [innenlandsCounter, utenlandsCounter];
}

export function countTargetCountries(country: String) {
  var counter = 0;
  getAllTransactions().map((transaction) => {
    if (transaction.to.location === country) {
      counter += 1;
    }
  });
  return counter;
}
