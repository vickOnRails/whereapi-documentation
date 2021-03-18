---
id: pagination
title: Pagination
---

There are 774 local government areas (LGAs) in Nigeria. That's a lot of data to send at once.

WhereAPI limits rresponses to 20 records by default. But you can override it with the `take` query param.

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
      "createdAt": "2021-03-15T10:26:10.689Z",
      "updatedAt": "2021-03-15T10:26:10.702Z",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas/c78ae665-0d44-4c1f-920d-e589d7daf657"
    },
    {
      "id": "3d57b406-cf21-4575-a817-6e42c06d659c",
      "name": "Albasu",
      "code": "albasu",
      "postalCode": 800001,
      "description": "Albasu is a Local Government Area in Kano State, Nigeria. Its headquarters are in the town of Albasu.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "e4c18d52-959b-4287-b4c6-10d4879e300e",
      "createdAt": "2021-03-15T10:26:10.689Z",
      "updatedAt": "2021-03-15T10:26:10.702Z",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas/3d57b406-cf21-4575-a817-6e42c06d659c"
    },
    {
      "id": "5bd542c7-290e-4da0-9523-650d168dc94a",
      "name": "Bagwai",
      "code": "bagwai",
      "postalCode": 800001,
      "description": "Bagwai is a local government area in Kano State, Nigeria. Its headquarters are in the town of Bagwai.",
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "stateId": "e4c18d52-959b-4287-b4c6-10d4879e300e",
      "createdAt": "2021-03-15T10:26:10.689Z",
      "updatedAt": "2021-03-15T10:26:10.702Z",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/e4c18d52-959b-4287-b4c6-10d4879e300e/lgas/5bd542c7-290e-4da0-9523-650d168dc94a"
    },
    {...}
  ]
}
```

## Skipping

## Pagination with Skip & Take
