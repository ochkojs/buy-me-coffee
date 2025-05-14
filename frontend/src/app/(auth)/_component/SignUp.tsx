"use client";

import { useState } from "react";
import { SignUpUsernameCard } from "./SignUpUsernameCard";
import { SignUpEmailPasswordCard } from "./SignUpEmailPasswordCard";
import { AnimatePresence, motion } from "framer-motion";

export const SignUpPage = () => {
  const [step, setStep] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <SignUpUsernameCard setStep={setStep} setUsername={setUsername} />
          </motion.div>
        ) : (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <SignUpEmailPasswordCard username={username} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
