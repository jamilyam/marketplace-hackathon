import React, { Suspense } from "react";
import Footer from "../Footer";
import Header from "../Header";


export default function Layout(props) {
  return (
    <div>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        {props.children || null}
      </Suspense>
      <Footer/>
    </div>
  );
}
