import React from 'react';
import { ProductItem } from '../Main/ProductItem';
import { SortSelect } from '../../UI/Select/SortSelect';

import classes from './ProductList.module.css';
import { IProducts } from '../../../modules/types';

type IProductProps = {
  productList: IProducts[];
  sortSelect: string;
  onChangeSort: (sort: string) => void;
};

export const ProductList = (props: IProductProps): JSX.Element => {
  const { productList } = props;
  const { sortSelect } = props;
  const { onChangeSort } = props;

  return (
    <section className={classes.product}>
      <div className={classes.product__sort}>
        <div className={classes.sort__bar}>
          <SortSelect
            sortSelect={sortSelect}
            onChangeSort={onChangeSort}
            options={[
              { value: 'priceASC', name: 'Sort by price ASC' },
              { value: 'priceDESC', name: 'Sort by price DESC' },
              { value: 'ratingASC', name: 'Sort by rating ASC' },
              { value: 'ratingDESC', name: 'Sort by rating DESC' },
              { value: 'discountPercentageASC', name: 'Sort by discount ASC' },
              { value: 'discountPercentageDESC', name: 'Sort by discount DESC' },
            ]}
          />
        </div>
        <div className={classes.Stat}> Found: {productList.length} </div>
        <div className={classes.SearchBar}>
          <input type="search" placeholder="Search product" className={classes.SearchInput} />
        </div>
        <div className={classes.ViewMode}>
          <div className={classes.small_v}>1</div>
          <div className={classes.big_v}>2</div>
        </div>
      </div>
      <div className={classes.product__list}>
        {productList.length ? (
          productList.map(
            (propsProductItem: IProducts): JSX.Element => (
              <ProductItem propsProductItem={propsProductItem} key={propsProductItem.id} />
            )
          )
        ) : (
          <div className={classes.not__found}>No products found</div>
        )}
      </div>
    </section>
  );
};
