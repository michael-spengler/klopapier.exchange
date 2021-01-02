pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";

contract CentralBankWipePaper is ERC20 {
    using SafeMath for uint256;
    uint256 public backup;

    constructor(uint256 initialSupply) public payable ERC20("CentralBankWipePaper", "CBWP") {
        require(msg.value > 0, "Backing value needs to be greater than 0");
        backup = msg.value;
        _mint(address(this), initialSupply);
    }
    
    function _flushFrom(address fromAddress, uint256 amount) private{
        _burn(fromAddress, amount);
    }
    
    function _flushAmount(uint256 amount) private {
        _flushFrom(msg.sender, amount);
    }
    
    function _mintAmount(uint256 amount) private {
        _mint(msg.sender, amount);
    }
    
    function buyWipePaper() public payable{
        require(msg.value > 0, "Value needs to be greater than 0");
        require(msg.value < backup, "Value needs to be smaller than the backup");
        
        uint256 value = msg.value;
        //need to multiply by 100 to prevent floating point problems
        uint256 amount = value.mul(100).div(backup).mul(totalSupply()).div(100);
        _mintAmount(amount);
    }
    
    function sellWipePaper(uint256 amount) public payable{
        require(amount <= balanceOf(msg.sender), "Not enough WipePaper in the account");

        //need to multiply by 100 to prevent floating point problems
        uint256 ethAmount = amount.mul(100).div(totalSupply()).mul(backup).div(100);
        msg.sender.transfer(ethAmount);
        _flushAmount(amount);
    }
}
