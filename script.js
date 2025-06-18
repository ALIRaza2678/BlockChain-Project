 // Contract configuration
        const CONTRACT_ADDRESS = "0xdf0473dd91432aa5ab98dbde9f3fe5e03da7ef49"; // Replace with your deployed contract address
        const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_reason",
				"type": "string"
			}
		],
		"name": "cancelLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributeFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_commitment",
				"type": "bytes32"
			}
		],
		"name": "enterLottery",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EntrySubmitted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winnerAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "platformFee",
				"type": "uint256"
			}
		],
		"name": "FundsDistributed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "LotteryCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "entryFee",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "entryDeadline",
				"type": "uint256"
			}
		],
		"name": "LotteryStarted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RefundIssued",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_roundId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_participant",
				"type": "address"
			}
		],
		"name": "refundParticipant",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_secret",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_nonce",
				"type": "uint256"
			}
		],
		"name": "revealSecret",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "secret",
				"type": "uint256"
			}
		],
		"name": "SecretRevealed",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "selectWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_entryFee",
				"type": "uint256"
			}
		],
		"name": "startNewLottery",
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
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WinnerSelected",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdrawPlatformFees",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "currentRoundId",
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
		"name": "ENTRY_DURATION",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lotteryRounds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalPot",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "entryFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "entryDeadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "revealDeadline",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "winner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "winningAmount",
				"type": "uint256"
			},
			{
				"internalType": "enum DecentralizedLottery.LotteryState",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "participantCount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "fundsDistributed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_ENTRY_FEE",
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
		"name": "MIN_ENTRY_FEE",
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
		"name": "owner",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "entryAmount",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "commitment",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "revealedSecret",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "hasRevealed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "entryTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PLATFORM_FEE_PERCENT",
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
		"name": "platformBalance",
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
		"name": "REVEAL_DURATION",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "revealedSecrets",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "roundParticipants",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

        // Global variables
        let provider;
        let signer;
        let contract;
        let userAddress;
        let isOwner = false;
        let countdownInterval;

        // Lottery states
        const LOTTERY_STATES = {
            0: { name: "ACCEPTING_ENTRIES", class: "status-accepting" },
            1: { name: "REVEALING_PHASE", class: "status-revealing" },
            2: { name: "SELECTING_WINNER", class: "status-selecting" },
            3: { name: "COMPLETED", class: "status-completed" },
            4: { name: "CANCELLED", class: "status-cancelled" }
        };

        // Connect wallet
        async function connectWallet() {
            try {
                if (typeof window.ethereum === 'undefined') {
                    showAlert('Please install MetaMask!', 'danger');
                    return;
                }

                await window.ethereum.request({ method: 'eth_requestAccounts' });
                provider = new ethers.providers.Web3Provider(window.ethereum);
                signer = provider.getSigner();
                userAddress = await signer.getAddress();
                
                // Initialize contract
                contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

                // Update UI
                document.getElementById('wallet-disconnected').classList.add('hidden');
                document.getElementById('wallet-connected').classList.remove('hidden');
                document.getElementById('wallet-address').textContent = userAddress.slice(0, 6) + '...' + userAddress.slice(-4);

                // Get balance
                const balance = await provider.getBalance(userAddress);
                document.getElementById('wallet-balance').textContent = ethers.utils.formatEther(balance);

                // Check if user is owner
                try {
                    const owner = await contract.owner();
                    isOwner = owner.toLowerCase() === userAddress.toLowerCase();
                    if (isOwner) {
                        document.getElementById('owner-controls').classList.remove('hidden');
                    }
                } catch (error) {
                    console.error('Error checking owner:', error);
                }

                showAlert('Wallet connected successfully!', 'success');
                await refreshLotteryInfo();

                // Listen for account changes
                window.ethereum.on('accountsChanged', (accounts) => {
                    if (accounts.length === 0) {
                        location.reload();
                    } else {
                        location.reload();
                    }
                });

            } catch (error) {
                console.error('Error connecting wallet:', error);
                showAlert('Error connecting wallet: ' + error.message, 'danger');
            }
        }

        // Show alert messages
        function showAlert(message, type) {
            const alertContainer = document.getElementById('alert-container');
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type}`;
            alertDiv.textContent = message;
            alertContainer.appendChild(alertDiv);

            setTimeout(() => {
                alertDiv.remove();
            }, 5000);
        }

        // Generate commitment hash
        function generateCommitment() {
            const secret = document.getElementById('secret-number').value;
            const nonce = document.getElementById('nonce').value;

            if (!secret || !nonce) {
                showAlert('Please enter both secret number and nonce', 'warning');
                return;
            }

            const commitment = ethers.utils.keccak256(
                ethers.utils.defaultAbiCoder.encode(['uint256', 'uint256'], [secret, nonce])
            );

            document.getElementById('commitment-hash').textContent = commitment;
            document.getElementById('commitment-display').classList.remove('hidden');
            document.getElementById('enter-lottery-btn').disabled = false;

            showAlert('Commitment generated! Save your secret and nonce safely.', 'success');
        }

        // Start new lottery (owner only)
        async function startNewLottery() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            const entryFee = document.getElementById('entry-fee').value;
            if (!entryFee || entryFee < 0.001 || entryFee > 10) {
                showAlert('Entry fee must be between 0.001 and 10 ETH', 'warning');
                return;
            }

            try {
                const tx = await contract.startNewLottery(ethers.utils.parseEther(entryFee));
                showAlert('Starting new lottery...', 'info');
                await tx.wait();
                showAlert('New lottery started successfully!', 'success');
                await refreshLotteryInfo();
            } catch (error) {
                console.error('Error starting lottery:', error);
                showAlert('Error starting lottery: ' + error.message, 'danger');
            }
        }

        // Enter lottery
        async function enterLottery() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            const commitment = document.getElementById('commitment-hash').textContent;
            if (!commitment) {
                showAlert('Please generate commitment first', 'warning');
                return;
            }

            try {
                const currentRound = await contract.currentRoundId();
                const roundInfo = await contract.lotteryRounds(currentRound);
                const entryFee = roundInfo.entryFee;

                const tx = await contract.enterLottery(commitment, { value: entryFee });
                showAlert('Entering lottery...', 'info');
                await tx.wait();
                showAlert('Successfully entered the lottery!', 'success');
                await refreshLotteryInfo();
            } catch (error) {
                console.error('Error entering lottery:', error);
                showAlert('Error entering lottery: ' + error.message, 'danger');
            }
        }

        // Reveal secret
        async function revealSecret() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            const secret = document.getElementById('reveal-secret').value;
            const nonce = document.getElementById('reveal-nonce').value;

            if (!secret || !nonce) {
                showAlert('Please enter both secret and nonce', 'warning');
                return;
            }

            try {
                // First check if we need to trigger state transition
                const currentRound = await contract.currentRoundId();
                const roundInfo = await contract.lotteryRounds(currentRound);
                const now = Math.floor(Date.now() / 1000);

                // If entry period has ended but still in ACCEPTING_ENTRIES state, trigger transition
                if (roundInfo.state === 0 && now > roundInfo.entryDeadline.toNumber()) {
                    showAlert('Entry period ended. Triggering state transition...', 'info');
                    // Call revealSecret which will trigger the state transition in the contract
                }

                const tx = await contract.revealSecret(secret, nonce);
                showAlert('Revealing secret...', 'info');
                await tx.wait();
                showAlert('Secret revealed successfully!', 'success');
                await refreshLotteryInfo();
            } catch (error) {
                console.error('Error revealing secret:', error);
                
                // Check if the error is due to state transition needed
                if (error.message.includes('Not in reveal phase')) {
                    showAlert('Entry period just ended. Please try again in a few seconds or call "Select Winner" to advance the lottery state.', 'warning');
                } else {
                    showAlert('Error revealing secret: ' + error.message, 'danger');
                }
            }
        }

        // Select winner
        async function selectWinner() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            try {
                // Check current state and provide helpful message
                const currentRound = await contract.currentRoundId();
                const roundInfo = await contract.lotteryRounds(currentRound);
                const now = Math.floor(Date.now() / 1000);

                if (roundInfo.state === 0 && now > roundInfo.entryDeadline.toNumber()) {
                    showAlert('Advancing lottery to reveal phase and then selecting winner...', 'info');
                } else if (roundInfo.state === 1 && now > roundInfo.revealDeadline.toNumber()) {
                    showAlert('Reveal phase ended. Selecting winner...', 'info');
                } else if (roundInfo.state === 2) {
                    showAlert('Selecting winner...', 'info');
                } else {
                    showAlert('Cannot select winner yet. Check the lottery phase and timing.', 'warning');
                    return;
                }

                const tx = await contract.selectWinner();
                await tx.wait();
                showAlert('Winner selected successfully!', 'success');
                await refreshLotteryInfo();
            } catch (error) {
                console.error('Error selecting winner:', error);
                
                if (error.message.includes('Cannot select winner yet')) {
                    showAlert('Cannot select winner yet. Wait for the appropriate phase.', 'warning');
                } else if (error.message.includes('No participants')) {
                    showAlert('No participants in the lottery yet.', 'warning');
                } else if (error.message.includes('No valid participants')) {
                    showAlert('No valid participants (no one revealed their secret).', 'warning');
                } else {
                    showAlert('Error selecting winner: ' + error.message, 'danger');
                }
            }
        }

        // Distribute funds
        async function distributeFunds() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            try {
                const tx = await contract.distributeFunds();
                showAlert('Distributing funds...', 'info');
                await tx.wait();
                showAlert('Funds distributed successfully!', 'success');
                await refreshLotteryInfo();
            } catch (error) {
                console.error('Error distributing funds:', error);
                showAlert('Error distributing funds: ' + error.message, 'danger');
            }
        }

        // Cancel lottery (owner only)
        async function cancelLottery() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            const reason = prompt("Enter cancellation reason:");
            if (!reason) return;

            try {
                const tx = await contract.cancelLottery(reason);
                showAlert('Cancelling lottery...', 'info');
                await tx.wait();
                showAlert('Lottery cancelled successfully!', 'success');
                await refreshLotteryInfo();
            } catch (error) {
                console.error('Error cancelling lottery:', error);
                showAlert('Error cancelling lottery: ' + error.message, 'danger');
            }
        }

        // Withdraw platform fees (owner only)
        async function withdrawPlatformFees() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            try {
                const tx = await contract.withdrawPlatformFees();
                showAlert('Withdrawing platform fees...', 'info');
                await tx.wait();
                showAlert('Platform fees withdrawn successfully!', 'success');
            } catch (error) {
                console.error('Error withdrawing fees:', error);
                showAlert('Error withdrawing fees: ' + error.message, 'danger');
            }
        }

        // Pause contract (owner only)
        async function pauseContract() {
            if (!contract) {
                showAlert('Please connect your wallet first', 'warning');
                return;
            }

            try {
                const tx = await contract.pause();
                showAlert('Pausing contract...', 'info');
                await tx.wait();
                showAlert('Contract paused successfully!', 'success');
            } catch (error) {
                console.error('Error pausing contract:', error);
                showAlert('Error pausing contract: ' + error.message, 'danger');
            }
        }

        // Refresh lottery information
        async function refreshLotteryInfo() {
            if (!contract) return;

            try {
                const currentRound = await contract.currentRoundId();
                document.getElementById('current-round').textContent = currentRound.toString();

                if (currentRound.gt(0)) {
                    const roundInfo = await contract.lotteryRounds(currentRound);
                    
                    // Update lottery info
                    document.getElementById('entry-fee-display').textContent = ethers.utils.formatEther(roundInfo.entryFee) + ' ETH';
                    document.getElementById('total-pot').textContent = ethers.utils.formatEther(roundInfo.totalPot) + ' ETH';
                    document.getElementById('participant-count').textContent = roundInfo.participantCount.toString();

                    // Update status
                    const state = LOTTERY_STATES[roundInfo.state];
                    document.getElementById('lottery-status').innerHTML = `<span class="status-badge ${state.class}">${state.name}</span>`;

                    // Update countdown
                    updateCountdown(roundInfo);

                    // Auto-refresh more frequently when near phase transitions
                    const now = Math.floor(Date.now() / 1000);
                    const nearEntryDeadline = Math.abs(now - roundInfo.entryDeadline.toNumber()) < 30;
                    const nearRevealDeadline = Math.abs(now - roundInfo.revealDeadline.toNumber()) < 30;
                    
                    if (nearEntryDeadline || nearRevealDeadline) {
                        // Refresh more frequently when near deadlines
                        setTimeout(() => {
                            if (contract) refreshLotteryInfo();
                        }, 5000);
                    }

                    // Show winner if completed
                    if (roundInfo.state === 3 && roundInfo.winner !== ethers.constants.AddressZero) {
                        document.getElementById('winner-announcement').classList.remove('hidden');
                        document.getElementById('winner-address').textContent = roundInfo.winner;
                        document.getElementById('winner-amount').textContent = ethers.utils.formatEther(roundInfo.winningAmount);
                    } else {
                        document.getElementById('winner-announcement').classList.add('hidden');
                    }
                } else {
                    document.getElementById('lottery-status').innerHTML = '<span class="status-badge">No Active Lottery</span>';
                    document.getElementById('time-remaining').textContent = 'N/A';
                }

            } catch (error) {
                console.error('Error refreshing lottery info:', error);
            }
        }

        // Update countdown timer
        function updateCountdown(roundInfo) {
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }

            countdownInterval = setInterval(() => {
                const now = Math.floor(Date.now() / 1000);
                let deadline;
                let phase;

                if (roundInfo.state === 0) { // ACCEPTING_ENTRIES
                    deadline = roundInfo.entryDeadline.toNumber();
                    phase = "Entry deadline";
                } else if (roundInfo.state === 1) { // REVEALING_PHASE
                    deadline = roundInfo.revealDeadline.toNumber();
                    phase = "Reveal deadline";
                } else {
                    document.getElementById('time-remaining').textContent = 'N/A';
                    clearInterval(countdownInterval);
                    return;
                }

                const timeLeft = deadline - now;
                if (timeLeft > 0) {
                    const minutes = Math.floor(timeLeft / 60);
                    const seconds = timeLeft % 60;
                    
                    // Show format appropriate for the time duration
                    if (timeLeft >= 3600) { // If more than 1 hour, show hours
                        const hours = Math.floor(timeLeft / 3600);
                        document.getElementById('time-remaining').textContent = 
                            `${hours}h ${minutes % 60}m ${seconds}s`;
                    } else {
                        document.getElementById('time-remaining').textContent = 
                            `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
                    }
                } else {
                    document.getElementById('time-remaining').textContent = 'Expired';
                    clearInterval(countdownInterval);
                    refreshLotteryInfo(); // Refresh to update state
                }
            }, 1000);
        }

        // Initialize app
        window.addEventListener('load', async () => {
            // Check if wallet is already connected
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        await connectWallet();
                    }
                } catch (error) {
                    console.error('Error checking wallet connection:', error);
                }
            }

            // Refresh lottery info every 30 seconds
            setInterval(() => {
                if (contract) {
                    refreshLotteryInfo();
                }
            }, 30000);
        });

        // Event listeners for contract events
        function setupEventListeners() {
            if (!contract) return;

            contract.on("LotteryStarted", (roundId, entryFee, entryDeadline) => {
                showAlert(`New lottery started! Round ${roundId.toString()}`, 'success');
                refreshLotteryInfo();
            });

            contract.on("EntrySubmitted", (roundId, participant, amount) => {
                if (participant.toLowerCase() === userAddress.toLowerCase()) {
                    showAlert('Your entry has been confirmed!', 'success');
                }
                refreshLotteryInfo();
            });

            contract.on("SecretRevealed", (roundId, participant, secret) => {
                if (participant.toLowerCase() === userAddress.toLowerCase()) {
                    showAlert('Your secret has been revealed!', 'success');
                }
                refreshLotteryInfo();
            });

            contract.on("WinnerSelected", (roundId, winner, amount) => {
                showAlert(`Winner selected for Round ${roundId.toString()}!`, 'success');
                if (winner.toLowerCase() === userAddress.toLowerCase()) {
                    showAlert('🎉 Congratulations! You won the lottery!', 'success');
                }
                refreshLotteryInfo();
            });

            contract.on("FundsDistributed", (roundId, winner, winnerAmount, platformFee) => {
                showAlert(`Funds distributed for Round ${roundId.toString()}!`, 'success');
                refreshLotteryInfo();
            });
        }

        // Call setupEventListeners after contract is initialized
        // Add this to the connectWallet function after contract initialization
        // setupEventListeners();