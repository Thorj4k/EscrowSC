// Function to update the connect button status
function updateConnectButtonStatus(connected) {
  const connectButton = document.getElementById('connectButton');
  if (connected) {
    connectButton.textContent = 'Connected';
    connectButton.disabled = true;
  } else {
    connectButton.textContent = 'Connect Wallet';
    connectButton.disabled = false;
  }
}

// Example contract address and ABI (replace with your actual contract details)
const contractAddress = '0xBf354DF06A9b61298F6D7C17647983fc4658F9F1';
const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			}
		],
		"name": "DealCanceled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalFunds",
				"type": "uint256"
			}
		],
		"name": "DealCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			}
		],
		"name": "DisputeRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "resolved",
				"type": "bool"
			}
		],
		"name": "DisputeResolved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsDeposited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsReleased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			}
		],
		"name": "addFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			},
			{
				"internalType": "enum Escrow.NoteType",
				"name": "noteType",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "note",
				"type": "string"
			}
		],
		"name": "addNote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			}
		],
		"name": "cancelDeal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			}
		],
		"name": "createDeal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "deals",
		"outputs": [
			{
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalFunds",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "remainingFunds",
				"type": "uint256"
			},
			{
				"internalType": "enum Escrow.DealStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			}
		],
		"name": "depositFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			},
			{
				"internalType": "enum Escrow.NoteType",
				"name": "noteType",
				"type": "uint8"
			}
		],
		"name": "getNotes",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			}
		],
		"name": "releaseFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			}
		],
		"name": "requestDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "resolved",
				"type": "bool"
			}
		],
		"name": "resolveDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "setContractOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newFeePercentage",
				"type": "uint256"
			}
		],
		"name": "setFeePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newFeeWallet",
				"type": "address"
			}
		],
		"name": "setFeeWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			}
		],
		"name": "signDeal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dealAddress",
				"type": "address"
			},
			{
				"internalType": "enum Escrow.NoteType",
				"name": "noteType",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "note",
				"type": "string"
			}
		],
		"name": "updateNotes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

; // Replace with your contract ABI

const escrowContract = new window.web3.eth.Contract(contractAbi, contractAddress);
let currentDealAddress = '';

// Helper function to display details including the most recent note
const displayDealDetails = async () => {
  const deal = await escrowContract.methods.deals(currentDealAddress).call();
  document.getElementById('clientAddress').innerText = deal.client;
  document.getElementById('contractorAddressDetails').innerText = deal.contractor;
  document.getElementById('totalFunds').innerText = deal.totalFunds / 1e18;
  document.getElementById('remainingFunds').innerText = deal.remainingFunds / 1e18;
  document.getElementById('dealStatus').innerText = deal.status;

  // Fetch the most recent note
  const mostRecentNote = await escrowContract.methods.getNotes(currentDealAddress, web3.utils.fromAscii('Deal')).call({ from: window.web3.eth.defaultAccount });
  document.getElementById('mostRecentNote').innerText = web3.utils.hexToUtf8(mostRecentNote);
};

// Function to connect the wallet
window.connectWallet = async () => {
  try {
    await window.ethereum.enable();
    console.log('Connected to MetaMask!');
    updateConnectButtonStatus(true); // Update button status to "Connected"
  } catch (error) {
    console.error('User denied account access:', error);
    updateConnectButtonStatus(false); // Update button status to "Connect Wallet"
  }
};

// Create a new deal
window.createDeal = async () => {
  const contractorAddress = document.getElementById('contractorAddress').value;
  await escrowContract.methods.createDeal(contractorAddress).send({ from: window.web3.eth.defaultAccount });
  console.log('Deal created successfully!');
};

// Deposit funds into the current deal
window.depositFunds = async () => {
  const amount = parseFloat(prompt('Enter the amount to deposit (ETH):'));
  await escrowContract.methods.depositFunds(currentDealAddress).send({
    from: window.web3.eth.defaultAccount,
    value: window.web3.utils.toWei(amount.toString(), 'ether')
  });
  console.log('Funds deposited successfully!');
  displayDealDetails();
};

// Add a note to the current deal
window.addNote = () => {
  document.getElementById('dealNotes').style.display = 'block';
};

// Update notes for the current deal
window.updateNotes = async () => {
  const noteType = document.getElementById('noteType').value;
  const note = document.getElementById('note').value;
  await escrowContract.methods.updateNotes(currentDealAddress, web3.utils.fromAscii(noteType), note).send({ from: window.web3.eth.defaultAccount });
  console.log('Notes updated successfully!');
  document.getElementById('dealNotes').style.display = 'none';
};

// Additional functions for other actions can be added similarly

// Example: Retrieve and display details of a specific deal
currentDealAddress = '0xYourDealAddress'; // Replace with an actual deal address
displayDealDetails();
