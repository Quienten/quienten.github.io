import {useEffect, useRef, useState} from "react";
import CursorIcon from "../assets/cursor.svg"

function SelfReferenceGag() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [x, setX] = useState()
    const [y, setY] = useState()

    const cursorBox = useRef()

    useEffect(
        () => {
            const update = (e) => {
                setX((e.clientX / windowDimensions.width) * cursorBox.current.clientWidth)
                setY((e.clientY / windowDimensions.height) * cursorBox.current.clientHeight)
            }
            window.addEventListener('mousemove', update)
            window.addEventListener('touchmove', update)
            return () => {
                window.removeEventListener('mousemove', update)
                window.removeEventListener('touchmove', update)
            }
        },
        [setX, setY, cursorBox]
    )



    return (
        <div ref={cursorBox}
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
            <img src={CursorIcon} className="relative h-3 w-3 hidden md:block" style={{
                left: x,
                top: y
            }} alt={""}/>
        </div>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default SelfReferenceGag