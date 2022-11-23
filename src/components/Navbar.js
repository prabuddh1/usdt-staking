import React, { useEffect } from 'react'
import { useState } from 'react'
import Web3Modal from 'web3modal'

export default function Navbar() {
    const [wallet, setWalletAddress] = useState("");
    // const [value, setValue] = useState("");

    const connectWallet = async () => {
        if(window.ethereum) {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            // const chainId = parseInt(connection.chainId);
            const selectedAddress = await connection.selectedAddress;
            setWalletAddress(selectedAddress)
            window.ethereum.on('accountsChanged', async function (accounts) {
                //const selectedAddress = await accounts[0];
                //console.log(selectedAddress)
                //setWalletAddress(selectedAddress)
            })
        }
        else {
            console.log("Please install Metamask")
        }
    }

    const disconnectWallet = async () => {
        setWalletAddress("")
    }

    useEffect(() => {
        const connectWalletOnPageReload = async (selectedAddress) => {
            console.log(selectedAddress)
            if('isWalletConnected' === true) {
                setWalletAddress(selectedAddress)
            }
        }
        connectWalletOnPageReload()
    }, [])

    return (
        <div>
            
            <nav className="navbar bg-light shadow-sm p-3 mb-5 bg-body rounded justify-content-center">
                    <h3>Connect your wallet:&nbsp;</h3>
                    <button className="btn btn-outline-success me-2" type="button" onClick={connectWallet}>{wallet ? wallet : "Connect"}</button>
                    <button className="btn btn-outline-danger me-2" type="button" onClick={disconnectWallet}>Disconnect</button>
            </nav>
        </div>
    )
}
