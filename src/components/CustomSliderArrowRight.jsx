import { LucideChevronRightCircle } from "lucide-react"

function CustomSliderArrowRight(props) {
    return (
        <LucideChevronRightCircle onClick={props.onClick} className="absolute right-20 z-10 top-1/2 stroke-white size-13 cursor-pointer" />
    )
}
export default CustomSliderArrowRight