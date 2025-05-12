"use client";

import { useState } from "react";
import { SignUpUsernameCard } from "./SignUpUsernameCard";
import { SignUpEmailPasswordCard } from "./SignUpEmailPasswordCard";

export const SignUpPage = () => {
  const [step, setStep] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  if (step === 0) {
    return <SignUpUsernameCard setStep={setStep} setUsername={setUsername} />;
  } else {
    return <SignUpEmailPasswordCard username={username} />;
  }
};
