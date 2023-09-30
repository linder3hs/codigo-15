import { useState } from "react";
import {
  Card,
  Header,
  ItemPercentage,
  Summary,
  TextField,
  Title,
} from "./components";

export default function App() {
  const [percentages, setPercetanges] = useState([
    {
      value: "5%",
      isActive: false,
    },
    {
      value: "10%",
      isActive: false,
    },
    {
      value: "15%",
      isActive: false,
    },
    {
      value: "25%",
      isActive: false,
    },
    {
      value: "50%",
      isActive: false,
    },
  ]);

  const handlePercatangeActive = (value) => {
    const item = percentages.map((percentage) => {
      return {
        isActive: percentage.value === value,
        value: percentage.value,
      };
    });
    setPercetanges(item);
  };

  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <Title text="Bill" />
        <TextField icon="dollar" placeholder="0.0" name="input-dollar" />
        <Title text="Select Tip %" />
        <div className="grid grid-cols-2 gap-3 mt-3">
          {percentages.map((percentage) => (
            <ItemPercentage
              key={percentage.value}
              value={percentage.value}
              isActive={percentage.isActive}
              onElementClick={handlePercatangeActive}
            />
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
