---
id: basics
title: Basics
---

The most basic endpoint you can call is a `GET` to the root endpoint.

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

- Exceeded daily API limits (492) -
- Not found (404) - The resource in question was not found. This could be an entity or an endpoint
- Unprocessable entity (422) - The fields you sent to the backend are incorrect
- Authentication error. Please attach an API key to your requests (401) - The API key was not attached to the Request.
- Invalid API Key (401) - wrong API key. Ensure your API key is correct.

Understanding these shouldn't be hard for you if you're familiar with building APIs. But you can [tweet](https://twitter.com/vick_OnRails) at me if you find any of these difficult to understand.

## Reference

If you've worked with APIs before and get the hang of WhereAPI, you can go through the References and see the exact use case you're looking for. There's also an Examples section that covers other basic use cases too.

## The tutorial

We're going to build a simple directory of all Nigerian states and their local government areas. The aim is to show how you might use this API in a ReactJS setup.

:::info
More examples will be added in the future
