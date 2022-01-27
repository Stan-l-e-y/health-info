import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, func) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setTimeout(() => {
                    func();
                }, 100);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const OutsideAlerter = (props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.showEdit);

    return <div ref={wrapperRef}>{props.children}</div>;
};

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
