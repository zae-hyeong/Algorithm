var isPalindrome = function (s) {
  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

  const str = s.replace(reg, "").split(' ').join('').toLowerCase();
  const reverseStr = Array.from(str).reverse().join('');

  // console.log(str);
  // console.log(reverseStr);
  
  return str === reverseStr;
};


isPalindrome('A man, a plan, a canal: Panama');
isPalindrome('asdf');
isPalindrome('');
isPalindrome('   ');