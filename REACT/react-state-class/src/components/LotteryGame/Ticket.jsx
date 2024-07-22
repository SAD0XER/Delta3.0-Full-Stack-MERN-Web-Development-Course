import TicketNumber from "./TicketNumber";

export default function Ticket({ ticket }) {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}>
      <h3 style={{ margin: 0 }}>Ticket Number</h3>
      {ticket.map((number, index) => (
        <TicketNumber number={number} key={index} />
      ))}
    </div>
  );
}
