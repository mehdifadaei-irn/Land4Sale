// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error YouAreOwnerOfThisPlot();

contract Lock is ERC20 {
    address payable private fullAdmin;

    struct plot {
        address owner;
        uint256 price;
    }

    mapping(uint256 => plot) s_plotOf;

    constructor() ERC20("Neshar", "NSHR") {
        fullAdmin = payable(0x6e4E84Ca80362356db324405969d9C84CcbCA23d);
        _mint(msg.sender, 400 ether); // 200 NSHR
        for (uint256 i = 0; i < 126; i++) {
            s_plotOf[i] = plot(fullAdmin, 23 ether); // 5 NSHR
        }
    }

    // function getPlot(uint256 _location) public view returns (plot memory) {
    //     return s_plotOf[_location];
    // }

    function getPlotOwner(uint256 _location) public view returns (address) {
        return s_plotOf[_location].owner;
    }

    function getPlotPrice(uint256 _location) public view returns (uint256) {
        return s_plotOf[_location].price;
    }

    function buyPlot(uint256 _index) public payable {
        if (msg.sender == s_plotOf[_index].owner)
            revert YouAreOwnerOfThisPlot();

        ERC20.transfer(s_plotOf[_index].owner, s_plotOf[_index].price);
        s_plotOf[_index].owner = msg.sender;
    }

    function getAdmin() public view returns (address payable) {
        return fullAdmin;
    }

    // function getUnSalePlots() public view returns (array[] memory) {}
}
