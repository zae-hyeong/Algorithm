import * as service from "./Controller/Service.js";
import MinHeap from "./Model/MinHeap.js";

const { day: curDay, problem } = await service.startFirstDay();

// roomState[층][객실][]
// 시나리오 1번
const roomState = Array.from({ length: 5 }, () =>
  Array.from({ length: 25 }, () => Array.from({ length: 205 }))
);
// const roomState = Array.from({length: 12}, () => Array.from({length: 205}, () => Array.from({length: 1005})));

function checkAvailable(resReq) {
  for (let day = resReq.checkInDate; day <= resReq.checkOutDate; day++) {
    
  }
}

const reply = [];

const reservationPQ = new MinHeap();

/** 요청 받고, 적당히 처리하기 */
const reservationRequests = service.getReservations();
for (const resReq of reservationRequests) {
  if (!checkAvailable(resReq)) {
    // 예약 불가능하면 거부 requset arr에 넣기
    reply.push({ reservationRequest: resReq });
  }

  if (resReq.amount >= 3) {
    //TODO: 객실의 40% 이상이면 왼쪽에 바로 넣기

    continue;
  }

  reservationPQ.push(resReq);
}

/** 처리해야하는 요청 확인하기 */
while (reservationPQ.peek().requestOverDate === curDay) {
  resReq = reservationPQ.pop();
  if (!checkAvailable(resReq)) {
    // 예약 불가시, 거부 request arr에 넣기
    reply.push({ resReq });
  }
}
