<!DOCTYPE html>
<html>
<head>
    <title>LINKING TO METAMASK</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></script>
    <style>
        body {
            background-color: rgb(219, 141, 24);
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
