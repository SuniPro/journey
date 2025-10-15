import SyntaxHighlighter from "react-syntax-highlighter";
import { NetflixStyleCardFlip } from "../component/Card/NetflixStyleCardFlip";
import { HomeButton } from "../component/HomeButton";
import { ContentsContainer, PageContainer } from "../component/layouts";
import { useWindowContext } from "../context/WindowContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function NetflixStyle() {
  const locate = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (locate.pathname === "/") {
      navigate("netflix");
    }
  }, [locate.pathname, navigate]);
  const { windowWidth } = useWindowContext();
  return (
    <>
      <PageContainer width={windowWidth}>
        <ContentsContainer>
          <NetflixStyleCardFlip />
        </ContentsContainer>
        <ContentsContainer>
          <SyntaxHighlighter language="react" className="w-full rounded-md">
            {`
export function NetflixStyleCardFlip() {

    const [videoShownIndex, setVideoShownIndex] = useState<number | null>(0);
    const [videoFadingOut, setVideoFadingOut] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const flipRef = useRef<HTMLDivElement>null;

    const { windowWidth } = useWindowContext();

    const responsiveHeight = useWindowResponsiveHeight(0.36501, 189.993);

    useEffect(() => {
        setVideoShownIndex(selectedIndex);
        setVideoFadingOut(false);

        const timer = setTimeout(() => {
            setVideoFadingOut(true); // fade 시작

            // fade 시간 후 비디오 제거
            setTimeout(() => {
                setVideoShownIndex(null);
                setVideoFadingOut(false);
            }, 800); // <- transition 시간과 동일
        }, 5000);

        return () => clearTimeout(timer); // index 바뀌면 기존 타이머 정리
    }, [selectedIndex, windowWidth]);
    
    const childList = NetflixContents([innerCasino, casinoLounge, poker, redCasino, pokerLight], windowWidth, selectedIndex, videoShownIndex, videoFadingOut, porkerVideo);
    
    return <FlipContainer ref={flipRef} height={responsiveHeight}>
        <NetflixCardFlip
            nodeList={childList}
            maxWidth={windowWidth}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
        />
    </FlipContainer>
}
        `}
          </SyntaxHighlighter>
        </ContentsContainer>
        <ContentsContainer>
          <a
            className="text-lg text-white hover:text-blue-500"
            href="https://github.com/SuniPro/tree/main/src/component/Card/NetflixStyleCardFlip"
          >
            Go To More
          </a>
        </ContentsContainer>
      </PageContainer>
      <HomeButton />
    </>
  );
}
