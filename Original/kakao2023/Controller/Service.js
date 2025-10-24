import * as API from "./API.js";
import Reservation from "../Model/ReservationRequest.js";

async function startFirstDay() {
  const res = await API.startAPI();
  return { problem: res.problem, day: res.day };
}

async function getReservations(curDate) {
  const res = await API.newRequestsAPI();

  const reservations = res.reservations_info;
  reservations.map(
    (v) =>
      new Reservation({
        ...v,
        requestDate: curDate,
        requestOverDate: min(curDate + 14, v.check_in_date - 1),
      })
  );

  return reservations;
}

/**
 * 
 * @param {Object[]} replys 
 * @returns {number} day
 */
async function sendReservationReply(replys) {



  const res = await API.newRequestsAPI();

  const reservations = res.reservations_info;
  reservations.map(
    (v) =>
      new Reservation({
        ...v,
        requestDate: curDate,
        requestOverDate: min(curDate + 14, v.check_in_date - 1),
      })
  );

  return reservations;
}

export { startFirstDay, getReservations, sendReservationReply };
