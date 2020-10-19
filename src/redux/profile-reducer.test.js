import profileReducer, {addPostActionCreator,deletePost} from "./profile-reducer";
import React from "react";
import ReactDOM from 'react-dom';
import App from '../App';

let state = {
    posts: [
        {id: 1, message: 'Hi,how are you?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 20}
    ],
};


it('length of posts should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator('novoehoroshozabitoe');

    // 2.action
    let newState = profileReducer(state,action);
    // 3.expectation
   expect (newState.posts.length).toBe(3);

});
it('message of new posts should be correct', () => {
    // 1.test data
    let action = addPostActionCreator('novoehoroshozabitoe');

    // 2.action
    let newState = profileReducer(state,action);
    // 3.expectation

   expect (newState.posts[2].message).toBe('novoehoroshozabitoe');
});

it('after deleting length of messages should be decrement', () => {
    // 1.test data
    let action = deletePost(1);

    // 2.action
    let newState = profileReducer(state,action);
    // 3.expectation

   expect (newState.posts.length).toBe(1);
});

it(`after deleting length  shouldn't be decrement if id is incorrect`, () => {
    // 1.test data
    let action = deletePost(1000);

    // 2.action
    let newState = profileReducer(state,action);
    // 3.expectation

   expect (newState.posts.length).toBe(2);
});


