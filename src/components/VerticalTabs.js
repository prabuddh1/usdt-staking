import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { liquiditystakingv1address, stakingtokenaddress } from '../config'

import LiquidityStakingV1 from '../artifacts/contracts/liquidity/v1/LiquidityStakingV1.sol/LiquidityStakingV1.json'
import StakingToken from '../artifacts/contracts/liquidity/v1/LiquidityStakingV1.sol/VirtualEquityToken.json'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [stakeAmount, setStakeAmount] = React.useState('');
  const [unstakeAmount, setUnstakeAmount] = React.useState('');

  const handleStakeAmountInputChange = event => {
    setStakeAmount(event.target.value);
  };

  const handleUnstakeAmountInputChange = event => {
    setUnstakeAmount(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const approveUsdt = async () => {
        if(window.ethereum) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(stakingtokenaddress, StakingToken.abi, signer)
        let transaction = await contract.approve(liquiditystakingv1address, ethers.utils.parseUnits(stakeAmount))
        let tx = await transaction.wait()
      }
    else {
        console.log("Please install Metamask")
    }
  }

  const stakeUsdt = async () => {
    if(window.ethereum) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(liquiditystakingv1address, LiquidityStakingV1.abi, signer)
        console.log(ethers.utils.parseUnits(stakeAmount))
        let transaction = await contract.stake(ethers.utils.parseUnits(stakeAmount))
        let tx = await transaction.wait()
      }
    else {
        console.log("Please install Metamask")
    }
  }

  const unstakeUsdt = async () => {
    if(window.ethereum) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(liquiditystakingv1address, LiquidityStakingV1.abi, signer)
        console.log(ethers.utils.parseUnits(unstakeAmount))
        let transaction = await contract.requestWithdrawal(ethers.utils.parseUnits(unstakeAmount))
        let tx = await transaction.wait()
        let transaction2 = await contract.withdrawStake(connection.selectedAddress, ethers.utils.parseUnits(unstakeAmount))
        let tx2 = await transaction2.wait()
      }
    else {
        console.log("Please install Metamask")
    }
  }

  const claimRewards = async () => {
    if(window.ethereum) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(liquiditystakingv1address, LiquidityStakingV1.abi, signer)
        let transaction = await contract.claimRewards(connection.selectedAddress)
        let tx = await transaction.wait()
      }
    else {
        console.log("Please install Metamask")
    }
  }
  
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.dark', display: 'flex', height: 150 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Stake" {...a11yProps(0)} />
        <Tab label="Unstake" {...a11yProps(1)} />
        <Tab label="Claim" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TextField value={stakeAmount} onChange={handleStakeAmountInputChange} sx={{ input: { color: 'white' } }} id="outlined-basic" label="Amount to Stake" variant="outlined" InputProps={{ endAdornment: <Button variant="text">Max</Button> }} InputLabelProps={{sx: {color: "white",}}} />
        <Box component='img' src='logoUSDT.png'
          sx={{
            width: 35,
            height: 35,
            margin: 1,
          }}
        />
        <div className='my-2'>
          <Button className ="me-2" variant="contained" onClick={approveUsdt}>Approve</Button>
          <Button variant="contained" onClick={stakeUsdt}>Stake</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField value={unstakeAmount} onChange={handleUnstakeAmountInputChange} sx={{ input: { color: 'white' } }} id="outlined-basic" label="Amount to Unstake" variant="outlined" InputProps={{ endAdornment: <Button variant="text">Max</Button> }} InputLabelProps={{sx: {color: "white",}}}/>
        <Box component='img' src='logoUSDT.png'
          sx={{
            width: 35,
            height: 35,
            margin: 1,
          }}
        />
        <div className='my-2'>
          <Button variant="contained" onClick={unstakeUsdt}>Unstake</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <TextField sx={{ input: { color: 'white' } }} id="outlined-basic" label="Amount to Claim" variant="outlined" InputProps={{ endAdornment: <Button variant="text">Max</Button> }} InputLabelProps={{sx: {color: "white",}}}/>
        <Box component='img' src='logoFX.png'
          sx={{
            width: 35,
            height: 35,
            margin: 1,
          }}
        /> */}
        <div className='my-2'>
          <Button variant="contained" onClick={claimRewards}>Claim</Button>
        </div>
      </TabPanel>
    </Box>
  );
}
