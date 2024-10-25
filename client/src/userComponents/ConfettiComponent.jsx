import React from 'react'


import { useRef } from "react";

import Confetti from "@/components/ui/confetti";


const ConfettiComponent = () => {
    const confettiRef = useRef(null);
    return (
        <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"

        />
    )
}

export default ConfettiComponent
