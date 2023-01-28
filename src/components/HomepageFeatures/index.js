import React from "react";
import styles from "./styles.module.css";
import Logo from "../../../static/img/logo.png";

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt="Copilotly Logo"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            Copilotly AI <br />
            Resources
          </h1>
        </div>

        {/* 4 Buttons, 2 on each row: Quick Start, Installation, User Guide, Copilots */}
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <a
                className="button button--primary button--lg"
                href="/resources/quick-start"
                style={{
                  margin: "1rem 1rem 1rem 0",
                  width: "170px",
                }}
              >
                Quick Start
              </a>

              <a
                className="button button--primary button--lg"
                href="/resources/installation"
                style={{
                  margin: "1rem 1rem 1rem 0",
                  width: "170px",
                }}
              >
                Installation
              </a>

              <a
                className="button button--primary button--lg"
                href="/resources/user-guide"
                style={{
                  margin: "1rem 1rem 1rem 0",
                  width: "170px",
                }}
              >
                User Guide
              </a>

              <a
                className="button button--primary button--lg"
                href="/copilots"
                style={{
                  margin: "1rem 1rem 1rem 0",
                  width: "170px",
                }}
              >
                Copilots
              </a>
            </div>
          </div>
        </div>

        {/* Need help? mailto:support@copilotly.com */}
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <a
                href="mailto:support@copilotly.com"
                style={{
                  fontWeight: "bold",
                }}
                target="_blank"
              >
                Need Help? support@copilotly.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
