import React from 'react'
import ResultListItem from '../design-system/Results/result-list-item';

const Product = ({product, onSelectItem}) => (<ResultListItem product={product} onSelect={onSelectItem}/>)

export default Product
