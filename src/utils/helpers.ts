export const smallerString = (
  _string: String,
  firstN = 5,
  lastN = -4,
  numOfDots = 4
): String => {
  const _first = _string.slice(0, firstN);
  const _last = _string.slice(lastN);

  return `${_first}${Array(numOfDots).join(".")}${_last}`;
};

export const buildEtherscanAddresslink = (_tx: String) => {
  return `https://etherscan.io/address/${_tx}`;
};
