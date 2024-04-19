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
        </div>
  );
}
