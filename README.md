This contract is a correct implementation of an ERC1155 token.
It is mostly copied from @openzeppelin's implementation, but with
slight modifications to URI related items. Firstly, this implementation
allows querying different URI's for specific tokenIds, Openzeppelin only
allowed a single stored URI. Secondly, this implementation emits an
event whenever a URI is updated. For some reason Openzeppelin left
this functionality out of there implementation entirely, even though the
EIP defining the token standard clearly states that changing the URI MUST
emit the URI() event.

<3 Belvis