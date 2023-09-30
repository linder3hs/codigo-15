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

  const [inputBill, setInputBill] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [inputPeople, setInputPeple] = useState("");
  const [valuePercentage, setValuePercentage] = useState(0);

  const handleMapPercetange = (value) => {
    return percentages.map((percentage) => {
      return {
        isActive: value && !percentage.isActive && percentage.value === value,
        value: percentage.value,
      };
    });
  };

  const handlePercatangeActive = (value) => {
    setPercetanges(handleMapPercetange(value));
    setCustomValue("");
    setValuePercentage(Number(value.replace("%", "")));
  };

  const handleInputOnChange = (event) => {
    setPercetanges(handleMapPercetange());
    setCustomValue(event.target.value);
    setValuePercentage(Number(event.target.value));
  };

  const handleInputBillChange = (event) => setInputBill(event.target.value);

  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <Title text="Bill" />
        <TextField
          icon="dollar"
          placeholder="0.0"
          name="input-dollar"
          value={inputBill}
          onChange={handleInputBillChange}
        />
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
          <TextField
            placeholder="Custom"
            name="input-custom"
            value={customValue}
            onChange={handleInputOnChange}
          />
        </div>
        <Title text="Number of people" />
        <TextField
          icon="person"
          placeholder="0"
          name="input-people"
          value={inputPeople}
        />
        <Summary />
      </Card>
    </main>
  );
}
