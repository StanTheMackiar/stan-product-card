## Stan-Product-Card

My first component deploy at NPM.

### StanTheMackiar


## Example

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from 'stan-product-card';
```


```
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}>
        {
          ({reset, count, increaseBy, isMaxCountReached,maxCount}) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
```