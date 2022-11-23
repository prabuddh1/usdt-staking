import React from 'react'
import { useState } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { liquiditystakingv1address, stakingtokenaddress } from '../config'

import LiquidityStakingV1 from '../artifacts/contracts/liquidity/v1/LiquidityStakingV1.sol/LiquidityStakingV1.json'
import StakingToken from '../artifacts/contracts/liquidity/v1/LiquidityStakingV1.sol/VirtualEquityToken.json'


export default function StakeUnstakeModal() {
    const stakeUsdt = async () => {
        if(window.ethereum) {
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            let contract = new ethers.Contract(liquiditystakingv1address, LiquidityStakingV1.abi, signer)
            let transaction = await contract.stake('100000000000000000')
            let tx = await transaction.wait()
        }
        else {
            console.log("Please install Metamask")
        }
    }

    return (
        <>
        <div className="shadow-sm p-3 mb-5 bg-body rounded d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-primary btn-lg me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Stake
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Stake/Deposit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="button-addon"/>
                            <button className="btn btn-outline-success btn-sm" type="button" id="button-addon">Max</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={stakeUsdt}>Stake</button>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="btn btn-primary btn-lg me-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Unstake
            </button>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Unstake/Withdraw</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-success btn-sm" type="button" id="button-addon2">Max</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Unstake</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
