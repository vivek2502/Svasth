import { StatusBar } from 'expo-status-bar';
import React, { Component, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './block.css';
import Doctor from '../../abi/Doctor.json'
import Web3 from 'web3';

class Block extends React.Component {
    async componentWillMount() {
        console.log("componentWillMount() : component/window gets loaded and calling ")
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        //MetaMask injects a global API into websites visited by its users at window.ethereum 
        console.log("loadWeb3 : MetaMask injecting a global API into websites visited by its users at window.ethereum ")
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        //(Also available at window.web3.currentProvider for legacy reasons)
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {

        
        console.log("loadBlockchainData() : with the help of metamask calling smart contract methods.")
        const web3 = await window.web3

        // Load account from metamask
        const accounts =  await web3.eth.getAccounts()
        console.log("Metamask Account : ", accounts)
        this.setState({ account: accounts[0] })

        // package allows you to interact with an Ethereum node’s network properties. Ganache/Mainet/Testnet
        const networkId =  await web3.eth.net.getId()
        console.log("network id :", networkId)
        //Gives smart contract Address & block address of smart contract
        const networkData = await Doctor.networks[networkId]
        this.setState({ networkData })
        console.log("network Data -> smart contract Address & block address of smart contract :", networkData)
        if (this.state.networkData) {
            //https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html
            //Here we will get object of Smart Contract
            //dvideo allows to interact with smart contracts as if they were JavaScript objects
            const dvideo =await  new web3.eth.Contract(Doctor.abi, this.state.networkData.address)
            console.log('dvideo object of smart contract : ', dvideo)
            this.setState({ dvideo })
            //Will call a “constant” method total no of video uploaded and execute its smart contract method in the EVM without sending any transaction. 
            //Note calling cannot alter the smart contract state.
            const videosCount =  await this.state.dvideo.methods.doctor_count().call()
            console.log("toatal no of video available : ", videosCount)
            this.setState({ videosCount })

            const latest =await dvideo.methods.datas(this.state.videosCount).call()
            console.log("Also saving lastest video details :",latest)
            this.setState({ loading: false })
        } else {
                window.alert('DVideo contract not deployed to detected network.')
        }

    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            dvideo: null,
            videosCount: null,
            networkData:null
            
        }
    }

    render() {
        const handleSubmit = (event) => {
            event.preventDefault();

            const PtAddress = event.target.PtAddress.value;
            const DrName = event.target.DrName.value;
            const PtName = event.target.PtName.value;
            const PtGender = event.target.PtGender.value;
            // const PtAge = event.target.PtAge.value;
            // const PtBlood = event.target.PtBlood.value;
            const Prescription = event.target.Prescription.value;
            console.log(PtAddress);

            if (this.state.networkData) {
                this.state.dvideo.methods.uploadVideo(PtAddress, DrName, PtName, PtGender,Prescription).send({ from: this.state.account }).then(function (receipt) {
                    console.log(receipt)
                    console.log("confirmation : Video Uploaded to blockchain")
                })
                this.setState({ loading: false })
            } else {
                window.alert('DVideo contract not deployed to detected network.')
            }
    

        };
        return (
            <div className="container-block">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label>Patient Address</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="PtAddress" placeholder="Patient Address.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Doctor Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="DrName" placeholder="Doctor name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Patient Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="PtName" placeholder="Patient Name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Patient Gender</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="PtGender" placeholder="Patient Gender.." />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-25">
                            <label>Patient age</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="PtAge" placeholder="Patient Age.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Blood Group</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="PtBlood" placeholder="Patient Blood Group.." />
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-25">
                            <label>Prescription</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" name="Prescription" placeholder="Write something.." />
                        </div>
                    </div>
                    <div className="row">
                        <input type="Submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
};

export default Block;