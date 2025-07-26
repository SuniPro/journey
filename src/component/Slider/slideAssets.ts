import AppleWallpaper from "../../assets/image/apple-wallpaper.jpg";
import netflix from "../../assets/image/netflix.jpg";
import belleforetresort from "../../assets/image/belleforetresort.png";
import suni from "../../assets/image/suni-logo.png";
import neaco from "../../assets/image/neaco.jpg";
import kurly from "../../assets/image/kurly.webp";
import codle from "../../assets/image/codle.png";
import reactLogo from "../../assets/image/react-logo.png";
import githubLogo from "../../assets/image/github-logo.png";
import nexusLogo from "../../assets/image/nexus-logo.png";
import anycastLogo from "../../assets/image/anycast-logo.png";
import uAnalyzer from "../../assets/image/uanalyzer-logo.png";

export interface WheelSlideAssetType {
  title: string;
  num: string;
  img: string;
}

export const WheelSlideAssets: WheelSlideAssetType[] = [
  {
    title: "Suni.",
    num: "01",
    img: suni,
  },
  {
    title: "Neaco",
    num: "02",
    img: neaco,
  },
  {
    title: "BelleForetResort",
    num: "03",
    img: belleforetresort,
  },
  {
    title: "MarketKully",
    num: "04",
    img: kurly,
  },
  {
    title: "URMS",
    num: "06",
    img: nexusLogo,
  },
  {
    title: "UAnalyzer",
    num: "05",
    img: uAnalyzer,
  },
  {
    title: "codle",
    num: "07",
    img: codle,
  },
  {
    title: "JP",
    num: "08",
    img: anycastLogo,
  },
  {
    title: "anycast",
    num: "09",
    img: anycastLogo,
  },
  {
    title: "AppleStyle",
    num: "10",
    img: AppleWallpaper,
  },
  {
    title: "NetflixStyle",
    num: "11",
    img: netflix,
  },
  {
    title: "Front Component",
    num: "12",
    img: reactLogo,
  },
  {
    title: "Server API",
    num: "13",
    img: githubLogo,
  },
];
