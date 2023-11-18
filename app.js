document.addEventListener('DOMContentLoaded', async () => {
  // Initialize Web3
  if (typeof window.ethereum !== 'undefined') {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      console.log('Connected to MetaMask!');
    } catch (error) {
      console.error('User denied account access:', error);
    }
  } else {
    console.error('MetaMask not detected. Please install MetaMask to use this DApp.');
  }

  // Contract Address and ABI (Replace with your actual contract details)
  const contractAddress = '0xYourContractAddress';
  const contractAbi = [...]; // Replace with your contract ABI

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
});
