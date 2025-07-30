import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { getMinutesFromTime } from "../component/tools/TimeTools";

interface TimeContextType {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  isDay: boolean;
  isNight: boolean;
  isDawn: boolean;
  isTwilight: boolean;
  timezone: string;
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export const TimeProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState<number>(() => {
    const now = new Date();
    return now.getHours() * 100 + now.getMinutes();
  });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const minutes = getMinutesFromTime(time);

  // Dawn: 04:30~06:30
  const isDawn = minutes >= 270 && minutes <= 390;

  // Twilight: 16:30~18:30
  const isTwilight = minutes >= 990 && minutes <= 1110;

  // Day: 06:30~16:30
  const isDay = minutes > 390 && minutes < 990;

  // Night: 나머지 시간
  const isNight = !isDay && !isDawn && !isTwilight;

  return (
    <TimeContext.Provider
      value={{
        time,
        setTime,
        isDay,
        isNight,
        isDawn,
        isTwilight,
        timezone,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export function useTime() {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("TimeContext must be used within a TimeProvider");
  }
  return context;
}
