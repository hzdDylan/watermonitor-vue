pragma solidity >=0.4.24 < 0.7.0;
 
contract FirstContract {
 
    string public fName;
    uint public age;
    event eventInfo(string fName,uint age);
 
    function setInfo(string memory _fName, uint _age) public  {
        fName = _fName;
        age = _age;
        emit eventInfo(fName,age);
    }
 
    function getInfo() public view returns (string memory, uint) {
        return (fName, age);
    }
}