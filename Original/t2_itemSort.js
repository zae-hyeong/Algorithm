propCode = { SP: 1, KE: 2, MO: 3, CO: 4, DE: 5 };

function solution(items) {
  let itemList = Array.from(new Set(items));

  console.log("#1", itemList);

  itemList = itemList
    .map((v) => v.split("-"))
    .filter((v) => v.length == 2)
    .map((v) => [
      parseInt(v[0]),
      v[1].substring(0, 2),
      parseInt(v[1].substring(2, 4)),
      parseInt(v[1].substring(4)),
    ])
    .filter((v) => {
      if (v[0] < 13 || v[0] > 22) return false;
      if (propCode[v[1]] === undefined) return false;
      if (v[2] < 1 || v[2] > 12) return false;
      if ((v[0] === 13 && v[2] < 4) || (v[0] === 22 && v[2] > 8)) return false;
      if (v[3] < 1 || v[3] > 99) return false;

      return true;
    });

    console.log("#2", itemList);

    itemList = itemList
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return propCode[a[1]] - propCode[b[1]];
      if (a[2] !== b[2]) return a[2] - b[2];
      if (a[3] !== b[3]) return a[3] - b[3];
    });
    itemList = itemList.map(v => {
      let str= "";
      str += v[0];
      str += "-";
      str += v[1];
      str += v[2] < 10 ? "0" + v[2] : v[2];
      str += v[3] < 10 ? "0" + v[3] : v[3];

      return str;
    });

    return itemList;
}

const  inputs = [
  ["20-DE0815", "20-CO1299", "20-MO0901", "20-KE0511", "20-SP1102","21-DE0401", "21-CO0404", "21-MO0794", "21-KE0704", "21-SP0404","19-DE0401", "19-CO0404", "19-MO0794", "19-KE1204", "19-SP0404"],
  ["2-MO0915", "19-MO1299", "17-CO0901", "14-DE0511", "19-KE1102", "13-DE0101", "20-SP0404", "20-CO0794"],
  ["13-DE0401", "13-DE0401", "22-MO0815", "19-MO1299", "17-CO0901", "14-DE0511", "19-KE1102", "20-SP0404", "20-CO0794"]
  [
    "22-MO0815",
    "23-MO0815",
    "13-MO0315",
    "13-MO0315",
    "22-MO815",
    "22MO0815",
    "22-MO08100",
    "22-MN0815"
  ]
];

const outputs = [
  ["19-SP0404", "19-KE1204", "19-MO0794", "19-CO0404", "19-DE0401", "20-SP1102", "20-KE0511", "20-MO0901", "20-CO1299", "20-DE0815", "21-SP0404", "21-KE0704", "21-MO0794", "21-CO0404", "21-DE0401"],
  ["13-DE0401", "14-DE0511", "17-CO0901", "19-KE1102", "19-MO1299", "20-SP0404", "20-CO0794"],
  ["13-DE0401", "14-DE0511", "17-CO0901", "19-KE1102", "19-MO1299", "20-SP0404", "20-CO0794", "22-MO0815"]
  ["22-MO0815"]
];


for (let  i = 0; i < inputs.length; i++) {
  console.log(solution(inputs[i]));
}

// for (let  i = 0; i < inputs.length; i++) {
//   const arr = outputs[i];
//   const result = solution(inputs[i]);

//   if(arr.length !== result.length) console.log('길이 다름');
//   for(let j = 0; j < arr.length; j++) {
//     if(arr[j] !== result[j]) {
//       console.log('다름');
//       break;
//     }
//   }
//   console.log("성공");
// }