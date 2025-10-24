export default class ReservationRequest {
  constructor({id, amount, check_in_date, check_out_date, requestDate, requestOverDate}) {
    this.id = id;
    this.amount = amount;
    this.checkInDate = check_in_date;
    this.checkOutDate = check_out_date;
    this.requestDate = requestDate;
    this.requestOverDate = requestOverDate;
  }
}
