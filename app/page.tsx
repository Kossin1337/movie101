import { useContext } from "react";
import { AppContext, ContextProvider } from "@/app/ContextProvider";

import Application from "@/components/Application";

const Home = ({ props }: any) => {
  const data = useContext(AppContext);

  console.log("PROPS: ", props);
  return (
    <main>
      <ContextProvider>
        <Application />
      </ContextProvider>
    </main>
  );
};

export default Home;
