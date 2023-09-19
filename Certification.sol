// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract CertificateRegistry {
    struct Certificate {
        string name;
        string category;
        string issuedBy;
    }

    mapping(bytes32 => Certificate) public certificates;

    function addCertificate(string memory name, string memory category, string memory issuedBy) public {
        bytes32 certificateId = keccak256(abi.encodePacked(name, category, issuedBy));
        certificates[certificateId] = Certificate(name, category, issuedBy);
    }

}
