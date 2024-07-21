import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import ProductDescription from '../../saree/ProductDescription';
import ProductDescriptionSuit from '../../suit/ProductDescriptionSuit';

function ProductDescriptionNavigation({handleErrorCount,item}) {
    const { search } = useLocation();

    const query = new URLSearchParams(search);
    const prodcategory = query.get('prodcategory');

    if(prodcategory==="1")
        {
            return <ProductDescription handleErrorCount={handleErrorCount} item={item}/>
        }
    return <ProductDescriptionSuit handleErrorCount={handleErrorCount} item={item} />
}

export default ProductDescriptionNavigation
