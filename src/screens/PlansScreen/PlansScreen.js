import './plansScreen.css'
import {useEffect, useState} from "react";
import {db} from "../../firebase";

const PlansScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection('products').where('active', '==', 'true')
            .get().then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async  (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        };
                     });
                });
            setProducts(products)
        });
    },[])

    console.log(products);

    return (
    <div className='plansScreen'>
        {Object.entries(products).map(([productId, productData]) => {
            return (
                <div className='plansScreen__plan'>
                    <div className="plansScreen__info">
                        <h5>{productData.next}</h5>
                        <h6>{productData.description}</h6>
                    </div>

                    <button>Subscribe</button>
                </div>
            )
        })}
    </div>
)
}

export {PlansScreen}