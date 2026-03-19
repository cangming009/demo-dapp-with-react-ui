import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";
import {WalletBatchLimitsTester} from "./components/WalletBatchLimitsTester/WalletBatchLimitsTester";
import {SignDataTester} from "./components/SignDataTester/SignDataTester";
import { MerkleExample } from "./components/MerkleExample/MerkleExample";
import { FindTransactionDemo } from './components/FindTransactionDemo/FindTransactionDemo';
import { TransferUsdt } from './components/TransferUsdt/TransferUsdt';

function App() {
  return (
      <TonConnectUIProvider
          manifestUrl={import.meta.env.VITE_MANIFEST_URL}
          uiPreferences={{ theme: THEME.DARK }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
          }}
          walletsListConfiguration={
            {
              includeWallets: [
                {
                  appName: 'GateDEX',
                  name: 'GateDEX',
                  imageUrl: 'https://web3-icon.ldd678.com/gateconnect/DEX.png',
                  aboutUrl: 'https://www.gate.io/',
                  universalLink: 'https://gatedex.onelink.me/mXlc/web3?gate_web3_wallet_universal_type=ton_connect',
                  bridgeUrl: 'https://dapp.gateio.services/tonbridge_api/bridge/v1',
                  jsBridgeKey: 'gatetonwallet',
                  platforms: ['ios', 'android'],
                  features: [
                    {
                      name: 'SendTransaction',
                      maxMessages: 4,
                      extraCurrencySupported: false
                    }
                  ]
                }
              ]
            }
          }
      >
        <div className="app">
            <Header />
            <TxForm />
            <WalletBatchLimitsTester />
            <SignDataTester />
            <TransferUsdt/>
            <CreateJettonDemo />
            <TonProofDemo />
            <FindTransactionDemo />
            <MerkleExample />
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App
