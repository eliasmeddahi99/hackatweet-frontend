import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.splitBackground}>
      <div className={styles.leftHome}>
        <img className={styles.largeLogo}src="/logo.png" alt="largeLogo"/>
      </div>
      <div className={styles.rightHome}>
        <img className={styles.logo} src={'/logo.png'} alt="logo"/>
        <h1 className={styles.title}>See what's happening</h1>
        <h2 className={styles.subtitle}>Join Hackatweet Today.</h2>
        <div className={styles.buttons}>
          <button
            className={styles.signupButton}
            onClick={() => handleLogout()}
          >
            Sign up
          </button>
          <p className={styles.accountTitle}>Already have an account ?</p>
          <button
            className={styles.signinButton}
            onClick={() => handleLogout()}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
