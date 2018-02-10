---
date: "2017-07-25"
description: "Some items I picked up when re-learning Facebook's GraphQL."
draft: false
keywords: "Apollo, GraphQL, Jest, Dataloader, JavaScript"
title: "What I Learned Re-learning GraphQL"
tags: ["GraphQL", "JavaScript"]
---

I learned the basics of [Facebook’s GraphQL](http://graphql.org/) back in February while going through Mr. Stephen Grider’s excellent [tutorial](https://www.udemy.com/graphql-with-react-course/) on Udemy. I loved how flexible and easy to use this was in comparison to the rigidness of REST API structures. Getting the data you wanted to the client had never been easier. The ability to not under or over fetch data is what has sold most developers. I sat it to the side while I continued to work on current projects hoping to work with it more in the coming months. Five nearly six months later I have come back and found that the community, tools, and tech itself has evolved and progressed quite a bit. The following article is what I learned while getting back up to snuff on the subject matter.

Skimming around YouTube I found an excellent little [web series](https://www.youtube.com/playlist?list=PLN3n1USn4xlnXfLBuSMFcYM5yei4oxdxB) by [Ben Awad](https://twitter.com/benawad97) that touched on the basics of how to build a GraphQL Server using [Express.js](https://expressjs.com/) with `graphql-server-express` (now known as `apollo-server-express`). The series touched on OAuth, GraphQL Subscriptions, & integration with [Facebook’s Dataloader](https://github.com/facebook/dataloader) many of the things I needed to get up to speed on fast and the best part was the videos were working with `postgres` & `sequelize` which I was planning on using for the first time.

## The Schema

GraphQL’s Schema Definition Language (SDL) is fantastic for setting up what you initially assume your data structure both server & client side should look like. I don’t work on a team yet, but this feature allows both front and back-end engineers to be working simultaneously once the schema is in place. The front end engineers have an idea of what will be coming to them and using mocking methods the backend engineers can hand the front end mock data to help them better get a feel for designing the client side. I will note at times I did get confused going from my typeDefs, to my resolvers, to my models to keep everyone happy and on the same page. It is my personal advice to write your GraphQL Schema first getting in the ball park for what you expect your data to look like and then proceed to write your models & lastly your resolvers to avoid a lot of confusion and going back and forth between files chasing that _can not allow null value on non-null definition_ error.

## Context

This was really cool, admittedly I had forgotten about it, but the ability to pass things you might need as context on the `graphqlExpress` middleware is really really nice!

```javascript
app.use('/graphql', graphqlExpress({
  schema,
  context: { models } // now we can get access to our PSQL Models inside of our GraphQL resolvers!
})
```

This concept becomes important when working with OAuth because after the user has committed the action of logging in we can retrieve from the request object the JWT. By passing it as context we can then validate the token and that the user should in fact have access to the auth protected routes.

```javascript
app.use('/graphql', graphqlExpress(req => ({
  schema,
  context: {
    models,
    user: req.user
  }
}))
```

## Dataloader

I had watched [Lee Byron’s YouTube video](https://github.com/facebook/dataloader) going through the source code on Dataloader before so I had an idea about what its purpose was and what it achieved for the end user. Seeing just how much it can make a difference performance wise by batching and caching requests really makes one wonder why you would not want to use this library when you find your code has nested relationships. Ben did a demo of the performance enhancements [before](https://youtu.be/2cSVIWDUSn4?t=1m46s) and [after](https://youtu.be/2cSVIWDUSn4?t=12m1s) using Dataloader which was great for someone like myself who needs visuals.

## Testing

I had never attempted to test any GraphQL code before, and it’s my intent to build a GraphQL API for a friend’s website. Being that I will be the one maintaining this website I feel a whole lot better knowing the code is covered by tests, that hopefully cover every case and are not prone to failure themselves.

I’m a big fan of using [Facebook’s Jest](http://facebook.github.io/jest/) testing suite for performing tests on my code and was very happy to find an article by [Sibelius Seraphini](https://twitter.com/sseraphini) that covered just how he used Jest for testing GraphQL code.

I did find that code can get very repetitive when writing these tests and did my best to dry the code up. When I initially wrote the tests in one file it was nearly 1000 lines in length and a terrible mess to try and read through. An initial test looked like the below:

```javascript
test('#14: should create a todo', async () => {
  try {
    // Get a user_id since it's a required param for creating a todo.
    const query = `
      query {
        findAllUsers {
          id
        }
      }
      `
    const { data: { findAllUsers } } = await graphql(
      schema,
      query,
      {},
      { models }
    )
    // pass that id on in the mutation
    const createMutation = `
      mutation {
        createTodo(text:"Go on SNL" user_id:"${findAllUsers[0].id}") {
          id
          text
          completed
        }
      }
    `
    // extract the createTodo object through destructuring
    const { data: { createTodo } } = await graphql(
      schema,
      createMutation,
      {},
      { models }
    )
    expect(createTodo).toHaveProperty('id')
    expect(createTodo).toHaveProperty('text', 'Go on SNL')
    expect(createTodo).toHaveProperty('completed', false)
  } catch (e) {
    throw e
  }
})
```

To dry up the code I created my own mocks object that held the GraphQL queries like below making the readability of the code easier and an individual test not end up being over 30-50 lines of code!

```javascript
createTodo: (text, user_id) => `
  mutation {
    createTodo(text:"${text}", user_id:"${user_id}") {
      id
      text
      completed
    }
  }
`,
```

The refactored test looks like this now:

```javascript
test('#14: should create a todo', async () => {
  try {
    const { data: { findAllUsers } } = await graphql(
      schema,
      mocks.findAllUsers,
      {},
      { models }
    )
    const { data: { createTodo } } = await graphql(
      schema,
      mocks.createTodo('Go on SNL', findAllUsers[0].id),
      {},
      { models }
    )
    expect.assertions(3)
    expect(createTodo).toHaveProperty('id')
    expect(createTodo).toHaveProperty('text', 'Go on SNL')
    expect(createTodo).toHaveProperty('completed', false)
  } catch (e) {
    throw e
  }
})
```

I did come to find out that writing a GraphQL query must be done in exactly the same format as you would write it in the GraphiQL interface. When passing variables into the string template literals that makes up a GraphQL Query you must still use double quotes if the value is a string. In the below mock both `id` & `user_id` are string values and **must** be wrapped in the double quotes where as `completed` is a boolean type and does not need them.

```javascript
completeTodo: (id, complete, user_id) => `
  mutation {
    completeTodo(id:"${id}", completed:${complete}, user_id:"${user_id}")
  }
`,
```

## Acknowledgments

I’d like to thank Ben Awad for the great series he put together. It was a big help in getting back up to speed and learning some of the newer tools available. I’d also like to thank Sibelius Seraphini for his article on [Testing a GraphQL Server using Jest](https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e).

I would love to get other developer’s opinions and feedback on the testing of GraphQL code, and I am totally new to the world of SQL so if you spot any egregious mistake with and of the `postgres` & `sequelize` code please please please open an issue and let me know if I’m headed down a bad path or straying from best practices! I would greatly appreciate the advice.

You can find the code from this article [here](https://github.com/rockchalkwushock/graphql-todo-backend).

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
