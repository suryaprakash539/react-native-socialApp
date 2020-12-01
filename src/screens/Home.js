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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postState.posts}
        keyExtractor={(item) => item.id}
        renderItem={({item, index, separators}) => (
          <Post key={item.id} item={item} userDetails={userDetails} />
        )}
        ListEmptyComponent={() => (
          <Container style={styles.emptyContainer}>
            <H1>No post found</H1>
          </Container>
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  postState: state.post,
  userDetails: state.auth.user,
});

const mapDispatchToProps = {
  getPosts,
};

Home.propTypes = {
  getPosts: propTypes.func.isRequired,
  postState: propTypes.object.isRequired,
  userDetails: propTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    justifyContent: 'flex-start',
    padding: 4,
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
