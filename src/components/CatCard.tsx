import { useNavigate } from "react-router-dom"

type CatProps = {
    id: number,
    name: string,
    gender: string,
    image: string
}

export function CatCard({ id, name, gender, image }: CatProps) {

    const navigate = useNavigate()

    function navigateToPage() {
        navigate(`/adopt/${id}`)
    }
    return <>
        <div className="card-body">

            <div className="card-image">
                <img src={image} alt="" onClick={() => navigateToPage()} />
            </div>
            <div className="card-content">
                <div className="cat-name">
                    {name}
                </div>
                <div className="cat-gender">
                    <img src={gender} alt="" />
                </div>
            </div>
        </div >
    </>
}