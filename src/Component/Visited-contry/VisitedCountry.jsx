const VisitedCountry = (visited) => {
    const {name, area, flags, independent} = visited.visited;
    return (
        <>
            <div className="card w-[200px] bg-base-100 shadow-xl">
                <figure className="m-3"><img className="w-[130px] h-[80px] rounded-lg" src={flags?.png} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name.common}</h2>
                </div>
            </div>
        </>
    );
};

export default VisitedCountry;