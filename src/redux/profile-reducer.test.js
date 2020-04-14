import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer"

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 34},
    ]
};

it('length of posts should be incremented', () => {

    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be it-kamasutra.com', () => {

    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe("it-kamasutra.com")
});

it('after deleting length of posts should be decremented', () => {

    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1)
});

it(`after deleting length of posts shouldn't be decremented if id incorrect`, () => {

    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2)
});