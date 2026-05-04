"use client";

import { useEffect, useState } from "react";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      case "warning":
        return "alert-warning";
      case "info":
        return "alert-info";
      default:
        return "alert-success";
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 animate-pulse">
      <div className={`alert ${getBgColor()} shadow-lg`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
