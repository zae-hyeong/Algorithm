function solution(id_list, report, k) {
  const reportRecord = {};
  const reportedRecord = {};
  const numOfRecivedMails = {};

  for (let id of id_list) {
    reportRecord[id] = [];
    reportedRecord[id] = 0;
    numOfRecivedMails[id] = 0;
  }

  let [reporter, respondent] = ["", ""];
  for (let reportCase of report) {
    [reporter, respondent] = reportCase.split(" ");

    if (reportRecord[reporter].indexOf(respondent) === -1) {
      reportRecord[reporter].push(respondent);
      reportedRecord[respondent] += 1;
    }
  }

  // console.log(reportRecord);
  // console.log(reportedRecord);

  let banList = [];
  for (let user of id_list) {
    if (reportedRecord[user] >= k) banList.push(user);
  }
  // console.log(banList);

  for (let reporter of Object.keys(reportRecord)) {
    for (let banedUser of banList) {
      if(reportRecord[reporter].indexOf(banedUser) !== -1) numOfRecivedMails[reporter] += 1;
    }
  }

  return Object.values(numOfRecivedMails);
}

function solution2(id_list, reports, k) {
  const reporterList = {};
  const receivedMails = {};

  for (const id of id_list) {
    reporterList[id] = new Set();
    receivedMails[id] = 0;
  }

  for (const report of reports) {
    const [reporterId, reportedId] = report.split(" ");

    reporterList[reportedId].add(reporterId);
  }

  for (const userId of id_list) {
    if (reporterList[userId].size >= k) {
      for (const u of reporterList[userId]) {
        receivedMails[u] = receivedMails[u] + 1;
      }
    }
  }

  return Object.values(receivedMails);;
}

console.log(solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
)); //[2,1,1,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); //	[0,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 1)); //	[0,1]