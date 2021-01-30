pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20Detailed.sol"; 

contract WallStreetBetsCoin is ERC20, ERC20Detailed { 
    constructor () public ERC20Detailed("WallStreetBetsCoin", "WSBC", 18) { 
        _mint(msg.sender, 21000000 * (10 ** uint256(decimals()))); 
    }
}