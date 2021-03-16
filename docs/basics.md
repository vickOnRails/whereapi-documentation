---
id: basics
title: Basics
---

The most basic endpoint you can call is a `GET` to the root endpoint.

```bash
curl https://whereapis-africa.herokuapp.com/api/
```

You don't need an API key for this. It's just to basically check that you can get to the API. Once this works, you'll want generate your API keys and ensure they work. Try to get all the countries (This is protected and will require your API keys).

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

The messages are user friendly and will be helpful to both you, the developer and users of the apps you're building.

### Common Error Messages

- Exceeded API limits
- Not found
- Wrong request
- Wrong parameters

Understanding these shouldn't be hard for you if you're familiar with building APIs. But you can always tweet at me if you're find any of these difficult to understand.

## Reference

If you're quite familiar with APIs and you get the hang of WhereAPI, you can go through the reference and see the exact use case you're looking for. You could also look at the examples for common use cases.

## The tutorial

The next section is a tutorial to show how you might approach using the API. We're going to build a simple directory of all Nigerian states and their local governments areas. The easiest setup is a `nextjs` site with 2 views.
