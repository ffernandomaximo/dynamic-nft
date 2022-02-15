// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
 
contract MyNFT is ERC721 {
   constructor() ERC721("MyNFT", "MNFT") {
   }
}
