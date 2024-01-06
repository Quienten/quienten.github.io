import {useEffect, useState} from "react";

function ProjectImage({ image_path }) {

    const [image, setImage] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../assets/${image_path}.png`)
                setImage(response.default)
            } catch (err) {
                //setError(err)
            } finally {
                setLoaded(true)
            }
        }

        fetchImage()
    }, [image_path])

    return (
        <>
            {loaded && <img alt="" loading="lazy" decoding="async" data-nimg="1"
                            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            src={image}
            />}
        </>

    )
}

export default ProjectImage;