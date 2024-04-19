// imports
import Head from "next/head";
import Header from "../components/Header";
import Terminal from "../components/Terminal";

export default function Home() {
  return (     
        <div className="basics">
          <Header />
          <div className="text-box-one" >
            <p>This is your terminal.</p>
          </div>
          <Terminal />
          <p className="text-box">We'll get started by learing some basic commands used for navigating in the command line terminal. Try out the interface by typering something to get started.</p>
        </div>
  );
}
