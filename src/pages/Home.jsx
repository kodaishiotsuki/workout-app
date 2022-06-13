import { Box } from "@mui/material";
import React, { useState } from "react";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

export default function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        exercise={exercise}
      />
    </Box>
  );
}
