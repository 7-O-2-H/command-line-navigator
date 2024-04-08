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
          <div className="text-box">
            <p> 'What's that?', you might ask. It's an advanced application that allows users - and more commonly developers - to directly communicate with your OS.</p>
          </div>
        </div>
  );
}
