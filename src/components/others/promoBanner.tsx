import Image from "next/image";
import Link from "next/link";
import React from "react";

const promo = [
  {
    links: "/",
    image:
      "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    links: "/",
    image:
      "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    links: "/",
    image:
      "https://images.pexels.com/photos/1381938/pexels-photo-1381938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    links: "/",
    image:
      "https://images.pexels.com/photos/1267332/pexels-photo-1267332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    links: "/",
    image:
      "https://images.pexels.com/photos/2797828/pexels-photo-2797828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    links: "/",
    image:
      "https://images.pexels.com/photos/4484155/pexels-photo-4484155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function PromoBanner() {
  return (
    <section className="my-4">
      <div className="grid grid-cols-12 gap-4 ">
        {promo.map((item, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-6 lg:col-span-4 w-full h-full"
          >
            <Link href={item.links}>
              <Image src={item.image} alt={""} height={236} width={412} quality={100} className="h-48 w-full bg-contain bg-center" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
