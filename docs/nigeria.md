---
id: nigeria
title: Nigeria
---

The API splits Nigeria into

- States (36)
- Local Government Areas (LGAs) (775)

You can get more information about Nigeria by sending a `GET` request to `api/country?search=nigeria`

```bash
curl -H "X-Api-Key:xxxxx" api/country?search=nigeria
```

It should return something like this

```json
[
  {
    "id": "f794ecd7-679e-4989-9be6-e081ac2f7145",
    "name": "Nigeria",
    "description": "Largest country in Africa",
    "code": "NG",
    "createdAt": "2021-03-15T10:26:05.644Z",
    "updatedAt": "2021-03-15T10:26:05.644Z"
  }
]
```

This is the best way to get this information given that you didn't know the Id of the country. Now you do, you can try this

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145 H "X-Api-Key:xxxxx"
```

This will give the following response

```json
{
  "id": "f794ecd7-679e-4989-9be6-e081ac2f7145",
  "name": "Nigeria",
  "description": "Largest country in Africa",
  "code": "NG",
  "createdAt": "2021-03-15T10:26:05.644Z",
  "updatedAt": "2021-03-15T10:26:05.644Z"
}
```

:::info
I had a hard time settling on how to implement resources finding. Take for instance, it would make a lot of sense to have something like `api/countries/nigeria`. But I asked a few more experienced backend persons and the reason it's not a good practice is that resource identifiers should be unique. Besides what if the country decides to change their names🤷‍♀️. I'm pretty sure the Id will never change, so the search approach makes more sense.
:::

### Selecting fields

Let's assume you just want the `name` & `description` fields from the API. You can limit fields with the `fields` query parameter.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145?fields=name,description H "X-Api-Key:xxxxx"
```

You should get just the name and description fields

```json
{
  "name": "Nigeria",
  "description": "Largest country in Africa"
}
```

See [selecting fields through query](https://twitter.com) params for more information.

## States

### Search states

### Sort

### Filter states

## LGAs

### Get state LGAs

### Filter LGAs

### Sort
