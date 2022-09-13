import "./App.scss";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Quiz, Result } from "./pages";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

function App() {
  const answers = useSelector((store: any) => store.questionCard.answers);
  const location = useLocation();
  const locationHolder = useRef([location.pathname]);

  useEffect(() => {
    ((path) => {
      if (locationHolder.current.length < 2) {
        locationHolder.current.push(path);
      } else if (locationHolder.current[1] === path) {
        return;
      } else {
        locationHolder.current.shift();
        locationHolder.current.push(path);
      }
    })(location.pathname);
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={(() => {
            return allowRender(locationHolder.current as any, "/quiz", undefined) ? <Quiz /> : <Navigate to="/" replace />;
          })()}
        />
        <Route
          path="/result"
          element={(() => {
            return allowRender(locationHolder.current as any, "/result", answers.length) ? <Result /> : <Navigate to="/" replace />;
          })()}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function allowRender(locationArr: ArrayLike<string>, to: string, answersLength: number | undefined): boolean {
  if (to === "/quiz") {
    if (locationArr[1] === "/") return true;
    if (locationArr[0] === "/" && locationArr[1] === "/quiz") return true;
  }
  if (to === "/result" && answersLength === 10) {
    if (locationArr[1] === "/quiz") return true;
    if (locationArr[0] === "/quiz" && locationArr[1] === "/result") return true;
  }
  return false;
}

export default App;
