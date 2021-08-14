import React from "react";

function CookiesBanner() {
  const CookiesOk = () => {
    document.getElementsByClassName("cookie-banner")[0].style.display = "none";
    localStorage.setItem("cookies_shown", true);
  };

  return (
    <div className="cookie-banner">
      <p>
        Our website uses cookies to improve your experience. To find out more
        about the cookies we use please see our Cookies Policy.
        <button className="button light" onClick={e => CookiesOk(e)}>
          OK
        </button>
      </p>
    </div>
  );
}

export default CookiesBanner;