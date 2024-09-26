import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { mainnet } from "wagmi/chains";
import {http} from "wagmi"
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
console.log(projectId);
if (!projectId) throw new Error("Project ID is not defined");

// const metadata = {
//   name: "Content Publishing Platform",
//   description: "Blockchain based content publishing platform",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

export const config = createConfig({
  //chains: [sepolia],
  // ssr: true,
  // storage: createStorage({
  //   storage: cookieStorage,
  // }),
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
