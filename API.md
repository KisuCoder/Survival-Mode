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
| Method | Endpoint | Request | Response |
|--------|----------|---------|----------|
| POST | `/predict` | `{ squareMeters, bedrooms, bathrooms, floorNumber, yearBuilt, locationZone }` | `{ predictedPrice, confidenceInterval: [low, high] }` |

**Note:** The `/predict` endpoint forwards the request to the Python ML microservice at `http://localhost:8000/predict` and returns its response.

## Auth Header Format
Protected routes require: