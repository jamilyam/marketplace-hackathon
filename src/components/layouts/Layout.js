import React, { Suspense } from "react";


export default function Layout(props) {
  return (
    <div>
      
      <Suspense fallback={<div>Loading...</div>}>
        {props.children || null}
      </Suspense>
      
    </div>
  );
}
