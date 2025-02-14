import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = "https://mainnet.helius-rpc.com/?api-key=0506c34b-da43-4b4d-84bf-164c8955ba43"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('ES124JMpsdWZzVEjvcFCBjq4W1AwNU336xZzD5fZ833L')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'swiftdice.com'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey("FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD"),
    symbol: 'BRZ',
    name: 'Brazilian Digital',
    image: "https://i.ibb.co/BZLnCLP/brz.webp",
    decimals: 4,
    baseWager: 1 * 1e4,
  }
  // {
  //   mint: new PublicKey(""),
  //   symbol: '???',
  //   name: 'Custom SPL Token',
  //   image: "image url",
  //   decimals: 6,
  //   baseWager: 1 * 1e6,
  // }
]
