import Meteors from "@/components/ui/meteors";

export function MeteorDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Meteors number={30} />

        </div>
    );
}
