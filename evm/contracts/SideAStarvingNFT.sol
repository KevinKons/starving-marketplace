// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./SideBStarvingNFT.sol";

contract SideAStarvingNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    event Mint(address to, uint256 tokenId);

    Counters.Counter private _tokenIds;
    SideBStarvingNFT public sideB;

    constructor() ERC721("Starving Children Side A", "STA") {}

    function mint(
        address to,
        string memory tokenURISideA,
        string calldata tokenURISideB
    ) public onlyOwner returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, tokenURISideA);

        sideB.mint(to, tokenURISideB);

        emit Mint(to, newItemId);
        _tokenIds.increment();
        return newItemId;
    }

    function getAllNftsByOwner(address _owner)
        external
        view
        returns (uint256[] memory ids, string[] memory uris)
    {
        uint nextPostion;
        for (uint256 i; i < _tokenIds.current(); i++) {
            if (ownerOf(i) == _owner) {
                ids[nextPostion] = i;
                uris[nextPostion] = tokenURI(i);
                nextPostion++;
            } 
        }
    }

    function setSideB(SideBStarvingNFT _sideB) external onlyOwner {
        sideB = _sideB;
    }
}
