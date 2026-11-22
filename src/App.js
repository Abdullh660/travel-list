const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 FAR AWAY 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
      <select>{Array.from({ length: 20 })}</select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}

function PackingList() {
  return <div className="list"></div>;
}

function Stats() {
  return (
    <footer>
      <em>You have x item for your trip, and you already packed x (x%)</em>
    </footer>
  );
}
