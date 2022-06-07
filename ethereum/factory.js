import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xAaBFA919C73658F1EAF61e2Cf5Ac3634fcd1ab1D"
);

export default instance;
