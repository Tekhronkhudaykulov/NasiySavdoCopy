import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10000000;
const minValue = 3000;
const maxValue = 54500000;

export default function PriceSlider() {
  const [value1, setValue1] = React.useState<number[]>([minValue, maxValue]);

  const handleChange1 = (
    _: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={minValue}
        max={maxValue}
        step={10000}
        sx={{
          color: "white", // Green color for the slider
          "& .MuiSlider-thumb": {
            border: "2px solid #03A5A5", // Green border for the thumb
          },
          "& .MuiSlider-track": {
            border: "2px solid #03A5A5", // Green border for the track
          },
        }}
      />
    </Box>
  );
}
