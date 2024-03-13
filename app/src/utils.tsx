
function isNumeric(variable: string) {
  return !isNaN(parseFloat(variable));
}
function isBinaryFormat(variable: string) {
  console.log(variable.length);
  for (let i = 0; i < variable.length; i++) {
    if (!(variable.charAt(i) == "1" || variable.charAt(i) == "0")) return false;
  }
  return true;
}
export function convertBinaryToDecimal(variable: string): string {
  if (variable == "") return "";
  if (!isNumeric(variable)) return "INVALID INPUT";
  if (!isBinaryFormat(variable)) return "THAT IS NOT A BINARY NUMBER";
  return String(parseInt(variable, 2));
}
