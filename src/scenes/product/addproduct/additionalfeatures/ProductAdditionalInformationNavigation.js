import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import AdditionalDescription from '../../saree/AdditionalDescription';
import AdditionalDescriptionSuit from '../../suit/AdditionalDescriptionSuit';


function ProductAdditionalInformationNavigation({handleErrorCount,item}) {
    const { search } = useLocation();

    const query = new URLSearchParams(search);
    const prodcategory = query.get('prodcategory');

    if(prodcategory==="1")
        {
            return <AdditionalDescription handleErrorCount={handleErrorCount} item={item}/>
        }
    return <AdditionalDescriptionSuit handleErrorCount={handleErrorCount} item={item} />
}

export default ProductAdditionalInformationNavigation
