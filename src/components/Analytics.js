import React from 'react'

export default function Analytics() {
  return (
      <>
        <div className="row shadow-sm p-3 mb-5 bg-body rounded">
        <div className="col-sm-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title opacity-50">Staked</h5>
                <h2>{Math.round(((Math.random() * (100) + 1) + Number.EPSILON) * 100) / 100 + " USDT"}</h2>
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
                <h2>{Math.round(((Math.random() * (100) + 1) + Number.EPSILON) * 100) / 100 + " %"}</h2>
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
