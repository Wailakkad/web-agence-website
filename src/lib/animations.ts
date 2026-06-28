import { useEffect, useState, MouseEvent } from "react";

export interface GSAPInstance {
  gsap: any;
  ScrollTrigger: any;
}

let gsapCache: GSAPInstance | null = null;

/**
 * Lazy loads GSAP and the ScrollTrigger plugin on demand.
 * This guarantees excellent Core Web Vitals score without bloating the initial main-thread bundle.
 */
export async function loadGSAP(): Promise<GSAPInstance> {
  if (gsapCache) return gsapCache;

  const [gsapModule, scrollTriggerModule] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);

  const gsap = gsapModule.gsap || gsapModule.default;
  const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

  gsap.registerPlugin(ScrollTrigger);
  gsapCache = { gsap, ScrollTrigger };
  return gsapCache;
}

/**
 * React hook to wait for GSAP to be lazy-loaded on the client.
 */
export function useGSAPReady() {
  const [gsapInstance, setGsapInstance] = useState<GSAPInstance | null>(null);

  useEffect(() => {
    let active = true;
    loadGSAP()
      .then((instance) => {
        if (active) {
          setGsapInstance(instance);
        }
      })
      .catch((err) => {
        console.error("Failed to lazy load GSAP", err);
      });

    return () => {
      active = false;
    };
  }, []);

  return gsapInstance;
}

/**
 * Calculates a 3D tilt effect on mouse movement.
 * Expects a rect of the hovered element, mouse coordinates relative to viewport.
 */
export function calculateTilt(
  e: MouseEvent<HTMLElement>,
  element: HTMLElement,
  maxRotation: number = 8
) {
  const rect = element.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  
  // Mouse position relative to element center
  const mouseX = e.clientX - rect.left - width / 2;
  const mouseY = e.clientY - rect.top - height / 2;

  // Normalised values (-1 to 1)
  const normX = mouseX / (width / 2);
  const normY = mouseY / (height / 2);

  // Rotation values (x-rotation depends on mouse Y movement, y-rotation depends on mouse X)
  const rotationX = -(normY * maxRotation);
  const rotationY = normX * maxRotation;

  return { rotationX, rotationY };
}
