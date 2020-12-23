import React from 'react';
import PropTypes from 'prop-types';

import TopCard from './_components/TopCard';
import { Typography, useTheme, useMediaQuery } from '@material-ui/core';

import useStyles from './Style';

const Home = props => {
  const { handleCategoryClick, handleClick, categories } = props;

  const classes = useStyles();
  const theme = useTheme();
  const midScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.homeRoot}>
      <div className={classes.homeTop}>
        {midScreen && (
          <Typography
            className={classes.header}
            component='div'
            variant='h5'
          >
            Discover Restaurants Near You :)
          </Typography>
        )}
        <TopCard
          onClick={() => handleClick('/map')}
          classes={classes}
          // description='Checkout restaurants near you'
          imgUrl='https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80'
        />
        {/* <TopCard
          onClick={() => handleClick('/recipes')}
          classes={classes}
          title='Recipes'
          description='Feel like cooking?'
          imgUrl='https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        />
        {!midScreen && (
          <TopCard
            classes={classes}
            disable
            title='Meals'
            description='Coming soon..'
            imgUrl='https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        )} */}
      </div>
      {/* <div className={classes.homeBottom}>
        <Typography
          className={classes.homeBottomTitle}
          components='div'
          variant='h5'
        >
          Categories
        </Typography>
        {categories.map((category, index) => (
          <div
            className={classes.categoryCard}
            style={{
              backgroundImage: `url(${category.imageUrl})`
            }}
            key={index}
            onClick={() => handleCategoryClick(category._id)}
          >
            <Typography variant='h6' className={classes.topCardTitle}>
              {category.name}
            </Typography>
          </div> */}
      </div>
  );
};

Home.propTypes = {
  categories: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleCategoryClick: PropTypes.func.isRequired
};

export default Home;
