function isAlpha(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 97 || str.charCodeAt() > 122) return false;
  }
  return true;
}

export default isAlpha;