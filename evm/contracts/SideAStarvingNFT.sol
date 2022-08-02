// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./SideBStarvingNFT.sol";
import "./Tap.sol";

contract SideAStarvingNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    event Mint(address to, uint256 tokenId);

    Counters.Counter private _tokenIds;
    SideBStarvingNFT public sideB;
    Tap public tapToken;

    uint constant initialTokenValue = 0.49 ether;

    constructor(Tap _tapToken) ERC721("Starving Children Side A", "STA") {
        tapToken = _tapToken;
    }

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

    function buy(uint id) external {
        require(tapToken.allowance(msg.sender, address(this)) <= initialTokenValue, 'Not enough allowance');
        tapToken.transferFrom(msg.sender, address(this), initialTokenValue);
        super.transferFrom(address(this), msg.sender, id);
    }

    function getAllNftsByAddress(address _address)
        external
        view
        returns (uint[] memory, string[] memory)
    {
        uint totalTokensNum = _tokenIds.current();
        uint nextPostion;

        uint256 addressNftsQnt = countNftsByAddress(_address);
        uint[] memory ids = new uint[](addressNftsQnt);
        string[] memory uris = new string[](addressNftsQnt);

        for (uint i; i < totalTokensNum; i++) {
            if (ownerOf(i) == _address) {
                ids[nextPostion] = i;
                uris[nextPostion] = tokenURI(i);
                nextPostion++;
            }
        }

        return(ids, uris);
    }

    function countNftsByAddress(address _address)
        view
        private
        returns (uint256 count)
    {
        uint256 totalTokensNum = _tokenIds.current();
        for (uint256 i; i < totalTokensNum; i++) {
            if (ownerOf(i) == _address) {
                count++;
            }
        }
    }

    function setSideB(SideBStarvingNFT _sideB) external onlyOwner {
        sideB = _sideB;
    }
}
