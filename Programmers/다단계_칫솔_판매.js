function solution(enroll, referral, seller, amount) {
  const referralHash = {};
  const earnMoney = {};

  for (let i = 0; i < enroll.length; i++) {
    referralHash[enroll[i]] = referral[i];
    earnMoney[enroll[i]] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    const sel = seller[i];
    let ref = referralHash[sel];

    earnMoney[sel] += amount[i] * 90;

    let amt = amount[i] * 10;

    while (amt > 0 && ref !== "-") {
      earnMoney[ref] += amt - Math.floor(amt / 10);
      ref = referralHash[ref];
      amt = Math.floor(amt / 10);
    }
  }

  return enroll.map((v) => earnMoney[v]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary", "tod"],
    [12, 4, 2, 5, 10, 10]
  )
);

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
);
