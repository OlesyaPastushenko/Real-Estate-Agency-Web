import React, { useEffect } from "react";
import "./style.scss"
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm";


function Fancybox(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

export  {Fancybox};