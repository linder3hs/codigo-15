import {
  Card,
  Header,
  ItemPercentage,
  Summary,
  TextField,
  Title,
} from "./components";

export default function App() {
  const percentages = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <Title text="Bill" />
        <TextField icon="dollar" placeholder="0.0" name="input-dollar" />
        <Title text="Select Tip %" />
        <div className="grid grid-cols-2 gap-3 mt-3">
          {percentages.map((percentage) => (
            <ItemPercentage key={percentage} value={percentage} />
          ))}
          <TextField placeholder="Custom" name="input-custom" />
        </div>
        <Title text="Number of people" />
        <TextField icon="person" placeholder="0" name="input-people" />
        <Summary />
      </Card>
    </main>
  );
}
