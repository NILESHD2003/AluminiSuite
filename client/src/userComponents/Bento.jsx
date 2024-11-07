import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import MentoringImage from "../assets/MentoringImage.jpg";
import AlumniJobBoard from "../assets/AlumniJobBoard.jpg";
import EventCoordination from "../assets/EventCoordination.jpg";
import PersonalizedAI from "../assets/PersonalizedAI.jpg";
import SeamlessNetworking from "../assets/SeamlessNetworking.jpg";

;

const features = [
    {
        Icon: FileTextIcon,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background: <img src={MentoringImage} className="absolute object-cover opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 h-[650px]",
    },
    {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: <img src={AlumniJobBoard} className="absolute object-cover opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 h-[350px]",
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: <img src={EventCoordination} className="absolute object-cover opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 h-[300px]",
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: <img src={PersonalizedAI} className="absolute object-cover opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 h-[300px]",
    },
    {
        Icon: BellIcon,
        name: "Notifications",
        description:
            "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: <img src={SeamlessNetworking} className="absolute object-cover opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 h-[300px]",
    },
];

export function BentoDemo() {
    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}

