import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color };

  const [colors, setColors] = useState(["teal", "orange", "blue"]);
  return (
    <div>
      <div className="add-color-form">
        <TextField
          value={color}
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          label="Enter a color"
          variant="standard" />
        <Button onClick={() => setColors([...colors, color])} variant="outlined">
          Add color
        </Button>
      </div>

      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}

      <ColorBox />
    </div>

  );
}
