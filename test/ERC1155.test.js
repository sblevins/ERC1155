const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("core functionality", () => {
  let acct0, acct1
  let erc1155Contract

  before(async () => {
    [acct0, acct1] = await ethers.getSigners()
    erc1155Factory = await ethers.getContractFactory("ERC1155")
    erc1155Contract = await erc1155Factory.deploy();
  })

  it("balanceOf() with zero balance", async () => {
    const bal = await erc1155Contract.balanceOf(acct0.address, 0)
    expect(bal).to.equal(0)
  })

  it("balanceOf() with nonzero balance", async () => {
    
  })

  it("balanceOfBatch() with zero balances", async () => {
    
  })

  it("balanceOfBatch() with nonzero balances", async () => {
    
  })
  
  it("balanceOfBatch() with zero and nonzero balances", async () => {
    
  })

  it("isApprovedForAll() before setApprovalForAll()", async () => {
    
  })

  it("isApprovedForAll() after setApprovalForAll()", async () => {
    
  })

  it("safeTransferFrom() with approval", async () => {
    
  })

  it("safeTransferFrom() without approval", async () => {
    
  })

  it("safeTransferFrom() should emit event", async () => {

  })

  it("safeBatchTransferFrom() with approval", async () => {
    
  })

  it("safeBatchTransferFrom() without approval", async () => {
    
  })

  it("safeBatchTransferFrom() should emit event", async () => {
    
  })

  it("should support the correct interfaces via the ERC165 standard", async () => {
    //suppoertsInterface()
    // bytes4 private constant _INTERFACE_ID_ERC1155 = 0xd9b67a26;

    // //    bytes4(keccak256('uri(uint256)')) == 0x0e89341c
    // bytes4 private constant _INTERFACE_ID_ERC1155_METADATA_URI = 0x0e89341c;
  })
})