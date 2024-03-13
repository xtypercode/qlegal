import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Qlegal";
  }, []);
  
  return (
    <div>
      Home
    </div>
  );
};

export default HomePage;
