import Image from "next/image";

import { TimelineMotionEffect } from "./timeline-motion-effect";

export function TimelineMotion() {
  return (
    <div className="w-full">
      <TimelineMotionEffect data={DATA} />
    </div>
  );
}

const DATA = [
  {
    title: "Keep Safe Exploring The Internet",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis
          aperiam non, esse molestiae suscipit veniam rem officiis facere
          cupiditate deleniti nostrum necessitatibus quo fugit tenetur quos,
          perferendis quas quae?
        </p>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
  {
    title: "Securing Your Business",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
          eveniet accusamus explicabo, officiis quod nihil officia ex sapiente,
          a cupiditate mollitia excepturi earum! Debitis magnam quasi non a
          cumque.
        </p>

        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
  {
    title: "Connect To Ultra-Fast Private Server",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sequi laboriosam facere est voluptatem obcaecati magnam, perferendis
          dolorem debitis quos, non repellendus error hic alias molestiae nemo
          illo nesciunt ipsum!
        </p>

        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
];
