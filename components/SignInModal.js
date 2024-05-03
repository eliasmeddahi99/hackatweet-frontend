import styles from "../styles/SignInModal.module.css";
import { useState } from "react";

function SignInModal({ SetSignInIsOpen }) {
  const [signInUsername, setSignIpUsername] = useState("");
  const [signInPassword, setSignIpPassword] = useState("");

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalFlex}>
          <img className={styles.logo} src={"/Eliass-ass.png"} alt="logo" />
          <h2 className={styles.text}>Connect to le Ass de Elyass</h2>
          <div className={styles.inputButtons}>
            <input
              className={styles.submitButton}
              type="text"
              placeholder="username"
              id="signInUsername"
              onChange={(e) => setSignIpUsername(e.target.value)}
              value={signInUsername}
            />
            <input
              className={styles.submitButton}
              type="text"
              placeholder="password"
              id="signInPassword"
              onChange={(e) => setSignIpPassword(e.target.value)}
              value={signInPassword}
            />
            <button
              className={styles.signinButton}
              onClick={() => SetSignInIsOpen(true)}
            >
              Sign in
            </button>
          </div>
          <button
            className={styles.closeButton}
            onClick={() => SetSignInIsOpen(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
