import { useEffect, useRef, useState } from "react";

export function MediaPreview({ src, alt, className, fit = "cover" }: { src: string; alt: string; className?: string; fit?: "cover" | "contain" }) {
  const container = useRef<HTMLSpanElement>(null);
  const [animate, setAnimate] = useState(false);
  const video = /\.(mp4|webm)$/i.test(src);

  useEffect(() => {
    if (!video || !container.current) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => setAnimate(visible && !motion.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(container.current);
    motion.addEventListener("change", update);
    return () => { observer.disconnect(); motion.removeEventListener("change", update); };
  }, [src, video]);

  const poster = src.replace(/\.(mp4|webm)$/i, "-poster.jpg");
  const mediaClass = `h-full w-full object-center ${fit === "contain" ? "object-contain" : "object-cover"}`;
  return (
    <span ref={container} className={`block ${className || ""}`}>
      {video && animate ? (
        <video src={src} poster={poster} autoPlay muted loop playsInline preload="none" aria-label={alt} className={mediaClass} />
      ) : (
        <img src={video ? poster : src} alt={alt} loading="lazy" className={mediaClass} />
      )}
    </span>
  );
}
