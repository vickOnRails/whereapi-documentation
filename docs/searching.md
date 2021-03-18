---
id: searching
title: Searching
---

What's an API without a search😳?

You can search on all resources that return multiple records. Let's see an example that searches for a particular state (Lagos) in Nigeria.

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?search=lagos -H "your apikey here"
```

Our response

```json
{
  "message": "States fetched successfully",
  "success": true,
  "data": [
    {
      "id": "c9aa6667-0c77-4674-b8fc-2e773c114bda",
      "name": "Lagos",
      "code": "lagos",
      "safeCode": "NG-LA",
      "postalCode": null,
      "description": "Lagos, sometimes referred to as Lagos State to distinguish it from Lagos Metropolitan Area, is a state located in southwestern geopolitical zone of Nigeria. The smallest in area of Nigeria's 36 states,with over 15 million population,[7] Lagos State is arguably the most economically important state of the country,",
      "capital": "Lagos",
      "cities": [
        "Ojo",
        "Epe",
        "Badagry",
        "Eko Atlantic",
        "Ikorodu",
        "Lekki",
        "Ikeja",
        "Lagos"
      ],
      "countryId": "f794ecd7-679e-4989-9be6-e081ac2f7145",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/c9aa6667-0c77-4674-b8fc-2e773c114bda"
    }
  ]
}
```

Let's see another example that returns multiple records

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?search=ab -H "your apikey here"
```

Our response

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
      "createdAt": "2021-03-15T10:26:08.035Z",
      "updatedAt": "2021-03-15T10:26:08.038Z",
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/cd269093-1687-4b31-8ec1-e978898b81fd"
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
      "url": "http://localhost:5000/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/ac0974a1-3f1b-4e39-8bfa-703c00d8d668"
    }
  ]
}
```

## Current Limitations

Search is on the `name` field. So you have to know the name of the state you're searching for. Ideally, Search should work on all fields and should be full text, but this is a little complex for me to approach at the moment.

I hope to implement it sometime in the future.
