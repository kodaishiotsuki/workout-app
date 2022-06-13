import { Stack } from "@mui/material";
import React from "react";

import Icon from "../assets/icons/gym.png";
export default function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt='dumbbell'
        style={{ width: "140px", height: "140px" }}
      />
    </Stack>
  );
}
