import {useEffect, useState} from "react";

function SocialButton({ social }) {

    const { name, url, image_path } = social

    const [image, setImage] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/${image_path}.svg`)
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
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href={url}>
                {loaded && <img className="h-6 w-6" src={image} alt={name}/>}
            </a>
        </li>
    )
}

export default SocialButton