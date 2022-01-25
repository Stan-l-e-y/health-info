import { useSpring, animated } from "react-spring";
import { useState } from "react";

const Number = ({ bmiNum }) => {
    const [flip, set] = useState(false);
    const { number } = useSpring({
        reset: false,
        reverse: false,
        from: { number: 0 },
        number: bmiNum,
        delay: 300,
        // config: config.molasses,
        onRest: () => set(!flip),
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Number;
