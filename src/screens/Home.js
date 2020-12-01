import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Container, H1} from 'native-base';

import {connect} from 'react-redux';
import {getPosts} from '../action/post';
import propTypes from 'prop-types';

import EmptyContainer from '../components/EmptyContainer';
import Post from '../components/Post';

const Home = ({getPosts, postState, userDetails}) => {
  useEffect(() => {
    getPosts();
  }, []);

  if (postState.isLoading) {
    return <EmptyContainer />;
  }

  return <Text>Hello from Home</Text>;
};

export default connect()(Home);
