import styles from "../styles/SignUpModal.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';


function SignUpModal({ setIsOpen }) {

  const dispatch = useDispatch();

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");


  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword, firstname: signUpFirstname }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({username: signUpUsername, token: data.newUser.token, firstname : signUpFirstname})); // connexion en vous appuyant sur la présence ou non du token dans le store.
					setSignUpUsername('');
					setSignUpPassword('');
				}
			});
	};


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
            onChange={(e) => setSignUpFirstname(e.target.value)} // réinitialisation de la valeur (setfirstname) avec l'input de l'utilisateur 
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
            onClick={() => handleRegister()}
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
