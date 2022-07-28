// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./SideBStarvingNFT.sol";

contract SideAStarvingNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    event Minted(address to, uint tokenId);
    
    Counters.Counter private _tokenIds;
    SideBStarvingNFT public sideB;

    constructor() ERC721("Starving Children Side A", "STA") {}

    function mint(address to, string memory tokenURISideA, string calldata tokenURISideB)
        public
        onlyOwner
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, tokenURISideA);

        sideB.mint(to, tokenURISideB);

        emit Minted(to, newItemId);
        _tokenIds.increment();
        return newItemId;
    }

    function setSideB(SideBStarvingNFT _sideB) 
        external 
        onlyOwner
    {
        sideB = _sideB;
    }
}
