// imports
import Head from "next/head";
import Header from "../components/Header";
import Terminal from "../components/Terminal";

export default function Home() {
  return (     
        <div className="basics">
          <Header />
          <Terminal />
        </div>
  );
}
