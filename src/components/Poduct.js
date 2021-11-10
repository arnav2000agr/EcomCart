import Prod from  './AddProject';
import iphone from '../Assets/iphone.png';
import samsunga12 from '../Assets/samsunga12.png';
import samsungm12 from '../Assets/samsungm12.png';
import Greyshrug from '../Assets/Greyshrug.png';
import Oneplustv from '../Assets/Oneplustv.png';
import Sonybravia from '../Assets/Sonybravia.png';
import Samsungtv from '../Assets/Samsungtv.png';

const Products = () => {
    const arr = [
    {
        image: <img src={iphone} alt="Iphone" height={200} width={200} />,
        name: "Apple I-Phone",
        price: "Rs.75,000"
    },
    {
        image: <img src={samsunga12} alt="Samsung A12" height={200} width={200} />,
        name: "Samsung A12",
        price: "Rs.21,000"
    },
    {
        image: <img src={samsungm12} alt="Samsung M12" height={200} width={200} />,
        name: "Samsung M12",
        price: "Rs.44,000"
    },
    {
        image: <img src={Oneplustv} alt="OnePLus TV" height={200} width={200} />,
        name: "OnePlus TV",
        price: "Rs.65,000"
    },
    {
        image: <img src={Sonybravia} alt="Sony Bravia" height={200} width={200} />,
        name: "Sony Bravia",
        price: "Rs.52,000"  
    },
    {
        image: <img src={Samsungtv} alt="Samsung TV" height={200} width={200} />,
        name: "Sansumg TV",
        price: "Rs.63,000"

    },
    {
        image: <img src={Greyshrug} alt="Grey Shrug" height={200} width={200} />,
        name: "Grey Shrug",
        price: "Rs.1,299"
    }
    ]
return(
    <div className="Product_array">
        {
            arr.map((arr) => {
                return <Prod image={arr.image} name={arr.name} price={arr.price} />
            })
        }
    </div>
    )
}
export default Products;