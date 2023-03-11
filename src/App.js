import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Jammel Johnson",
    location: "Kingston, JA",
    tagline: "I'm a Full-Stack Developer",
    email: "jammeljohnson@gmail.com",
    availability: "Open for work",
    brand:
      "Creative, detail-oriented, software engineer with a deep interest in AI LLMs. Proven track record of creating and implementing successful front and back-end web applications. Looking to bring my skills to a tech company with global reach.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
