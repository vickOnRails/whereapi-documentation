---
id: filtering
title: Filtering
---

When you make a `GET` request to any WhereAPI endpoint, you get a default load of fields. It's a great practice to request only what you want. This section will walk you through tailoring your response payload.

Here's what a default request for states in Nigeria returns

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
    },
    {...}
  ]
}
```

## Request only what you want

Let's be honest, we don't need all these fields. You can customize the fields in your response with the `fields` query param. Just provide a comma-separated list of items to the `fields` query param

Let's assume we want only the `name` and `description` fields. Here's how we'll go about it

```bash
curl https://whereapis-africa.herokuapp.com/api/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?fields=name,description -H "your apikey here"
```

Take a closer look

```bash
?fields=name,description
```

Our response will be similar to

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
      "description": "Abuja is the capital and eighth most populous city of Nigeria. Located in the centre of the country within the Federal Capital Territory (FCT), it is a planned city built mainly in the 1980s."
    },
    {
      "name": "Adamawa",
      "description": "Adamawa is a state in northeastern Nigeria, whose capital and largest city is Yola. In 1991, when Taraba State was carved out from Gongola State, the geographical entity Gongola State was renamed Adamawa State, with four administrative divisions: Adamawa, Michika, Ganye, Mubi and Numan"
    },
    {...}
  ]
}
```

Implementing this in your app will greatly reduce your response payload and make your app respond faster.

:::info
If you include a field that doesn't exist `?fields=jasdasd,askdasd`, the API will ignore it and send only valid fields.
