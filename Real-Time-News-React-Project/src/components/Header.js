import { format } from "date-fns";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    const currentDate = new Date();
    console.log("Current date:", currentDate);
    const formatted = format(currentDate, "EEEE, MMMM d, yyyy");
    console.log("Formatted date:", formatted);
    setFormattedDate(formatted);
  }, []);
  return (
    <>
      <header className="new_header" style={{ backgroundColor: "#fff" }}>
        <div className="desktop_header">
          <div className="header-top" style={{ float: "left" }}>
            <div
              className="header-left"
              style={{ float: "none", position: "relative" }}
            >
              <div
                className="header-date"
                style={{ width: 215, float: "left", textAlign: "left" }}
              >
                <div
                  className="eng-date"
                  style={{ color: "black", fontSize: 14, }}
                >
                  {formattedDate}
                </div>
                <div className="today_top_links " style={{ marginTop: 5 }}>
                  <a
                    href=" "
                    target="_blank"
          rel="noreferrer"
                    style={{
                      backgroundColor: "gray",
                      color: "#fff",
                      padding: 5,
                      
                    }}
                  >
                    Today's Paper
                  </a>
                </div>
              </div>
             
              <div
                className="header-top-right"
                style={{ width: 215, float: "right", textAlign: "right" }}
              >
                <div
                  className="header-prayer-time"
                  style={{ color: "#000", fontSize: 14 ,margin:'0 10'}}
                >
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
