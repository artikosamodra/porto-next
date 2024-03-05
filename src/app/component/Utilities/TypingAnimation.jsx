// pages/index.js
"use client";
import { useEffect, useState } from "react";

const texts = ["Teks pertama", "Teks kedua", "Teks ketiga"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

const TypingAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isTyping) {
          if (text.length < texts[textIndex].length) {
            setText((prev) => prev + texts[textIndex].charAt(prev.length));
          } else {
            setIsTyping(false);
            setTimeout(() => setIsTyping(true), newTextDelay);
          }
        } else {
          if (text.length > 0) {
            setText((prev) => prev.slice(0, -1));
          } else {
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isTyping ? typingDelay : erasingDelay
    );

    return () => clearInterval(interval);
  }, [text, textIndex, isTyping]);

  return (
    <div className="mt-20 text-4xl">
      <h1 className="pl-5">Halo{text}</h1> {/* Menetapkan padding kiri */}
    </div>
  );
};

export default TypingAnimation;
