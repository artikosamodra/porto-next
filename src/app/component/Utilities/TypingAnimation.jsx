// pages/index.js
"use client";
import { useEffect, useState } from "react";

const typingDelay = 200;
const erasingDelay = 50;
const newTextDelay = 1100;

const TypingAnimation = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isTyping) {
          if (text.length < texts[textIndex].length) {
            setText((prev) => prev + texts[textIndex][prev.length]);
          } else {
            setIsTyping(false);
            setTimeout(() => {
              setIsTyping(true);
            }, newTextDelay);
          }
        } else {
          if (text.length > 0) {
            setText((prev) => prev.slice(0, -1));
          } else {
            const nextIndex = (textIndex + 1) % texts.length;
            setTextIndex(nextIndex);
          }
        }
      },
      isTyping ? typingDelay : erasingDelay
    );

    return () => clearInterval(interval);
  }, [text, textIndex, isTyping, texts]);

  return (
    <div className="text-3xl mt-4">
      <h1 className="">F{text}</h1>
    </div>
  );
};

export default TypingAnimation;
