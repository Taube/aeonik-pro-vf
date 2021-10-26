const MIN_SPEC = {
  Chrome: 59,
  Safari: 11,
  EdgeChromium: 79,
  Firefox: 54,
  SamsungInternetChromium: 59,
  InternetExplorer: 11
};

type Spec = {
  Chrome?: number;
  Safari?: number;
  Firefox?: number;
  EdgeChromium?: number;
  SamsungInternetChromium?: number;
  InternetExplorer?: number;
};

// https://en.wikipedia.org/wiki/Samsung_Internet
// https://caniuse.com/?search=flexbox

const OK = () => {
  return <span style={{ color: "green" }}>OK</span>;
};

const NO = () => {
  return <span style={{ color: "red" }}>NO</span>;
};

export const CompareMinSpec = (props: Spec) => {
  const {
    Chrome,
    Safari,
    Firefox,
    EdgeChromium,
    SamsungInternetChromium,
    InternetExplorer
  } = props;
  return (
    <ul>
      <li>
        Chrome {Chrome} / {MIN_SPEC.Chrome}:
        {Chrome && Chrome <= MIN_SPEC.Chrome ? <OK /> : <NO />}
      </li>
      <li>
        Safari {Safari} / {MIN_SPEC.Safari}:
        {Safari && Safari <= MIN_SPEC.Safari ? <OK /> : <NO />}
      </li>
      <li>
        Edge (Chromium {EdgeChromium} / {MIN_SPEC.EdgeChromium}):
        {EdgeChromium && EdgeChromium <= MIN_SPEC.EdgeChromium ? (
          <OK />
        ) : (
          <NO />
        )}
      </li>
      <li>
        Firefox {Firefox} / {MIN_SPEC.Firefox}:
        {Firefox && Firefox <= MIN_SPEC.Firefox ? <OK /> : <NO />}
      </li>
      <li>
        Samsung Internet (Chromium {SamsungInternetChromium} /{" "}
        {MIN_SPEC.SamsungInternetChromium}):
        {SamsungInternetChromium &&
        SamsungInternetChromium <= MIN_SPEC.SamsungInternetChromium ? (
          <OK />
        ) : (
          <NO />
        )}
      </li>
      {InternetExplorer ? (
        <li>
          Internet Explorer: {InternetExplorer} / {MIN_SPEC.InternetExplorer}
        </li>
      ) : null}
    </ul>
  );
};
