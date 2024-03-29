import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductCard from '../../components/productcard/productcard.components';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
const Category = () => {
  const {category} = useParams();
  console.log('render/re-rendering component')

  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])
  return(
    <Fragment>      
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>

      {products &&
        products.map((product) => <ProductCard key={product.id} product={product}/>
        )
      }
    </div>
    </Fragment>
  )
}

export default Category;