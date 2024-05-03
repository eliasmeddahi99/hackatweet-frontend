import styles from "../styles/SignInModal.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';

function SignInModal({ SetSignInIsOpen }) {
  const [signInUsername, setSignIpUsername] = useState("");
  const [signInPassword, setSignIpPassword] = useState("");

  const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({username: signInUsername, token: data.token})); // connexion en vous appuyant sur la présence ou non du token dans le store.
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};

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
              onClick={() => handleConnection()}
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
