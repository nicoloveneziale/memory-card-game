import "../styles/Card.css";

export default function Card({ img, name, addToClicked }) {
  return (
    <button onClick={() => addToClicked(name)}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </button>
  );
}
