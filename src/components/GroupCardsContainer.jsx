import { useEffect, useState } from "react"
import { URL_BASE } from "../utils"

function GroupCardsContainer() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(URL_BASE + "/get-travels/")
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    const getTravelBackground = (status) => {
        switch (status) {
            case "¡ÚLTIMOS CUPOS!":
                return "bg-primary"
            case "AGOTADO":
                return "bg-red-500"
            case "CUPOS DISPONIBLES":
                return "bg-green-700"
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 lg:gap-20 max-w-[1366px] mx-auto">
            {data.map((travel) => {
                return (
                    <div key={travel.id} className="relative">
                        <article className="shadow-custom rounded-3xl z-10 relative overflow-hidden">
                            <img src={travel.image_cover} alt={travel.title} className="w-full" />
                            <p className={"text-white text-center font-bold py-2 " + getTravelBackground(travel.status.title)}>{travel.status.title}</p>
                            <div className="py-4 flex flex-col gap-2 text-center h-[238px] justify-center bg-white">
                                <h3 className="font-black text-2xl max-w-xs text-balance mx-auto">{travel.title}</h3>
                                <p className="text-primary font-bold">ACA VA LA FECHA | DESDE {travel.cost} USD</p>
                                <p className="text-balance max-w-xs mx-auto">{travel.description}</p>
                            </div>
                        </article>
                        <div className="bg-primary text-white py-8 flex justify-center rounded-b-3xl absolute -bottom-22 w-full">
                            <a href="#" className="font-black text-2xl underline">MÁS INFORMACIÓN</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GroupCardsContainer