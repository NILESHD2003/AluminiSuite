import { useState } from "react";
import "./App.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";

function App() {
  const [date, setDate] = useState(Date())

  return (
    <>
      <Button>Hello</Button>

    </>
  );
}

export default App;
