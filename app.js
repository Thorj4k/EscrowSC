// Replace these values with your actual contract address and ABI
const contractAddress = '0xBf354DF06A9b61298F6D7C17647983fc4658F9F1';
const contractABI = [
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

;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const escrowContract = new ethers.Contract(contractAddress, contractABI, signer);

// Function to connect the wallet
async function connectWallet() {
  try {
    // Prompt user to connect their wallet
    await window.ethereum.enable();
    console.log('Wallet connected successfully');
  } catch (error) {
    console.error('Error connecting wallet:', error.message);
  }
}

// Call the connectWallet function when the page loads
window.onload = async () => {
  // Check if the user has MetaMask or a compatible wallet installed
  if (window.ethereum) {
    await connectWallet();
  } else {
    console.error('MetaMask or a compatible wallet is not detected');
  }
}

// Function to create a deal (assuming it's not defined in your provided code)
async function createDeal(contractorAddress) {
  try {
    const transaction = await escrowContract.createDeal(contractorAddress);
    await transaction.wait();
    console.log('Deal created successfully');
  } catch (error) {
    console.error('Error creating deal:', error.message);
  }
}

async function addFunds(dealAddress, amount) {
  try {
    const transaction = await escrowContract.addFunds(dealAddress, { value: ethers.utils.parseEther(amount.toString()) });
    await transaction.wait();
    console.log('Funds added successfully');
  } catch (error) {
    console.error('Error adding funds:', error.message);
  }
}

async function signDeal(dealAddress) {
  try {
    const transaction = await escrowContract.signDeal(dealAddress);
    await transaction.wait();
    console.log('Deal signed successfully');
  } catch (error) {
    console.error('Error signing deal:', error.message);
  }
}

async function releaseFunds(dealAddress) {
  try {
    const transaction = await escrowContract.releaseFunds(dealAddress);
    await transaction.wait();
    console.log('Funds released successfully');
  } catch (error) {
    console.error('Error releasing funds:', error.message);
  }
}

async function cancelDeal(dealAddress) {
  try {
    const transaction = await escrowContract.cancelDeal(dealAddress);
    await transaction.wait();
    console.log('Deal canceled successfully');
  } catch (error) {
    console.error('Error canceling deal:', error.message);
  }
}

async function requestDispute(dealAddress) {
  try {
    const transaction = await escrowContract.requestDispute(dealAddress);
    await transaction.wait();
    console.log('Dispute requested successfully');
  } catch (error) {
    console.error('Error requesting dispute:', error.message);
  }
}

async function resolveDispute(dealAddress, resolved) {
  try {
    const transaction = await escrowContract.resolveDispute(dealAddress, resolved);
    await transaction.wait();
    console.log('Dispute resolved successfully');
  } catch (error) {
    console.error('Error resolving dispute:', error.message);
  }
}

// Replace 'YOUR_DEAL_ADDRESS' with the actual deal address
const dealAddress = 'YOUR_DEAL_ADDRESS';

// Examples of function calls
createDeal('ContractorAddress'); // Replace 'ContractorAddress' with the actual contractor address
depositFunds(dealAddress, 1); // Deposit 1 ether to the deal
addFunds(dealAddress, 0.5); // Add 0.5 ether to the deal
signDeal(dealAddress); // Sign the deal
releaseFunds(dealAddress); // Release funds
cancelDeal(dealAddress); // Cancel the deal
requestDispute(dealAddress); // Request dispute
resolveDispute(dealAddress, true); // Resolve dispute (true for resolved, false for not resolved)
