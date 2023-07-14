# SmartContractManagement_Module2

This is a simple project that uses the Solidity programming to built the Smart Contract, and uses the Express.js to connect the MetaMask wallet to Smart Contract and lastly uses the HTML and JavaScript to built the front end. This project is created so that a front end is built which is connected to the user's MetaMask wallet.

# Getting Start

To built this project we have to follow the following steps:
  1. First, we have to install the Ganache which will help to retrieve the ABI and address of the transaction.
  2. Next, we have to frequectly check whether the web server is properly running in the system or not. This can be checked by performing "node server.js" command in the cmd.
  3. Also, we have to access the web application by opening the web browser and navigating to `http://localhost:1725` or any other specified port number.

## Description

To gasp this project, first we have to create a file in our pc and then open the cmd using the file location. Now, in cmd type "install express --save" to install the express package . Then start by creating the server.js, index.html, and simple.sol file one by one. Inside the server.js file the code to connect MetaMask to the smart conttract is written, inside the simple.sol the smart contract project is written and inside the index.html file the code fpr front end is written.

## Server.js

    //Expree framework in JavaScript
    const express = require("express");
    const path = require("path");
    const app = express();
    
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/index.html"));
    })
    
    const server = app.listen(1725);
    const portNumber = server.address().port;
    console.log(`port is running on ${portNumber}`);

Here, first the two modules "Express" and "Path" are imported which will help in creating the web server and handling the file path. Next, the route of the root URL is defined using "/" and also used the get method. After that, the res.sendFile() is used to send the index.html file as a response. Also, path.join() method is used to to construct the correct file path by combining the current directory using the file name. After that, a server is created which wull call by app.listen() metho, which will listen on port 1725 whenever a request is made. Next, thesctual port number is retrieve which is assigned to the server using server.address().port and store it in a variable called portNumber. Lastly, the message is print to the console which is indicating that the port is running. 

## Simple.sol

    //SPDX-License-Identifier: MIT
    
    pragma solidity >=0.8.7;
    
    contract Simple {
        
        string public myLord = "Kahna";
    
    }

This is the simple solidity code in which is contract is made called "Simple". Inside the contract, the string type public variable is created called "myLord" which is give a value "Kahna". This is my simple contract and the data inside it will be read by my page.

## index.js

    <!DOCTYPE html>
    <html>
    <head>
        <title>LINKING TO METAMASK</title>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></script>
        <style>
            body {
                background-color: rgb(219, 96, 24);
                font-size: 33px;
                text-align: center;
            }
            button {
                background-color: rgb(108, 223, 63);
                font-size: 33px;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', 'cursive';
            }
            button:hover {
                background-color: rgb(41, 194, 199);
            }
        </style>
    </head>
    <body>
    	<button onclick="connectMetamask()">LINK TO METAMASK</button> <br>
    	<p id="accountArea"></p>
    	<button onclick="connectContract()">CONNECT TO MY CONTRACT</button> <br>
    	<p id="contractArea"></p>
    	<button onclick="readContract()">READ DATA FROM CONTRACT</button> <br>
    	<p id="dataArea"></p>
    
    
        <script>
            //1- connect metamask
            let account;
            const connectMetamask = async () => {
                if(window.ethereum !== "undefined") {
                    const accounts = await ethereum.request({method: "eth_requestAccounts"});
                    account = accounts[0];
                    document.getElementById("accountArea").innerHTML = account;
                }
            }
    
            //2- connect to smart contract
            const connectContract = async () => {
                const ABI = [
                    {
                        "inputs": [],
                        "name": "myLord",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ];
                const Address = "0x884435e2Bc192eC65005726Ba559DCc190280747";
                window.web3 = await new Web3(window.ethereum);
                window.contract = await new window.web3.eth.Contract( ABI, Address); 
                document.getElementById("contractArea").innerHTML = "connected to smart contract";
            }
    
            //3-read data from smart contract
            const readContract = async () => {
                const data = await window.contract.methods.myLord().call();
                document.getElementById("dataArea").innerHTML = data;
            }
        </script>
    </body>
    </html>

This is my front end code. It uses the HTML and JavaScript. The code is start by the usual HTML structure that include the title element. Next, we have a script tag that includes the external JavaScript file. It also includes the web3 libraries from CDN. It have the CSS block that defines the appearance of the page. The background color, fond and allignment all are adjusted. The button element also have some specific style, including background color and chages on hover. The bode of the page have three buttons and three paragraph elements, all with a unique ID. The JavaScript code has start by defining the variable call account which will help to store the user's Etheruem account address. The first JavaScript function "connectMetamask" is triggered when the "LINK TO METAMASK"button is clicked. It checks if the MetaMask extension is installed in the user's browser and then requests permission to access the user's Ethereum accounts. If permission is granted, it retrieves the first account from the accounts array and displays it in the "accountArea" paragraph element.The second JavaScript function, "connectContract," is triggered when the "CONNECT TO MY CONTRACT" button is clicked. It defines the contract's ABI and address. Then, it creates an instance of the web3 library and a contract instance using the ABI and address. Finally, it displays a message in the "contractArea" paragraph element to indicate a successful connection to the smart contract.The third JavaScript function, "readContract," is triggered when the "READ DATA FROM CONTRACT" button is clicked. It calls the "myLord" function of the smart contract using the contract instance and retrieves the returned data. Finally, it displays the data in the "dataArea" paragraph element.

## License

This project is licensed under the MIT License.
