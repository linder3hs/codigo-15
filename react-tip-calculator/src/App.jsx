import { Card, Header, TextField } from "./components";

export default function App() {
  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <h2 className="font-semibold text-green-900">Bill</h2>
        <TextField icon="dollar" placeholder="0.0" name="input-dollar" />
      </Card>
    </main>
  );
}
