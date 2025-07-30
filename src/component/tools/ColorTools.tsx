export const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
};

// RGB → HEX
export const rgbToHex = (r: number, g: number, b: number): string =>
  "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

// 선형 보간
export const lerpColor = (a: string, b: string, t: number): string => {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const red = Math.round(r1 + (r2 - r1) * t);
  const green = Math.round(g1 + (g2 - g1) * t);
  const blue = Math.round(b1 + (b2 - b1) * t);
  return rgbToHex(red, green, blue);
};
