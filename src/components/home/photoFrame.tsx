import Image from "next/image";
import React from "react";

export default function PhotoFrame({ title, url,id }) {
  return (
    <div className="bg-slate-300 w-full h-full p-4 text-white-900">
      <Image src={url} alt={title} width={150} height={150} />
      <h3>{title}</h3>
    
      <p>{id}</p>
    </div>
  );
}
