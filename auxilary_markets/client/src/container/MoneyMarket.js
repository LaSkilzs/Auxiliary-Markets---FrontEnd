import React from "react";
import InfoGrid from "../component/InfoGrid";
import ExchangeGrid from "../component/ExchangeGrid";
import ExchangeButton from "../component/ExchangeButton";

const displayTabs = ["Ether", "Zap", "ZapTokens", "Assets"];
const MoneyMarket = props => {
  return (
    <React.Fragment>
      <InfoGrid tabs={displayTabs} showButton={false} />
      <ExchangeGrid />
      <ExchangeButton />
    </React.Fragment>
  );
};

export default MoneyMarket;
