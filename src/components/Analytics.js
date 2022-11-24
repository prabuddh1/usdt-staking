import React from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { liquiditystakingv1address, stakingtokenaddress } from '../config'

import LiquidityStakingV1 from '../artifacts/contracts/liquidity/v1/LiquidityStakingV1.sol/LiquidityStakingV1.json'
import StakingToken from '../artifacts/contracts/liquidity/v1/LiquidityStakingV1.sol/VirtualEquityToken.json'

export default function Analytics() {
    const [currentStake, setCurrentStake] = React.useState(0);

    const getCurrentStake = async () => {
        if(window.ethereum) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        let contract = new ethers.Contract(liquiditystakingv1address, LiquidityStakingV1.abi, provider)
        let call = await contract.balanceOf(connection.selectedAddress)
        let result = ethers.utils.formatUnits(call)
        setCurrentStake(result)
    }
    else {
        console.log("Please install Metamask")
    }
  }
  React.useEffect(() => {
    getCurrentStake()
  }, [])
  return (
      <>
        <div className="row shadow-sm p-3 mb-5 bg-body rounded">
        <div className="col-sm-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">Staked</h5>
                <h2>{currentStake + " USDT"}</h2>
                {/* <h1>{(Math.random() * (100) + 1) + " USDT"}</h1> */}
            </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">Earnings</h5>
                <h2>{Math.round(((Math.random() * (100) + 1) + Number.EPSILON) * 100) / 100 + " FX"}</h2>
            </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">TVL</h5>
                <h2>{Math.round(((Math.random() * (1000000) + 1) + Number.EPSILON) * 100) / 100 + " USDT"}</h2>
            </div>
            </div>
        </div>
        <div className="col-sm-4 my-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">APY</h5>
                <h2>{"12 %"}</h2>
            </div>
            </div>
        </div>
        <div className="col-sm-4 my-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">Epoch Start</h5>
                <h2>{Math.round(((Math.random() * (100) + 1) + Number.EPSILON) * 100) / 100 + " days"}</h2>
            </div>
            </div>
        </div>
        <div className="col-sm-4 my-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">Epoch End</h5>
                <h2>{Math.round(((Math.random() * (100) + 1) + Number.EPSILON) * 100) / 100 + " days"}</h2>
            </div>
            </div>
        </div>
        </div>
      </>
  )
}
