import React, { useEffect, useState } from "react";

interface EmojiStyle {
  emoji: string;
  left: string;
  top: string;
  animationDuration: string;
  delay: string;
  fontSize: string;
}

interface FloatingEmojisProps {
  numberOfParticles?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({
  numberOfParticles = window.innerWidth / 40,
}) => {
  console.log("numberOfParticles", numberOfParticles);
  const emojis = ["🍔", "🍕", "🍣", "🥗", "🍜", "🌮", "🍩", "🍪"];
  const [emojiStyles, setEmojiStyles] = useState<EmojiStyle[]>([]);

  useEffect(() => {
    const newEmojiStyles = Array.from({ length: numberOfParticles }).map(
      () => ({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100 + "vw", // Random value between 10vw and 90vw
        top: Math.random() * 100 + "vh", // Random value between 10vh and 90vh
        animationDuration: Math.random() * 5 + 10 + "s", // Random duration between 5s to 10s
        delay: Math.random() * 2 + "s", // Random delay between 0s and 5s
        fontSize: Math.random() * 2 + 2 + "rem", // Random font size between 1rem and 3rem
      })
    );
    setEmojiStyles(newEmojiStyles);
  }, [numberOfParticles]);

  return (
    <div className="emoji-container">
      {emojiStyles.map((style, index) => (
        <span
          key={index}
          className="floating-emoji"
          style={{
            left: style.left,
            top: style.top,
            animationDuration: style.animationDuration,
            animationDelay: style.delay,
            opacity: 0, // Set initial opacity to 0
            fontSize: style.fontSize,
          }}
        >
          {style.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
