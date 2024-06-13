/* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
 */
var defangIPaddr = function(address) {
    let repl = address.replaceAll(".","[.]")
    return repl

};
let res = defangIPaddr("255.100.50.0")
console.log(res)
