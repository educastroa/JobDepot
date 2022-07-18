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
        data-label_1="LONDON"
        data-label_2="WEATHER"
        data-theme="original"
      >
        LONDON WEATHER
      </a>
    </section>

  );
}
