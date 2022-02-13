# **NoSQL - Social Network API** ![MIT](https://img.shields.io/github/license/DarionRichards/nosql-social-media-api?color=teal&style=for-the-badge)

## Table of Contents

### 1. [Walkthrough Video](#walkthrough-video)

### 2. [Description](#description)

### 3. [Technologies Used](#technologies-used)

### 4. [Packages Used](#packages-used)

### 5. [User Flow](#user-flow)

### 6. [Getting Started](#getting-started)

### 7. [End Points](#end-points)

### 7. [License](#license)

#

## Walkthrough Video

https://watch.screencastify.com/v/4hw24wwbjR7QmK3QmAap

## Description

A back-end Node.js application using Express and MongoDB (Mongoose Framework). Where users are able to create a User account, Thoughts and Reactions, as well as adding a Friend.

## Technologies Used

- JavaScript
- Node.js
- NoSQL

### Packages/Modules Used

- Express
- Moment
- MongoDB
- Mongoose

## User Flow

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Getting Started

### Installing Application

```
git clone git@github.com:DarionRichards/nosql-social-media-api.git
cd nosql-social-media-api
npm i
```

### Seed and Use Application

```
npm run start
```

## License

![MIT](https://img.shields.io/github/license/DarionRichards/nosql-social-media-api?color=teal&style=for-the-badge)
