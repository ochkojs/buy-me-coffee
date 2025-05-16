"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProfileDetailComponents } from "./_component/ProfileDetails";
import { BankCardComponent } from "./_component/BankCard";

export default function ProfilePage() {
  const [step, setStep] = useState<number>(0);

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
            <ProfileDetailComponents setStep={setStep} />
          </motion.div>
        ) : (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <BankCardComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
