//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract GetSortedBalances {

    mapping(address => uint256) public balances;
    address[] addresses;

    function getBalanceCount() public view returns (uint256) {
        return addresses.length;
    }

    function setAddressBalance(address _address, uint256 _balance) public {
        
      balances[_address] = _balance;
      addresses.push(_address);

    }

    function getSortedAddresses() public view returns(address[] memory){
        return addresses;
    }

    function sortAddresses() public returns(address[] memory){
    
        for(uint i = 0; i < addresses.length-1; i++){
            for(uint j = 0; j < addresses.length-1; j++){
                if(balances[addresses[j]] < balances[addresses[j+1]]){
                    address tempAddress = addresses[j];
                    addresses[j] = addresses[j+1];
                    addresses[j+1] = tempAddress;
                }
            }
        }

        return addresses;
    }

}
