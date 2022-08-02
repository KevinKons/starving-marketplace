// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tap is ERC20("TAP", "TAP"), Ownable {
    uint constant maxSupply = 20000000000;
    uint public currentSupply;

    constructor() {}

    modifier underMaxSupply(uint amount) {
        require(currentSupply < maxSupply, 'Already reached max supply');
        require(amount <= (maxSupply - currentSupply), 'Requested amount is higher than available supply');
        _;
    }

    function mint(address to, uint amount) public onlyOwner underMaxSupply(amount) {
        currentSupply += amount;
        _mint(to, amount);
    }

    function buy(address buyer) payable external underMaxSupply(msg.value / 2) {
        require(msg.value > 0, 'No value received');
        uint taps = msg.value / 2;

        currentSupply += taps;

        _mint(buyer, taps);
    }
}
