import Web3 from "web3";

const getWeb3 = () => {
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          window.ethereum.enable();
          console.log(web3);
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using local Web3");
        resolve(web3);
      }
    });
  });
};

export default getWeb3;
