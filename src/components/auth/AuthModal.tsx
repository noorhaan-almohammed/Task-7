"use client";

import { useState } from "react";
import ModalContent from "./ModalContent";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "signup";
  switchType: (type: "login" | "signup") => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  type,
  switchType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const isSignup = type === "signup";

  const handleSubmit = () => {
    onClose();
  };

  const handleSwitchType = () => {
    switchType(isSignup ? "login" : "signup");
  };

  return (
    <div className="fixed inset-0 bg-[#333333cc] flex items-center justify-center z-50">
      <ModalContent
        isSignup={isSignup}
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
        handleSubmit={handleSubmit}
        switchType={handleSwitchType}
        onClose={onClose}
      />
    </div>
  );
};

export default AuthModal;
