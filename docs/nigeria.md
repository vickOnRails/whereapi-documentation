---
id: nigeria
title: Nigeria
---

The API splits Nigeria into

- States (36)
- Local Government Areas (LGAs) (775)

You can get more information about Nigeria by sending a `GET` request to `api/country?search=nigeria`. Assuming you don't know the `id`.

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

Now you know the `id`, you can try this

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145 H "X-Api-Key:xxxxx"
```

The response will look like this

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
It would make a lot of sense to have something like `api/countries/nigeria`. But I asked a few more experienced backend persons and the reason it's not a good practice is that resource identifiers should be unique. What if the country decides to change their names🤷‍♀️? I'm pretty sure the `ids` will never change, so the search approach makes more sense.
:::

### Selecting fields

Let's assume you want just the `name` & `description` fields from the API. You can limit the fields returned with the `fields` query parameter.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145?fields=name,description H "X-Api-Key:xxxxx"
```

You should get just the `name` and `description` fields

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
