import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[10vw] h-[10vw] rounded-full text-white">
                Loading.....
            </div>
        </div>
    )
}

export default Loader