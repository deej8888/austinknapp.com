"use client";

import { useEffect } from "react";

const CARD_SELECTOR = ".card-premium";
const BUTTON_SELECTOR = ".btn-primary, .btn-secondary";

function resetCard(card: HTMLElement | null) {
  if (!card) {
    return;
  }

  card.style.setProperty("--card-tilt-x", "0deg");
  card.style.setProperty("--card-tilt-y", "0deg");
}

function resetButton(button: HTMLElement | null) {
  if (!button) {
    return;
  }

  button.style.setProperty("--btn-x", "0px");
  button.style.setProperty("--btn-y", "0px");
}

export default function InteractionEffects() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let activeCard: HTMLElement | null = null;
    let activeButton: HTMLElement | null = null;

    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const card = target.closest(CARD_SELECTOR) as HTMLElement | null;
      if (activeCard && activeCard !== card) {
        resetCard(activeCard);
      }

      if (card) {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const maxTilt = 1.6;

        card.style.setProperty("--card-tilt-y", `${(x * maxTilt * 2).toFixed(2)}deg`);
        card.style.setProperty("--card-tilt-x", `${(-y * maxTilt * 2).toFixed(2)}deg`);
      }

      activeCard = card;

      const button = target.closest(BUTTON_SELECTOR) as HTMLElement | null;
      if (activeButton && activeButton !== button) {
        resetButton(activeButton);
      }

      if (button) {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const maxOffset = 3.2;

        button.style.setProperty("--btn-x", `${(x * maxOffset * 2).toFixed(2)}px`);
        button.style.setProperty("--btn-y", `${(y * maxOffset * 2).toFixed(2)}px`);
      }

      activeButton = button;
    };

    const clearAll = () => {
      resetCard(activeCard);
      resetButton(activeButton);
      activeCard = null;
      activeButton = null;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", clearAll);
    window.addEventListener("blur", clearAll);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", clearAll);
      window.removeEventListener("blur", clearAll);
      clearAll();
    };
  }, []);

  return null;
}
