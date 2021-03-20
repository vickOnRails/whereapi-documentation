---
id: nigeria
title: Nigeria
---

The API splits Nigeria into

- States (36)
- Local Government Areas (LGAs) (775)

You can get more information about Nigeria by sending a `GET` request to `api/country?search=nigeria`. Assuming you don't know the `id`.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries?search=nigeria -H "X-Api-Key:xxxxx"
```

It should return something like this

```json
{
  "message": "Countries fetched successful",
  "success": true,
  "data": [
    {
      "id": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "name": "Nigeria",
      "description": "Largest country in Africa",
      "code": "ng",
      "createdAt": "2021-03-15T10:26:05.644Z",
      "updatedAt": "2021-03-17T07:13:00.244Z",
      "link": "..."
    }
  ]
}
```

Now you know the `id`, you can try this

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145 H "X-Api-Key:xxxxx"
```

The response will look like this

```json
{
  "message": "Country fetched successful",
  "success": true,
  "data": {
    "id": "f794ecd7-679e-4989-9be6-e081ac2f7145",
    "name": "Nigeria",
    "description": "Largest country in Africa",
    "code": "ng",
    "createdAt": "2021-03-15T10:26:05.644Z",
    "updatedAt": "2021-03-17T07:13:00.244Z"
  }
}
```

:::info
It would make a lot of sense to have something like `api/countries/nigeria`. But I asked a few more experienced backend persons and the reason it's not a good practice is that resource identifiers should be unique. What if the country decides to change their names🤷‍♀️? I'm pretty sure the `ids` will never change, so the search approach makes more sense.
:::

## States

There are 36 states in Nigeria. You can get all of them by sending a `GET` request to the `/api/countries/countryId/states` endpoint. Here's an example

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/:countryId/states H "X-Api-Key:xxxxx"
```

This will return something like this

```bash
{
    "message": "States fetched successfully",
    "success": true,
    "data": [
        {
            "id": "cd269093-1687-4b31-8ec1-e978898b81fd",
            "name": "Abia",
            "code": "abia",
            "safeCode": "NG-AB",
            "postalCode": 440001,
            "description": "Abia is a state in the south eastern part of Nigeria. The capital is Umuahia, and the major commercial city is Aba, which was formerly a British colonial government outpost in the region, and is also one of the most populated areas in Nigeria",
            "capital": "Umuahia",
            "cities": [
                "Aba"
            ],
            "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
            "createdAt": "2021-03-15T10:26:08.035Z",
            "updatedAt": "2021-03-15T10:26:08.038Z",
            "url": "https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/cd269093-1687-4b31-8ec1-e978898b81fd"
        },
        {
            "id": "ac0974a1-3f1b-4e39-8bfa-703c00d8d668",
            "name": "Abuja",
            "code": "abuja",
            "safeCode": "NG-ABJ",
            "postalCode": 900211,
            "description": "Abuja is the capital and eighth most populous city of Nigeria. Located in the centre of the country within the Federal Capital Territory (FCT), it is a planned city built mainly in the 1980s.",
            "capital": "Abuja Municipal Area",
            "cities": [],
            "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
            "createdAt": "2021-03-15T10:26:08.035Z",
            "updatedAt": "2021-03-15T10:26:08.038Z",
            "url": "https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/ac0974a1-3f1b-4e39-8bfa-703c00d8d668"
        },
        {...}
    ]
}
```

### Get state by Id

You can get to a state by appending their Ids

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/:countryId/states/:stateId H "X-Api-Key:xxxxx"
```

You'll get the following response

```bash
{
    "message": "State fetched successfully",
    "success": true,
    "data": {
        "id": "e4c18d52-959b-4287-b4c6-10d4879e300e",
        "name": "Kano",
        "code": "kano",
        "safeCode": "NG-KN",
        "postalCode": 700001,
        "description": "Kano State is located in northern Nigeria.[6] Kano was created on 27 May, 1967 from the Northern Region, and has borders with Katsina State (northwest) Jigawa State (northeast) Bauchi State (southeast) and Kaduna State (southwest).",
        "capital": "Kano",
        "cities": [
            "Kano"
        ],
        "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
        "createdAt": "2021-03-15T10:26:08.037Z",
        "updatedAt": "2021-03-15T10:26:08.038Z"
    }
}
```

### Search, Sort, Filter states

You can do pretty much anything on the `States` endpoint - [Searching](https://something.com), [Sorting](https://something.com), [Filtering](https://something.com) by following these guides. Here's an example of how you can sort by `name` and filter the `name` & `description` fields.

Your response would look like

```json
{
  "message": "States fetched successfully",
  "success": true,
  "data": [
    {
      "name": "Abia",
      "description": "Abia is a state in the south eastern part of Nigeria. The capital is Umuahia, and the major commercial city is Aba, which was formerly a British colonial government outpost in the region, and is also one of the most populated areas in Nigeria"
    },
    {
      "name": "Abuja",
      "description": "Abuja is the capital and eighth most populous city of Nigeria. Located in the centre of the country within the Federal Capital Territory (FCT), it is a planned city built mainly in the 1980s.",
    },
    {...}
  ]
}
```

## LGAs

States are futher split into local government areas (LGAs) and they can be accessed relative to the states. Here is an example that gets all the LGAs in Lagos state.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/c9aa6667-0c77-4674-b8fc-2e773c114bda/lgas -H "X-Api-Key:your-api-key"
```

You'll get the following response.

```json
{
  "message": "LGAs fetched",
  "success": true,
  "data": [
    {
      "id": "aedbc5ed-8ba6-41ca-bbf4-5491307c4615",
      "name": "Agege",
      "code": "agege",
      "postalCode": 100215,
      "description": "Agege is a suburb and local government area in the Ikeja Division of Lagos State, Nigeria.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "c9aa6667-0c77-4674-b8fc-2e773c114bda",
      "createdAt": "2021-03-15T10:26:10.692Z",
      "updatedAt": "2021-03-15T10:26:10.703Z",
      "url": "https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/c9aa6667-0c77-4674-b8fc-2e773c114bda/lgas/aedbc5ed-8ba6-41ca-bbf4-5491307c4615"
    },
    {
      "id": "99d0e288-d565-4532-b99e-44a67a61d450",
      "name": "Ajeromi-Ifelodun",
      "code": "ajeromi-Ifelodun",
      "postalCode": 102103,
      "description": "Ajeromi-Ifelodun is a Local Government Area in Badagry Division, Lagos State. It has some 57,276.3 inhabitants per square kilometer, among if not the world's densest.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "c9aa6667-0c77-4674-b8fc-2e773c114bda",
      "createdAt": "2021-03-15T10:26:10.692Z",
      "updatedAt": "2021-03-15T10:26:10.703Z",
      "url": "https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/c9aa6667-0c77-4674-b8fc-2e773c114bda/lgas/99d0e288-d565-4532-b99e-44a67a61d450"
    },
    {
      "id": "23093f9d-957d-4a88-b985-0bc87cc10404",
      "name": "Alimosho",
      "code": "alimosho",
      "postalCode": 100275,
      "description": "Alimosho is a Local Government Area in the Ikeja Division, Lagos State, Nigeria. It is the largest local government in Lagos, with 1,288,714 inhabitants, according to the official 2006 Census.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "c9aa6667-0c77-4674-b8fc-2e773c114bda",
      "createdAt": "2021-03-15T10:26:10.692Z",
      "updatedAt": "2021-03-15T10:26:10.703Z",
      "url": "https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/c9aa6667-0c77-4674-b8fc-2e773c114bda/lgas/23093f9d-957d-4a88-b985-0bc87cc10404"
    },
    {...}
  ]
}
```

### Other Operations on LGAs

LGA, like any other entity on WhereAPI, enables searching, pagination, sorting and ordering.

#### Pagination & Filtering

We can combine the `skip` and `take` query params to request data progressively. Here's an example where we get the `id` and `name` of 4 LGAs in Abuja, but skip the first 2.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/ac0974a1-3f1b-4e39-8bfa-703c00d8d668/lgas - H "X-Api-Key:your-api-key"
```

The first guid in this url is the `id` of Nigeria, while the second is the `id` of Abuja. They can pretty much be any Id of any other state.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/{{:countryId}}/states/{{:stateId}}/lgas?skip=2&take=4&fields=id,name - H "X-Api-Key:your-api-key"
```

Response

```json
{
  "message": "LGAs fetched",
  "success": true,
  "data": [
    {
      "id": "5bd542c7-290e-4da0-9523-650d168dc94a",
      "name": "Bagwai"
    },
    {
      "id": "dbba625b-1575-4926-b97c-1e9e2663549f",
      "name": "Bebeji"
    },
    {
      "id": "8873c5d9-ddfa-4cad-8c83-e4313582cf2c",
      "name": "Bichi"
    },
    {
      "id": "6098cc7d-f13b-476b-9408-5244822ab5f2",
      "name": "Bunkure"
    },
    {
      "id": "b93d7627-e9bb-40df-ae47-2d3e4156d23c",
      "name": "Dala"
    }
  ]
}
```
