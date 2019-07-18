import React from "react";
import InfoGrid from "../component/InfoGrid";
import ExchangeGrid from "../component/ExchangeGrid";
import ExchangeButton from "../component/ExchangeButton";

const displayTabs = ["Ether", "Zap", "ZapTokens", "Assets"];
const MoneyMarket = props => {
  return (
    <div>
      <InfoGrid tabs={displayTabs} showButton={false} />
      <ExchangeGrid />
      <ExchangeButton />
    </div>
  );
};

export default MoneyMarket;
