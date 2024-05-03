import styles from "../styles/SignUpModal.module.css";
import { useState } from "react";

function SignUpModal({ setIsOpen }) {
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalFlex}>
        <img className={styles.logo} src={"/logo.png"} alt="logo" />
        <h2 className={styles.text}>Create your Hackatweet account</h2>
        <div className={styles.inputButtons}>
          <input
            className={styles.submitButton}
            type="text"
            placeholder="firstname"
            id="signUpFirstname"
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
          />
          <input
            className={styles.submitButton}
            type="text"
            placeholder="username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
          <input
            className={styles.submitButton}
            type="text"
            placeholder="password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
          <button
            className={styles.signupButton}
            onClick={() => setIsOpen(true)}
          >
            Sign up
          </button>
        </div>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          X
        </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
