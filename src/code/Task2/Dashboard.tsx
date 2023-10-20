import React from "react";
import PieChart from "../../ignore/PieChart";
import { H1, InfoCard } from "@dnb/eufemia";
import BarChart from "../../ignore/BarChart";
import "../../ignore/styles.css";
import { account_medium, card_in_medium } from "@dnb/eufemia/icons";
import colorPicker from "../../ignore/Colors";
import {
  getAllTransactions,
  countCrossBorderTransactions,
  countTargetCountries,
  sumTransactions,
} from "../../ignore/codeDump";
import Provider from "@dnb/eufemia/shared/Provider";

export interface DashboardProps {
  setCurrentSubTab: Function;
}

export default function Dashboard(props: DashboardProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("Dashboard");

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <div className="DashboardTab">
        {/* Task 2A */}
        <H1 style={{ fontSize: "small" }}>Dashboard</H1>
        <div className="chart-container">
          {<div>
            <PieChart
              title={"Domestic & international transactions"}
              data={pieChartData}
            />
          </div>
          }
          <div>
            <BarChart
              title={"Number of transactions sent to a country"}
              data={barChartData}
            />
          </div>
        </div>

        <div className="DashboardBottom">
          <InfoCard
            title="Number of transactions in total"
            text={getAllTransactions().length}
            icon={card_in_medium}
            space="x-small"
          />
          <InfoCard
            title="Total amount of money"
            text={sumTransactions()}
            icon={account_medium}
            space="x-small"
          />
        </div>
      </div>
    </Provider>
  );
}

/* Task 2C */
const barChartData = {
  labels: ["Norway", "Sweden", "Denmark", "Finland", "USA", "Spain", "Italy", "Switzerland", "UK", "Germany"],
  datasets: [
    {
      /* Task 2B */
      label: "?????",
      data: [
        countTargetCountries("Norway"),
        countTargetCountries("Sweden"),
        countTargetCountries("Denmark"),
        countTargetCountries("Finland"),
        countTargetCountries("USA"),
        countTargetCountries("Spain"),
        countTargetCountries("Italy"),
        countTargetCountries("Switzerland"),
        countTargetCountries("UK"),
        countTargetCountries("Germany"),
      ],
      backgroundColor: colorPicker.SuccessGreen,
    },
  ],
};

const pieChartData = {
  labels: ["Domestic", "International"],
  datasets: [
    {
      label: "Amount",
      data: countCrossBorderTransactions(),

      backgroundColor: [
        colorPicker.Violet,
        colorPicker.Indigo,
        colorPicker.SeaGreen,
        colorPicker.SuccessGreen,
        colorPicker.SummerGreen,
        colorPicker.MintGreen,
      ],

      hoverColor: [
        colorPicker.Indigo,
        colorPicker.Violet,
        colorPicker.SeaGreen,
        colorPicker.SuccessGreen,
        colorPicker.SummerGreen,
        colorPicker.MintGreen,
      ],
    },
  ],
};