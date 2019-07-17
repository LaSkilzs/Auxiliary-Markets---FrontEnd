class API {
  static async getMarketData() {
    const response = await fetch(
      "https://api.nomics.com/v1/markets?key=3f85c5b3046536a81caaad9cc9ee1b6f&exchange=binance"
    );
    const data = await response.json();
    return data;
  }

  static async getCurrencies() {
    const response = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=3f85c5b3046536a81caaad9cc9ee1b6f&interval=1d,30d&convert=EUR&limit=50"
    );
    const data = await response.json();
    let result = [];
    let currencies = data;
    for (let i = 0; i < 100; i++) {
      result.push(currencies[i]);
    }
    console.log(result);
    return result;
  }

  static async getCurrencyMetaData() {
    const response = await fetch(
      "https://api.nomics.com/v1/currencies?key=3f85c5b3046536a81caaad9cc9ee1b6f&ids=BTC,ETH,XRP&attributes=id,name,logo_url"
    );
    const data = await response.json();
    return console.log(data);
  }

  async getCurrencyPriceEndpoint() {
    const response = await fetch(
      "https://api.nomics.com/v1/currencies/sparkline?key=3f85c5b3046536a81caaad9cc9ee1b6f&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z"
    );
    const data = await response.json();
    return console.log(data);
  }
}

export default API;
