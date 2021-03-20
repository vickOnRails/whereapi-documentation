---
id: basics
title: Basics
---

It's easy to get started with WhereAPI. The most basic thing you can do is send a `GET` to the root endpoint. This will return a welcome message. When this works, you'll want to get your API keys next.

```bash
curl https://whereapis-africa.herokuapp.com/api/
```

You don't need an API key for this. Once this works, you'll want to generate your API keys and ensure they work. Try to get all the countries (This is protected and will require your API keys).

```bash
curl https://whereapis-africa.herokuapp.com/api/countries
-H 'X-Api-Key:cdad871a-debd-4025-bf06-0744d80ad3ab'
```

## API Responses

Responses always come in an object of 3 properties

```js
{
    message: "Response message",
    data: [{...}],
    success: true
}
```

The `message` field contains a user-friendly message and will be helpful to both you, the developer, and users of the apps you're building.

### Common Error Messages

Here are a few error messages you might encounter while using the API

- **Exceeded daily API limits (492)** - Wait for another day to make use of the API. (Very sad limit, but it'll be removed very soon.)
- **Not found (404)** - The resource in question was not found. This could be an entity or an endpoint.
- **Unprocessable entity (422)** - The fields you're sending to the API are incorrect.
- **Authentication error. Please attach an API key to your requests (401)** - The API key was not attached to the Request.
- **Invalid API Key (401)** - wrong API key. Ensure your API key is correct.

Understanding these shouldn't be hard for you if you're familiar with building APIs. But you can [tweet](https://twitter.com/vick_OnRails) at me if you find any of these difficult to understand.

## Reference

You can explore the References section to find more information about entities. There's also an Examples section that covers other basic use cases too.

## The tutorial

We're going to build a simple directory of all Nigerian states and their local government areas. The aim is to show how you might use this API in a ReactJS setup.

:::info
More examples will be added in the future
