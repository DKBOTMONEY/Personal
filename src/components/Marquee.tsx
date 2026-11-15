import React from "react";

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  speed?: number;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className,
  reverse = true,
  pauseOnHover = true,
  children,
  speed,
  vertical = true,
  repeat = 2,
  style,
  ...props
}: MarqueeProps) {
  const animClass = vertical
    ? reverse
      ? "animate-marquee-vertical-reverse"
      : "animate-marquee-vertical"
    : reverse
    ? "animate-marquee-horizontal-reverse"
    : "animate-marquee-horizontal";

  const customStyle = speed
    ? ({ "--duration": `${speed}s`, ...style } as React.CSSProperties)
    : style;

  return (
    <div
      {...props}
      style={customStyle}
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [--duration:22s] [gap:var(--gap)] select-none",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            aria-hidden={i > 0 ? "true" : undefined}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical ? "flex-col" : "flex-row",
              animClass,
              pauseOnHover && "pause-on-hover"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
