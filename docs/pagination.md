---
id: pagination
title: Pagination
---

There are 774 local government areas (LGAs) in Nigeria. If a user of this API requests this data, it'll be bad practice to send such a huge payload at once.

WhereAPI limits responses to 20 records by default. But you can override it with the `take` query param.

Here's how we would go about requesting the first 40 LGAs in Kano. Pay attention to `?take=40`

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas?take=40 -H "your api key"
```

Our response (First 40 records)

```json
{
  "message": "LGAs fetched",
  "success": true,
  "data": [
    {
      "id": "c78ae665-0d44-4c1f-920d-e589d7daf657",
      "name": "Ajingi",
      "code": "ajingi",
      "postalCode": 800001,
      "description": "Ajingi is a Local Government Area in Kano State, Nigeria. Its headquarters are in the town of Ajingi.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "e4c18d52-959b-4287-b4c6-10d4879e300e",
      "url": "http://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas/c78ae665-0d44-4c1f-920d-e589d7daf657"
    },
    {
      "id": "3d57b406-cf21-4575-a817-6e42c06d659c",
      "name": "Albasu",
      "code": "albasu",
      "postalCode": 800001,
      "description": "Albasu is a Local Government Area in Kano State, Nigeria. Its headquarters are in the town of Albasu.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "e4c18d52-959b-4287-b4c6-10d4879e300e",
      "url": "http://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas/3d57b406-cf21-4575-a817-6e42c06d659c"
    },
    {
      "id": "5bd542c7-290e-4da0-9523-650d168dc94a",
      "name": "Bagwai",
      "code": "bagwai",
      "postalCode": 800001,
      "description": "Bagwai is a local government area in Kano State, Nigeria. Its headquarters are in the town of Bagwai.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "e4c18d52-959b-4287-b4c6-10d4879e300e",
      "url": "http://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas/5bd542c7-290e-4da0-9523-650d168dc94a"
    },
    {...}
  ]
}
```

## Skipping

A huge part of paginating is changing the combination of the `skip` and `take` query params. You can perform skips on WhereAPI with the `skip` query param like so.
\

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas?skip=40 -H "your api key"
```

This skips the first 40 entries from the database

## Pagination with Skip & Take

I'll be adding a few examples of the pagination with `skip` & `take` later.
