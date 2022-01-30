// SPDX-License-Identifier: SimPL-2.0
pragma solidity >=0.4.24 < 0.7.0;
contract SewageTreat{
    address[16] public TreatmentA;  //TreatmentA指监管人
    address[16] public TreatmentB;  //TreatmentB指污水处理机构
    uint pollutionNumber;
    uint pollutionDegree;
    
    function writePollutionNumber(uint number) public {
        pollutionNumber = number;
    }
    
    function setPollutionDegree() public{
        // switch(calldataload(4)){
        //     case 0 {
        //         x := calldataload(0x24)
        //     }
        //     default {
        //         x := calldataload(0x44)
        //     }
        // }
        if(pollutionNumber>300){
            pollutionDegree = 3;
        }
        else if(pollutionNumber>200){
            pollutionDegree = 2;
        }
        else if(pollutionNumber>100){
            pollutionDegree = 1;
        }
        else pollutionDegree = 0;
    }
    
    function callbackNumber() view public returns (uint){
        return pollutionNumber;
    }
    
    function callbackDegree() view public returns (uint){
        return pollutionDegree;
    }
}