import { cn } from "../../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoElement";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import HashDefineBento from '../assets/hash_define_bento.png';
export default function BentoPage() {
    return (
        <div>
            <BentoGrid className="">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 rounded-xl"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "1",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 " />,
    },
    {
        title: "The Digital Revolution",
        description: "2",
        header: <Skeleton />,
        className: "md:col-span-4",
        icon: <IconFileBroken className="h-4 w-4 " />,
    },
    {
        title: "The Art of Design",
        description: "3",
        header: <Skeleton />,
        className: "md:col-span-2 row-span-2",
        icon: <IconSignature className="h-4 w-4 " />,
    },
    {
        title: "The Power of Communication",
        description:
            "4",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 " />,
    },
    {
        title: "",
        description:
            "",
        header: <Skeleton />,
        className: "md:col-span-3 bg-[url('src/assets/bento_image.png')] bg-cover bg-center",
        icon: <img src = {HashDefineBento} className="w-1/2"/>,
    },
    {
        title: "The Power of Communication",
        description:
            "6",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 " />,
    },
    {
        title: "The Power of Communication",
        description:
            "7",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4" />,
    },
    {
        title: "The Power of Communication",
        description:
            "8",
        header: <Skeleton />,
        className: "md:col-span-3",
        icon: <IconTableColumn className="h-4 w-4" />,
    },
    

];