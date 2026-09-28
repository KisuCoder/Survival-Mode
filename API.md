# API Contract

Base URL: `http://localhost:5000/api`

## Health Check
| Method | Endpoint | Request | Response |
|--------|----------|---------|----------|
| GET | `/health` | — | `{ status: "ok" }` |

## Authentication
| Method | Endpoint | Request | Response |
|--------|----------|---------|----------|
| POST | `/auth/register` | `{ name, email, password }` | `{ token, user }` |
| POST | `/auth/login` | `{ email, password }` | `{ token, user }` |

## Properties
| Method | Endpoint | Auth? | Request | Response |
|--------|----------|-------|---------|----------|
| GET | `/properties` | No | — | `[property]` |
| GET | `/properties/:id` | No | — | `property` |
| POST | `/properties` | Yes | `{ title, description, address, location, specs, price, imageUrls }` | `property` |
| PUT | `/properties/:id` | Yes | `{ ...fields to update }` | `property` |
| DELETE | `/properties/:id` | Yes | — | `204 No Content` |

**Query filters for GET /properties:**
`?minPrice=&maxPrice=&bedrooms=&bathrooms=&locationZone=`

## Favorites
| Method | Endpoint | Auth? | Response |
|--------|----------|-------|----------|
| GET | `/favorites` | Yes | `[property]` |
| POST | `/favorites/:propertyId` | Yes | `{ success: true }` |
| DELETE | `/favorites/:propertyId` | Yes | `{ success: true }` |

## Prediction (ML Gateway)

POST /api/predict

Request body (all 12 fields required):
{
  "area": 5000,                          // number
  "bedrooms": 3,                         // number
  "bathrooms": 2,                        // number
  "stories": 2,                          // number
  "parking": 1,                          // number
  "mainroad": "yes",                     // "yes" or "no"
  "guestroom": "no",                     // "yes" or "no"
  "basement": "no",                      // "yes" or "no"
  "hotwaterheating": "no",               // "yes" or "no"
  "airconditioning": "yes",              // "yes" or "no"
  "prefarea": "no",                      // "yes" or "no"
  "furnishingstatus": "semi-furnished"   // "furnished" | "semi-furnished" | "unfurnished"
}

Response:
{ "predicted_price": 6439755.25 }

Notes:
- Backend forwards this request to the Python ML microservice
  at http://localhost:8000/predict and returns its response unchanged.
- Frontend must send exactly these field names and value formats.
- ML service must be running on port 8000 for this endpoint to work.

## Auth Header Format
Protected routes require: