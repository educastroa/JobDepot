import React, { useEffect } from "react";
import "./Header.css";

export default function Weather() {
  useEffect(() => {
    window.__weatherwidget_init();
  }, []);

  return (
    <section>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/42d98n81d25/london/"
        data-label_1="BURLINGTON"
        data-label_2="WEATHER"
        data-icons="Climacons Animated"
        data-theme="pure"
      >
        LONDON WEATHER
      </a>
    </section>
  );
}
