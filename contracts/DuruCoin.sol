pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract DuruCoin is StandardToken {
  string public name = "DuruCoin";
  string public symbol = "DURU";
  uint public decimals = 32;

  function DuruCoin() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
