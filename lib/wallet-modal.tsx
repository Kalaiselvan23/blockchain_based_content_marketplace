"use client";

import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { WalletMinimal } from "lucide-react";

export default function ConnectButton() {
    const { open } = useWeb3Modal();

    return <Button onClick={() => open()}>
        <WalletMinimal color="white" />
    </Button>;
}
