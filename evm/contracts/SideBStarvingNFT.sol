// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SideBStarvingNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    
    event Minted(address to, uint tokenId);
    
    Counters.Counter private _tokenIds;
    address public sideA;

    constructor(address _sideA) ERC721("Starving Children Side B", "STB") {
        sideA = _sideA;
    }

    function mint(address to, string memory tokenURI) public {
        require(_msgSender() == sideA, "Sender is not side A");

        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit Minted(to, newItemId);
        _tokenIds.increment();
    }
}
