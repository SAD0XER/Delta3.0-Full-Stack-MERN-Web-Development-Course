import TicketNumber from "./TicketNumber";

export default function Ticket({ ticket }) {
  return (
    <div
      style={{
        border: "0.1rem solid white",
      }}>
      <h3 style={{ marginBottom: 0 }}>Ticket Number</h3>
      {ticket.map((number, index) => (
        <TicketNumber number={number} key={index} />
      ))}
    </div>
  );
}
