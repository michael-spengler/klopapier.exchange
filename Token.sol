// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";

contract CentralBankWipePaper is ERC20 {
    using SafeMath for uint256;
    
    uint256 public gameId;
    uint256 public lastGameId;
    mapping(uint256 => Game) public games;
    
    //declaring 50% chance, (0.5*(uint256+1))
    uint256 constant half = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    struct Game{
      uint256 id;
      uint256 bet;
      uint256 amount;
      address payable player;
     }
    
    event Result(uint256 id, uint256 bet, uint256 amount, address player, uint256 winAmount, uint256 randomResult, uint256 time);

    
    constructor(uint256 initialSupply) public payable ERC20("CentralBankWipePaper", "CBWP") {
        _mint(msg.sender, initialSupply);
    }
    
    function _flushFrom(address fromAddress, uint256 amount) private{
        _burn(fromAddress, amount);
    }
    
    function flush(uint256 amount) public {
        _flushFrom(msg.sender, amount);
    }
    
    function print() public {
        // always print 10% then before
        _mint(msg.sender, totalSupply().div(100).mul(10));
    }
    
    function placeBet(uint256 bet, uint256 amount) public returns (bool) {

      //bet=0 is low, refers to 1-3  dice values
      //bet=1 is high, refers to 4-6 dice values
      require(bet<=1, 'Error, accept only 0 and 1');
    
      //vault balance must be at least equal to msg.value
      //require(address(this).balance >= amount, 'Error, insufficent vault balance');
      flush(amount);
        
      //each bet has unique id
      games[gameId] = Game(gameId, bet, amount, msg.sender);
        
      //increase gameId for the next bet
      gameId = gameId+1;
    
      return true;
    }
    
    function verdict(uint256 random) public {
      //check bets from latest betting round, one by one
      for(uint256 i=lastGameId; i<gameId; i++){
        //reset winAmount for current user
        uint256 winAmount = 0;
      
        //if user wins, then receives 2x of their betting amount
        if((random>=half && games[i].bet==1) || (random<half && games[i].bet==0)){
          winAmount = games[i].amount*2;
          transfer(games[i].player, winAmount);
        }
        emit Result(games[i].id, games[i].bet, games[i].amount, games[i].player, winAmount, random, block.timestamp);
      }
      //save current gameId to lastGameId for the next betting round
      lastGameId = gameId;
  }
}
