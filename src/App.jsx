import "./App.css";
import Header from "./Components/Header";
import ResumeFormat from "./Components/ResumeFormat";
import Preview from "./Components/Preview";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState(false);

  const toggleTab = () => {
    setTab(!tab);
  };

  return (
    <>
      <Header />
      <div className="user-resume-data-content">
        <div className="user-resume-information">
          {!tab ? <ResumeFormat /> : <Preview />}

          <div className="edit-preview-container">
            <button
              onClick={toggleTab}
              className={`handler-btn ${!tab ? "preview-btn" : "edit-btn"}`}
            >
              {!tab ? "Preview" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
