import { useEffect, useState } from "react";

/**
 * 실시간으로 window.innerWidth를 기준으로
 * height = slope * width + intercept 공식을 적용합니다.
 *
 * @param slope - 기울기 (ex: 0.444)
 * @param intercept - 절편 (ex: 82.3)
 */
export const useWindowResponsiveHeight = (slope: number, intercept: number) => {
  const [height, setHeight] = useState(
    () => slope * window.innerWidth + intercept,
  );

  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const updateHeight = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newHeight = slope * window.innerWidth + intercept;
        setHeight((prevHeight) => {
          // 값이 충분히 다를 때만 setState
          if (Math.abs(prevHeight - newHeight) > 1) {
            return newHeight;
          }
          return prevHeight;
        });
      }, 100); // 100ms 디바운싱
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, [slope, intercept]);

  return height;
};
