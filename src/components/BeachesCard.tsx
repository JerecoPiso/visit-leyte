type BeachesInfo = {
    name: String ;
    photo: any;
    description: String;
}
const BeachesCard = ({ name }: BeachesInfo) => {
    return (
        <div className="w-full">
            <div>
                {name}
            </div>
        </div>
    )
}
export default BeachesCard;