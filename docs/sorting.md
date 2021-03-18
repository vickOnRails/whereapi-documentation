---
id: sorting
title: Sorting
---

You'd want to order information alphabetically. WhereAPI provides an `order_by` query param you can use to order collections of data. Here's an a request for all the states in Nigeria

```bash
curl -H "your apikey here" https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?order_by=name
```

Your response would like this

```json
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
      "cities": ["Aba"],
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
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
      "url": "https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/ac0974a1-3f1b-4e39-8bfa-703c00d8d668"
    },
    {...}
  ]
}
```

## Sorting Direction

Ading a field to the `order_by` query param automatically orders the response in ascending order. If we wanted to order by the `name` field in descending order, we'll modify the query by adding a `-` sign to the beginning of the field name. (`states?order_by=-name`)

```bash
curl -H "your apikey here" https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?order_by=-name
```

This orders the states by descending order of names.

```json
{
  "message": "States fetched successfully",
  "success": true,
  "data": [
    {
      "id": "fca35659-af03-4f34-8b57-ec4dfc0d448d",
      "name": "Zamfara",
      "code": "zamfara",
      "safeCode": "NG-ZA",
      "postalCode": null,
      "description": "Zamfara is a state in northwestern Nigeria. Its capital is Gusau",
      "capital": "Gusau",
      "cities": [],
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "createdAt": "2021-03-15T10:26:08.038Z",
      "updatedAt": "2021-03-15T10:26:08.038Z",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/fca35659-af03-4f34-8b57-ec4dfc0d448d"
    },
    {
      "id": "9cec8bf1-8b07-401b-9dae-e89c3402087b",
      "name": "Yobe",
      "code": "yobe",
      "safeCode": "NG-YO",
      "postalCode": 320001,
      "description": "Yobe is a state located in northeastern Nigeria. A mainly agricultural state, it was created on August 27, 1991. Yobe State was carved out of Borno State. The capital of Yobe State is Damaturu; its largest city is Potiskum.",
      "capital": "Damaturu",
      "cities": ["Potiskum"],
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "createdAt": "2021-03-15T10:26:08.038Z",
      "updatedAt": "2021-03-15T10:26:08.038Z",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/9cec8bf1-8b07-401b-9dae-e89c3402087b"
    },
    {...}
  ]
}
```

:::info
You can currently sort by the `name` field on all endpoints returning multiple entities. This is to keep the implementation simple. Sorting for other fields will be added later.
