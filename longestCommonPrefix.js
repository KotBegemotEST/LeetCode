function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";
  let pref = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(pref) !== 0) {
      pref = pref.slice(0, -1);       
      if (pref === "") return "";      
    }
  }
  return pref;
}
