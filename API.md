# API Contract

Base URL: `http://localhost:5000/api`

All requests with a body must send header: `Content-Type: application/json`

Protected routes require header: `Authorization: Bearer <token>`

All errors return: `{ "error": "message" }`

---

## Health Check

| Method | Endpoint | Auth? | Response |
|--------|----------|-------|----------|
| GET | `/health` | No | `{ "status": "ok" }` |

---

## Authentication

| Method | Endpoint | Auth? | Request | Response |
|--------|----------|-------|---------|----------|
| POST | `/auth/register` | No | `{ name, email, password }` | `{ token, user }` |
| POST | `/auth/login` | No | `{ email, password }` | `{ token, user }` |

Errors:
- Register: 409 if email already in use
- Login: 401 if credentials invalid

---

## Properties

| Method | Endpoint | Auth? | Request | Response |
|--------|----------|-------|---------|----------|
| GET | `/properties` | No | — | `[property]` |
| GET | `/properties/:id` | No | — | `property` |
| POST | `/properties` | Yes | see body below | `property` (201) |
| PUT | `/properties/:id` | Yes (owner) | `{ ...fields to update }` | `property` |
| DELETE | `/properties/:id` | Yes (owner) | — | 204 No Content |
| DELETE | `/properties/admin/:id` | Yes (admin only) | — | 204 No Content |

POST /properties request body:

    {
      "title": "Beach House",
      "description": "Nice place",
      "address": "Batangas",
      "area": 5000,
      "bedrooms": 3,
      "bathrooms": 2,
      "stories": 2,
      "parking": 1,
      "mainroad": "yes",
      "guestroom": "no",
      "basement": "no",
      "hotwaterheating": "no",
      "airconditioning": "yes",
      "prefarea": "no",
      "furnishingstatus": "semi-furnished",
      "price": 5000000,
      "imageUrls": [],
      "location": { "type": "Point", "coordinates": [121.0, 14.5] }
    }

Field rules:
- `area`, `bedrooms`, `bathrooms`, `stories`, `parking` → numbers
- `mainroad`, `guestroom`, `basement`, `hotwaterheating`, `airconditioning`, `prefarea` → `"yes"` or `"no"`
- `furnishingstatus` → `"furnished"` | `"semi-furnished"` | `"unfurnished"`
- `location` is optional
- `postedBy` is set automatically from the token

Errors:
- 403 if not the owner (for PUT/DELETE) or not admin (for admin route)
- 404 if property not found

---

## Favorites

| Method | Endpoint | Auth? | Response |
|--------|----------|-------|----------|
| GET | `/favorites` | Yes | `[property]` (populated) |
| POST | `/favorites/:propertyId` | Yes | `{ success: true, favorites: [...] }` |
| DELETE | `/favorites/:propertyId` | Yes | `{ success: true, favorites: [...] }` |

Errors:
- 404 if property doesn't exist (on POST)

---

## Prediction (ML Gateway)

| Method | Endpoint | Auth? | Request | Response |
|--------|----------|-------|---------|----------|
| POST | `/predict` | No | see below | `{ predicted_price }` |

Request body (all 12 fields required):

    {
      "area": 5000,
      "bedrooms": 3,
      "bathrooms": 2,
      "stories": 2,
      "parking": 1,
      "mainroad": "yes",
      "guestroom": "no",
      "basement": "no",
      "hotwaterheating": "no",
      "airconditioning": "yes",
      "prefarea": "no",
      "furnishingstatus": "semi-furnished"
    }

Response:

    { "predicted_price": 6439755.25 }

Notes:
- Backend forwards the request to the Python ML microservice at `http://localhost:8000/predict`
- The ML service must be running on port 8000
- Frontend must send exactly these field names and value formats

Errors:
- 500 if ML server is unreachable