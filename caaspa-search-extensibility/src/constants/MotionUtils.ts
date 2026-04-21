/**
 * CAASPA Enterprise Search – Motion & Animation Utilities
 *
 * Choreographed reveal sequences, smooth transitions, and depth-driven animations.
 */

import { Motion, Easing } from './BrandTokens';

// ─── CSS animation keyframes ─────────────────────────────────────────────────
export const MotionKeyframes = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes progressFill {
    from {
      flex-basis: 0%;
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes cardHoverLift {
    0% {
      box-shadow: 0 2px 8px rgba(8, 27, 52, 0.08);
    }
    100% {
      box-shadow: 0 8px 24px rgba(8, 27, 52, 0.14);
      transform: translateY(-3px);
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(0, 120, 212, 0.25);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(0, 120, 212, 0);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
` as const;

// ─── Staggered reveal helper ─────────────────────────────────────────────────
export function staggeredRevealStyle(index: number, baseDelay = 30): React.CSSProperties {
  const delay = index * baseDelay;
  return {
    animation: `slideInUp ${Motion.moderate}ms ${Easing.easeOutCubic} ${delay}ms both`,
  };
}

// ─── Card entrance animation ─────────────────────────────────────────────────
export function cardEntranceStyle(delayMs = 0): React.CSSProperties {
  return {
    animation: `scaleIn ${Motion.slow}ms ${Easing.easeOutCubic} ${delayMs}ms both`,
  };
}

// ─── Smooth hover state transition ────────────────────────────────────────────
export function smoothHoverTransition(): React.CSSProperties {
  return {
    transition: `transform ${Motion.base}ms ${Easing.easeInOutCubic}, box-shadow ${Motion.base}ms ${Easing.easeInOutCubic}`,
  };
}

// ─── Fade transition ─────────────────────────────────────────────────────────
export function fadeTransition(duration = Motion.moderate): React.CSSProperties {
  return {
    transition: `opacity ${duration}ms ${Easing.easeLinear}, color ${duration}ms ${Easing.easeLinear}`,
  };
}

// ─── Button interaction feedback ──────────────────────────────────────────────
export const buttonInteraction = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.opacity = '0.9';
    el.style.transform = 'translateY(-1px)';
  },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  },
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = 'translateY(1px)';
  },
  onMouseUp: (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = 'translateY(-1px)';
  },
} as const;

// ─── Section entry (for grid layouts) ─────────────────────────────────────────
export function sectionEntryStyle(staggerIndex = 0): React.CSSProperties {
  return {
    animation: `slideInUp ${Motion.slow}ms ${Easing.easeOutExpo} ${staggerIndex * 40}ms both`,
  };
}

// ─── Pulse indicator (for live/active states) ───────────────────────────────
export function pulseIndicatorStyle(): React.CSSProperties {
  return {
    animation: `pulseGlow 2s ${Easing.easeLinear} infinite`,
  };
}

// ─── Loading shimmer effect ──────────────────────────────────────────────────
export function shimmerStyle(width = '100%'): React.CSSProperties {
  return {
    backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    backgroundSize: '200% 100%',
    animation: `shimmer 2s infinite`,
  };
}
