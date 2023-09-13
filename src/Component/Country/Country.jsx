const Country = ({country, handleClicked}) => {
const {name, area, flags, independent} = country;
// console.log(country);
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure className="m-3"><img className="w-[300px] h-[200px] rounded-lg" src={flags.png} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name.common}</h2>
                    <p>Official Name: {name.official}</p>
                    <p className="text-xl font-bold">Area: {area} <span>km<sup>2</sup></span></p>
                    <h4 className=" text-xl font-semibold">{independent && 'independent Country'}</h4>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleClicked(country)} className="btn bg-blue-400">Add to visited</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country;