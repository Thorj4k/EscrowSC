document.addEventListener('DOMContentLoaded', async () => {
  const connectButton = document.getElementById('connectButton');
  const dealDetailsSection = document.getElementById('dealDetails');

  let web3;

  // Function to update the connect button status
  function updateConnectButtonStatus(connected) {
    if (connected) {
      connectButton.textContent = 'Connected';
      connectButton.disabled = true;
    } else {
      connectButton.textContent = 'Connect Wallet';
      connectButton.disabled = false;
    }
  }

  // Function to connect the wallet
  async function connectWallet() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to MetaMask!');
      updateConnectButtonStatus(true); // Update button status to "Connected"
      web3 = new Web3(window.ethereum);
      // Initialize your contract and other functionality here
      dealDetailsSection.style.display = 'block'; // Show the deal details section
    } catch (error) {
      console.error('User denied account access:', error);
      updateConnectButtonStatus(false); // Update button status to "Connect Wallet"
    }
  }

  // Event listener for the Connect Wallet button
  connectButton.addEventListener('click', connectWallet);

  // Example contract address and ABI (replace with your actual contract details)
  const contractAddress = '0xBf354DF06A9b61298F6D7C17647983fc4658F9F1';
  const contractAbi = [
   [
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


  ];

  const escrowContract = new window.web3.eth.Contract(contractAbi, contractAddress);
  let currentDealAddress = '';

  // Helper function to display details including the most recent note
  const displayDealDetails = async () => {
    // ... (your existing code for displaying deal details)
  };

  // Function to connect the wallet (added to the global window object)
  window.connectWallet = async () => {
    // ... (your existing code for connecting the wallet)
  };

  // Create a new deal (added to the global window object)
  window.createDeal = async () => {
    // ... (your existing code for creating a new deal)
  };

  // Deposit funds into the current deal (added to the global window object)
  window.depositFunds = async () => {
    // ... (your existing code for depositing funds)
  };

  // Add a note to the current deal (added to the global window object)
  window.addNote = () => {
    // ... (your existing code for adding a note)
  };

  // Update notes for the current deal (added to the global window object)
  window.updateNotes = async () => {
    // ... (your existing code for updating notes)
  };

  // Additional functions for other actions can be added similarly

  // Example: Retrieve and display details of a specific deal
  currentDealAddress = '0xYourDealAddress'; // Replace with an actual deal address
  displayDealDetails();
});
