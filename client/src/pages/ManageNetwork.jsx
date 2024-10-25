import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MagicCard } from "@/components/ui/magic-card";
import ShineBorder from "@/components/ui/shine-border";
import { AnimatedShinyTextDemo } from "@/userComponents/AnimatedShinyText";
import { GradualSpacing } from "@/userComponents/GradualSpacing";
import Particles from "@/components/ui/particles";
import { Link } from "react-router-dom";
import UserCard from "@/userComponents/UserCard";

function ManageNetwork() {

    const [color, setColor] = useState("#000000");
    const [searchTerm, setSearchTerm] = useState("");
    const [batch, setBatch] = useState("");

    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleBatchSelect = (value) => setBatch(value);

    const students = [
        { name: "John Doe", role: "Student", batch: "2025", image: "" },
        { name: "John Doe", role: "Student", batch: "2024", image: "" },
        { name: "John Doe", role: "Alumini", batch: "2023", image: "" },
        { name: "John Doe", role: "Student", batch: "2025", image: "" },
        { name: "John Doe", role: "Student", batch: "2024", image: "" },
        { name: "John Doe", role: "Student", batch: "2022", image: "" },
        // Add more profiles here as needed
    ];

    // Filter students based on search term and selected batch
    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!batch || student.batch === batch)
    );

    return (
        <div className="relative min-h-screen p-6 space-y-6">
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
            {/* <ParticlesDemo /> */}
            <div className="flex justify-between items-center">
                {/* Dropdown for Selecting Batch */}
                <Select onValueChange={handleBatchSelect}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select Batch" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2025">Batch 2025</SelectItem>
                        <SelectItem value="2024">Batch 2024</SelectItem>
                        <SelectItem value="2023">Batch 2023</SelectItem>
                        <SelectItem value="2022">Batch 2022</SelectItem>
                    </SelectContent>
                </Select>

                {/* Add Button */}
                <Link to="/AddStudent" >
                    <AnimatedShinyTextDemo>Add Student</AnimatedShinyTextDemo>
                </Link>
            </div>

            {/* Empty Cards for Analytics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <ShineBorder
                    className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >

                </ShineBorder>

                <ShineBorder
                    className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >

                </ShineBorder>
            </div>
            <GradualSpacing
                className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                text="Our Members"
            />
            {/* Search Input */}
            <Input
                className="mb-4 w-full md:w-1/2"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={handleSearch}
            />

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStudents.map((student, index) => (
                    <div key={index} className=" bg-white shadow-md rounded-lg overflow-hidden">
                        {/* <MagicCard /> */}
                        <UserCard />
                    </div>
                ))}

            </div>

        </div>
    );
}

export default ManageNetwork;
