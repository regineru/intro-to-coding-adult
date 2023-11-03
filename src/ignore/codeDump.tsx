import { NumberFormat, Tabs } from "@dnb/eufemia";
import { useState } from "react";
import Dashboard from "../code/Task2/Dashboard";
import { detectRiskCountry } from "../code/Task3/TransactionTable";
import Transactions, { Parameter } from "../code/Task3/Transactions";
import CardOverview from "../code/Task6/CardOverview";
import { Transaction } from "../data/Models";
import { customer } from "../data/customer";
import { allDNBTransactions } from "../data/transactions";

export function getAllTransactions(): Transaction[] {
  const allCustomerTransactions: Transaction[] = customer.accounts.flatMap(
    (account) => account.transactions
  );
  return allDNBTransactions.concat(allCustomerTransactions);
}

export function TransactionsPage() {
  const [currentSubTab, setCurrentSubTab] = useState<string>(() => {
    if (window.sessionStorage.getItem("currentSubTab") != null) {
      return window.sessionStorage.getItem("currentSubTab");
    }
    return "Dashboard";
  });

  return (
    <Tabs
      left
      selected_key={currentSubTab}
      on_change={({ selected_key }) => {
        window.sessionStorage.setItem("currentSubTab", selected_key);
      }}
      data={[
        {
          title: "Dashboard",
          key: "Dashboard",
          content: (
            <div className="DashboardTab">
              <Dashboard />
            </div>
          ),
        },
        {
          title: "Transactions",
          key: "Transaksjoner",
          content: (
            <div className="TransactionsTab">
              <Transactions />
            </div>
          ),
        },
        {
          title: "Customer's Cards",
          key: "CardOverview",
          content: (
            <div className="CardOverview">
              <CardOverview />
            </div>
          ),
        },
      ]}
    />
  );
}

export function filterTable(
  parameter: Parameter | undefined,
  value: string
): Transaction[] {
  const filteredTransactions: Transaction[] = [];
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
      case Parameter.FROM_COUNTRY:
        return transaction.from.country
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
      case Parameter.TO_COUNTRY:
        return transaction.to.country
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
        return detectRiskCountry(transaction.to.country)
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
  /* getAllTransactions().map((transaction) => {
    if (transaction.from.country === transaction.to.country) {
      innenlandsCounter += 1;
    }
  });
  const utenlandsCounter = getAllTransactions().length - innenlandsCounter;
  return [innenlandsCounter, utenlandsCounter]; */
}

export function countTargetCountries(country: String) {
  var counter = 0;
  /* getAllTransactions().map((transaction) => {
    if (transaction.to.country === country) {
      counter += 1;
    }
  }); */
  return counter;
}
