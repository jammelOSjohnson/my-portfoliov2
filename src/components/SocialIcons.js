const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/jammelOSjohnson"
        target={"_blank"}
        rel={"noreferer"}
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Jammel Johnson' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/jammel-o-s-johnson-58739bb3/"
        target={"_blank"}
        rel={"noreferer"}
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Jammel Johnson' LinkedIn Profile"
        ></i>
      </a>
      {/* <a
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/michael.yeates/"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Jammel Johnson' Instagram Profile"
        ></i>
      </a> */}
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/j_0_s_j"
        target={"_blank"}
        rel={"noreferer"}
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Jammel Johnson' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
