import { 
  // useShikiHighlighter, 
  ShikiHighlighter 
} from "react-shiki";
import { useState, useEffect } from 'react'
import codeStyle from './code.module.scss'

export default function CodeBlock({
  code = '',
  language = 'javascript',
  theme = '',
}: { 
  code: string,
  language: string,
  theme?: string,
}) {



  // document.documentElement 의 dark-mode / light-mode 클래스 변경에 맞춰
  // shiki theme prop을 자동으로 맞춥니다. theme prop이 있으면 그 값을 우선합니다.
  const [autoTheme, setAutoTheme] = useState(theme);

  useEffect(() => {
    function detectTheme() {
      if (theme) {
        setAutoTheme(theme);
        return;
      }
      const isDark =
        document.documentElement.classList.contains("dark-mode");
      setAutoTheme(isDark ? "github-dark" : "github-light");
    }

    detectTheme();

    if (theme) {
      return;
    }

    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      detectTheme();
    });
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);
  // const highlightedCode = useShikiHighlighter(code, "javascript", "dark-plus", {
  //   lineNumbers: true,
  // });
  // console.log(highlightedCode);
  return (
    <div className={codeStyle.container}>
      <ShikiHighlighter 
        language={language}
        theme={autoTheme || "github-light"}
        showLanguage={true}
        addDefaultStyles={true}
        as="div"
        style={{
          textAlign: "left",
          fontFamily: "monospace",
          lineHeight: "1.5",
          backgroundColor: "transparent"
        }}>
          {code?.trim()}
      </ShikiHighlighter>
    </div>
  );
}