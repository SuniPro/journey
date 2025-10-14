import { useState, useCallback } from "react";
import { useDrag, useWheel } from "@use-gesture/react";

type CarouselGesture = {
  progress: number;
  activeIndex: number;
  dragBind: ReturnType<typeof useDrag>;
  wheelBind: ReturnType<typeof useWheel>;
};

type Options = {
  disabled?: boolean; // true면 제스처 완전 비활성
  speedWheel?: number;
  speedDrag?: number;
};

export function useCarouselGesture(
  slideCount: number,
  { disabled = false, speedWheel = 0.02, speedDrag = -0.1 }: Options = {},
): CarouselGesture {
  const [progress, setProgress] = useState(0);

  const clampProgress = useCallback(
    (val: number) => Math.max(0, Math.min(100, val)),
    [],
  );

  const activeIndex = Math.floor((progress / 100) * (slideCount - 1));

  // 부드러운 snap-back
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const snapped = Math.round((progress / 100) * (slideCount - 1));
  //     setProgress((snapped / (slideCount - 1)) * 100);
  //   }, 10);
  //   return () => clearTimeout(timeout);
  // }, [progress, slideCount]);

  const wheelBind = useWheel(
    ({ delta: [, dy] }) => {
      setProgress((prev) => clampProgress(prev + dy * speedWheel));
    },
    {
      enabled: !disabled,
      eventOptions: { passive: true }, // 필요 시 false로 바꾸고 preventDefault 가능
    },
  );

  const dragBind = useDrag(
    ({ movement: [mx], memo = 0 }) => {
      setProgress((prev) => clampProgress(prev + (mx - memo) * speedDrag));
      return mx;
    },
    { enabled: !disabled },
  );

  return { progress, activeIndex, wheelBind, dragBind };
}
