const shortenString = (string, numChar) => {
  if (string.length <= numChar) {
    return string;
  } else {
    return string.slice(0, numChar) + '...';
  }
}

export { shortenString }