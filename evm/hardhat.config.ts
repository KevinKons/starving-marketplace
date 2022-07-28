import * as dotenv from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan';

dotenv.config();

const ACCOUNT_ONE: any = process.env.ACCOUNT_ONE;
const MUMBAI_URL: any = process.env.MUMBAI_URL;
const POLYGON_SCAN_API_KEY: any = process.env.POLYGON_SCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [ACCOUNT_ONE]
    }
  },
  etherscan: {
    apiKey: POLYGON_SCAN_API_KEY
  },
};

export default config;
