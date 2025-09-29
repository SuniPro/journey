import AppleWallpaper from "../../assets/image/apple-wallpaper.jpg";
import netflix from "../../assets/image/netflix.jpg";
import belleforetresort from "../../assets/image/belleforetresort.png";
import suni from "../../assets/image/suni-logo.png";
import neaco from "../../assets/image/neaco.jpg";
import kurly from "../../assets/image/kurly.webp";
import codle from "../../assets/image/codle.png";
import githubLogo from "../../assets/image/github-logo.png";
import nexusLogo from "../../assets/image/nexus-logo.png";
import anycastLogo from "../../assets/image/anycast-logo.png";
import uAnalyzer from "../../assets/image/uanalyzer-logo.png";
import icoins from "../../assets/image/brand/iCoinVertical.avif";

export interface WheelSlideAssetType {
  title: string;
  num: string;
  img: string;
  link?: string;
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
    link: "https://belleforetresort.com/",
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
    link: "https://about.codle.io/ko/",
  },
  {
    title: "JP",
    num: "08",
    img: anycastLogo,
  },
  {
    title: "icoins",
    num: "09",
    img: icoins,
    link: "https://icoins.info/",
  },
  {
    title: "anycast",
    num: "10",
    img: anycastLogo,
  },
  {
    title: "AppleStyle",
    num: "11",
    img: AppleWallpaper,
    link: "/apple",
  },
  {
    title: "NetflixStyle",
    num: "12",
    img: netflix,
    link: "/netflix",
  },
  {
    title: "Server API",
    num: "13",
    img: githubLogo,
  },
];
