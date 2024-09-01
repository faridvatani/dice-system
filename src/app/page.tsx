"use client";
import { Dice, rollDices, RollResult } from "@/utils/utils";
import { useState } from "react";

export default function Home() {
  const [dice, setDice] = useState<Dice>({ sides: 6, quantity: 1 });
  const [result, setResult] = useState<RollResult | null>(null);

  const handleRoll = () => {
    setResult(rollDices(dice));
  };

  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Roll the dice</h1>
      <div className="mb-4">
        <label
          htmlFor="dice"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Number of sides
        </label>
        <input
          type="number"
          id="dice"
          className="border border-gray-300 p-2 rounded w-full"
          value={dice.sides}
          onChange={(e) =>
            setDice({ ...dice, sides: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="border border-gray-300 p-2 rounded w-full"
          value={dice.quantity}
          onChange={(e) =>
            setDice({ ...dice, quantity: parseInt(e.target.value) })
          }
        />
      </div>
      <button
        onClick={handleRoll}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Roll
      </button>
      {result && <p className="mt-4">Result: {result.total}</p>}
      {result && (
        <ul className="mt-4">
          {result.rolls.map((roll, index) => (
            <li key={index}>{roll}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
