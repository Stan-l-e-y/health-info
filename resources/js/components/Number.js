import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";

const Number = ({ bmiNum, showBmiMessage }) => {
    const [flip, set] = useState(false);
    const { number } = useSpring({
        reset: false,
        reverse: false,
        from: { number: 0 },
        number: bmiNum,
        delay: 500,
        // config: config.molasses,
        onRest: () => set(!flip),
    });

    useEffect(() => {
        setTimeout(() => {
            showBmiMessage();
        }, 1200);
    }, [number]);

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Number;
