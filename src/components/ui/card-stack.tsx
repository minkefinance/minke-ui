import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { BtnSwitch } from "../btn";

interface Card {
  key: string;
  node: ReactNode;
}

export default function CardStack({ children }: { children: ReactNode[] }) {
  const [cards, setCards] = useState<Card[]>(children.map((item, i) => ({ node: item, key: `card_${i}` })));

  // Configuration
  const offset = 8;
  const scaleStep = 0.2;
  const stiff = 170;
  const damp = 26;

  const spring = {
    type: "spring" as const,
    stiffness: stiff,
    damping: damp,
  };

  const moveToStart = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className="relative overflow-visible w-full z-10">
      <ul className="relative w-full">
        <BtnSwitch onClick={() => moveToStart()} className="absolute top-5 right-20 z-10" />
        <div className="opacity-0 w-full overflow-hidden flex flex-nowrap">
            {cards.map(item => <div key={item.key} className="w-full shrink-0">{item.node}</div>)}
        </div>
        <AnimatePresence>
          {cards.map(({ key, node }, i) => {
            const baseZ = cards.length - i;
            return (
              <motion.li
                key={key}
                style={{ transformOrigin: 'top center' }}
                className={`absolute w-full list-none bg-transparent`}
                animate={{
                  top: `${i * -offset}%`,
                  scale: 1 - i * scaleStep,
                  zIndex: baseZ,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.2 },
                }}
                transition={spring}
              >
                {node}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}
