import { useState } from "react";
import TopBar from "../components/TopBar";
import Options from "../components/Options";
import image20 from "./assets/images/20%desconto.webp"
import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
import ButBar from "../components/ButBar";
import Content from "./ContentPage/Content";

function Page() {
  const [page, setPage] = useState("home");

  return (
    <> 
      <div className="w-screen flex flex-col bg-indigo-200 h-screen overflow-y-scroll">
        <TopBar setPage={setPage}/> 
        <Content page={page}/>
     <ButBar setPage={setPage}/>
      </div>
    </>
  );
}

export default Page;
