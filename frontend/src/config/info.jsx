const properties = [
  {
    id: 1,
    type: "Apartment",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04OTgwLTczYjUtOGNkNy01M2I0NzE2NzNjMGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04ODQxLTczODctYTQ2MS1hMWFjNTk0MDM3ZTYuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04YTFjLTczNjQtYTg5Ni1hZTQ1N2Y4NWE1NjEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04ODI1LTczZTctOGEwMy0wMzk2N2Q5ZjY3M2QuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04N2ZlLTcyMWItOGRhOC0wMDMxZTRiNmQ4MjMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04NmZiLTcwOTctYjA5Ni1mNmQwMmVkNzM1NDAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04N2ExLTcxMWYtYTRjZi03ZjJiMzVmMWVhMWYuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0MTcwLTIyNDktNzE3NS04NGFjLTIxM2Q1N2FhMWJjYi8wMTk5NDE3Ny04OGI1LTcwOWYtOGM2ZC1kNjI0NDJiYmE2YTkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19"
    ],
    price: "₱12,900,000",
    numericPrice: 12900000,
    title: "Studio Apartment near BGC",
    location: "Circuit Makati, Makati City",
    nearMainRoad: true,
    stories: 20,
    hotwater: "yes",
    parkingArea: 1,
    basement: "no",
    guestroom: "no",
    furnishingStatus: "furnished",
    bedrooms: 2,
    bathrooms: 2,
    area: 82,
    yearBuilt: 2022,
    description:
      "A modern studio apartment located near business districts, restaurants, and transportation."
  },
  {
    id: 2,
    type: "Condominium",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWVhLTFjMTctNzZmMS04NGZkLTIxYzU4MmRjMzEwYy8wMWEwYTVlYS00ZTgxLTcwY2EtOGIzNS1hZTQ0M2ZlYTYxOWQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWVhLTFjMTctNzZmMS04NGZkLTIxYzU4MmRjMzEwYy8wMWEwYTVlYS00ZWM2LTczZDUtOGU2OC1iYWJkNGQ4ZTNkZTkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWVhLTFjMTctNzZmMS04NGZkLTIxYzU4MmRjMzEwYy8wMWEwYTVlYS00ZWVhLTcyMWEtOWI4NC05NjBhOTliYjVjMjMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWVhLTFjMTctNzZmMS04NGZkLTIxYzU4MmRjMzEwYy8wMWEwYTVlYS00ZWE1LTcwZjctOTg5ZC1lZTE5MjljMzA0OTguanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19"
    ],
    nearMainRoad: true,
    price: "₱11,500,000",
    numericPrice: 11500000,
    title: "High-Rise 1BR with City View",
    location: "Taguig City - BGC",
    hotwater: "yes",
    basement: "no",
    guestroom: "no",
    furnishingStatus: "furnished",
    stories: 1,
    parkingArea: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    yearBuilt: 2021,
    description:
      "A high-rise condominium unit with a modern interior and city views.",

  },
  {
    id: 3,
    type: "Condominium",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJlNGM2Y2YyOS00NWNhLTQ4ZmMtYTU0NC02NDExMjE0MTRkMDkvZTRjNmNmMjktNDVjYS00OGZjLWE1NDQtNjQxMTIxNDE0ZDA5XzEuMC1QSC0yMDMtUEotNzk2LTE5NTU1NDgxODQ1YmM0MTMyZWU3YjBkLTEtMTIwMC04MDAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJlNGM2Y2YyOS00NWNhLTQ4ZmMtYTU0NC02NDExMjE0MTRkMDkvZTRjNmNmMjktNDVjYS00OGZjLWE1NDQtNjQxMTIxNDE0ZDA5XzEuMC1QSC0yMDMtUEotNzk2LTEwMDA5NjQ5ODg1YmM0MTMxNzQwMjFkLTEtMTIwMC04MDAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJlNGM2Y2YyOS00NWNhLTQ4ZmMtYTU0NC02NDExMjE0MTRkMDkvZTRjNmNmMjktNDVjYS00OGZjLWE1NDQtNjQxMTIxNDE0ZDA5XzEuMC1QSC0yMDMtUEotNzk2LTExODg2ODQ4Mzg1YmM0MTMxMzAzMjhiLTEtMTIwMC04MDAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJlNGM2Y2YyOS00NWNhLTQ4ZmMtYTU0NC02NDExMjE0MTRkMDkvZTRjNmNmMjktNDVjYS00OGZjLWE1NDQtNjQxMTIxNDE0ZDA5XzEuMC1QSC0yMDMtUEotNzk2LTEwOTgwOTc5MjM1YmM0MTMyMzUyM2FhLTEtMTIwMC04MDAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJlNGM2Y2YyOS00NWNhLTQ4ZmMtYTU0NC02NDExMjE0MTRkMDkvZTRjNmNmMjktNDVjYS00OGZjLWE1NDQtNjQxMTIxNDE0ZDA5XzEuMC1QSC0yMDMtUEotNzk2LTE2MjMzOTM2NjViYzQxMzI3YmM2YjUtMS0xMjAwLTgwMC5qcGciLCJicmFuZCI6ImxhbXVkaSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJlNGM2Y2YyOS00NWNhLTQ4ZmMtYTU0NC02NDExMjE0MTRkMDkvZTRjNmNmMjktNDVjYS00OGZjLWE1NDQtNjQxMTIxNDE0ZDA5XzEuMC1QSC0yMDMtUEotNzk2LTE4OTE3OTMxMjViYzQxMzM1MDA3YTMtMS0xMjAwLTgwMC5qcGciLCJicmFuZCI6ImxhbXVkaSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMTk3NjM4MC01NzU5LTdlMjgtYTQyMC0yNzI0ODYyMjM4YTEvMjU5ODc3MzljMzVhNDJhYzhkMDE4NmQ4NzlhMzhmOWViODg5ZjljM2YwOGJmYjZjMWE4ZGE0NWE2ZTQ5M2RjOC5qcGVnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMTk3NjM4MC01NzU5LTdlMjgtYTQyMC0yNzI0ODYyMjM4YTEvNWQ1NTQ4MDM5ZjllZDI3YzgxNDRhNWZmNWVjNDA3NDBkMGVkNDQ4YjM1Y2Y2ODhmMmY2OTBhZjIwNWNiOTViYS5qcGVnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMTk3NjM4MC01NzU5LTdlMjgtYTQyMC0yNzI0ODYyMjM4YTEvMDIxYjZhMzBhYzJiZDE3ZWNjMWQ0YzhmZWQwNDA2ZmNmZTY1MDVkMjBlNmYzZWYwODkxNmVhMmYwYWM1OGI0MS5qcGVnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19"
    ],
    nearMainRoad: true,
    price: "₱5,800,000",
    numericPrice: 5800000,
    title: "Modern 3BR Condominium",
    location: "Diliman, Quezon City",
    furnishingStatus: "Semi-furnished",
    basement: "no",
    guestroom:"no",
    hotwater: "yes",
    parkingArea: 1,
    stories: 1, 
    bedrooms: 3,
    bathrooms: 4,
    area: 156,
    yearBuilt: 2000,
    description: 
      "A spacious three -bedroom condominium designed for comfortable city living. This towering residence brings sophistication and luxury to the urban landscape. With studio, one-three bedroom units, this property blends residential comforts with modern conveniences."    
  },
  {
    id: 4,
    type: "Townhouse",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE3YzBhLTkxOWItNzI4OC1iNzZjLWEyNTM5MGU5OTMyZC8wMTlhN2MwYi0zN2NlLTcxNzItYTAwZi1kYjk4ZWVlMzU1MDAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE3YzBhLTkxOWItNzI4OC1iNzZjLWEyNTM5MGU5OTMyZC8wMTlhN2MwYi0yNzZmLTczMzUtOWRmZi1kMGJkMGRhMWRhZTYuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE3YzBhLTkxOWItNzI4OC1iNzZjLWEyNTM5MGU5OTMyZC8wMTlhN2MwYi0yYmJlLTczNmQtYTk0MC0zOWMwOTI3M2ZhM2YuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE3YzBhLTkxOWItNzI4OC1iNzZjLWEyNTM5MGU5OTMyZC8wMTlhN2MwYi0yZjI1LTcxODEtOGE3ZS05MDMxMDU2MTA1NWEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE3YzBhLTkxOWItNzI4OC1iNzZjLWEyNTM5MGU5OTMyZC8wMTlhN2MwYi0zMGUwLTcxMDMtOTE1MC0zODk5NzYyNmI1MmQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE3YzBhLTkxOWItNzI4OC1iNzZjLWEyNTM5MGU5OTMyZC8wMTlhN2MwYi0zMzZlLTcwOTUtYmU1My0wNDJiZGMzZmI3N2UuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJkMTZkMzc0NS03MDY2LTRjY2ItOTY2OC0wOTY2ZWE4MWQxN2MvZDE2ZDM3NDUtNzA2Ni00Y2NiLTk2NjgtMDk2NmVhODFkMTdjXzEwYThiN2VjLTc0YWYtNGRmNS05ZTY4LTY2Yzc0ZjEwMzcxYy5qcGciLCJicmFuZCI6ImxhbXVkaSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NjUwLCJmaXQiOiJjb3ZlciJ9fX0="
    ],
    nearMainRoad: false,
    price: "₱7,200,000",
    numericPrice: 7200000,
    title: "Townhouse",
    location: "Antipolo, Rizal",
    furnishingStatus: "furnished",
    basement: "no",
    guestroom:"no",
    hotwater: "yes",
    parkingArea: 2,
    stories: 1, 
    bedrooms: 3,
    bathrooms: 2,
    area: 99,
    yearBuilt: 2025,
    description:
      "A family-friendly townhouse with a spacious living area and three floors of comfortable living space."
  },
  {
    id: 5,
    type: "House",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyMy1mY2IxLTcxMzktYWU2Ny01YjlhZWJlYWI3OGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyMy1mZGViLTcyNTctOTc2OS1mOGRmYjg1ZDYwYmUuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyMy1mZTg1LTcwYTktYWU5MS0wZTc0YTRmZDkwYjIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyMy1mZWNmLTcyYzktOTU5OC02MWYzNjg1NmJkYjkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyMy1mZjc5LTczYzAtOTU1NC1mOTM5ZTlmZDNmZmUuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyMy1mZmY5LTczN2UtYTU4Ny01ZmY5ZGQxOWJkYzAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyNC0wMDc0LTcwNjQtODlkMS0zZmU5YzQzMDg3OTQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyNC0wMGI5LTcyMDktODViNC01MWYzYjgyZTdhMTguanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyNC0wMTYzLTcwNWYtYWZhOC00MWNmNTY2ZDUwMmEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTc2M2VjLWU2ZDItNzUyZS1hMzZiLTcwNmRhY2IxNWNhMS8wMTlkODYyNC0wMWVmLTczMTAtOTgxYy0wZDAzN2VjZDhjMWYuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",

    ],
    nearMainRoad: false,
    price: "₱120,300,000",
    numericPrice: 12030000,
    title: "House",
    location: "First District, Pasig, Eastern Manila District",
    furnishingStatus: "furnished",
    basement: "no",
    guestroom:"no",
    hotwater: "yes",
    parkingArea: 2,
    stories: 1, 
    bedrooms: 3,
    bathrooms: 3,
    area: 400,
    yearBuilt: 2024,
    description:
      "A modern house with efficient use of space and contemporary design elements, perfect for a family."
  },
  {
    id: 6,
    type: "Condominium",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWY1LTQ2YzItNzE1Mi1iODYyLTM5MTJjZmVlNzhlOC8wMWEwYTVmNi00NzRhLTcxMjctODEwMS1lYmM1MGRlNmZjMjYucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWY1LTQ2YzItNzE1Mi1iODYyLTM5MTJjZmVlNzhlOC8wMWEwYTVmNi00OGNlLTcyNGMtYTkxZS1iNDZjOTQ4M2Q3YjgucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWY1LTQ2YzItNzE1Mi1iODYyLTM5MTJjZmVlNzhlOC8wMWEwYTVmNi00OTIwLTcwNGUtOGUxMC0zMjg2ZWJkZDEwNzEucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWY1LTQ2YzItNzE1Mi1iODYyLTM5MTJjZmVlNzhlOC8wMWEwYTVmNi00OTY2LTczM2UtOTA2OC0wZmM3ZDU3OWJlZGMucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWY1LTQ2YzItNzE1Mi1iODYyLTM5MTJjZmVlNzhlOC8wMWEwYTVmNi00YTA2LTczMTEtYjNlMC0yNTQ4MTljNGVhYTEucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTBhNWY1LTQ2YzItNzE1Mi1iODYyLTM5MTJjZmVlNzhlOC8wMWEwYTVmNi00YThlLTcyNWQtOWFmOC1lNjM3NWYwYTMzYzcucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",

    ],
    price: "₱19,500,000",
    numericPrice: 19500000,
    title: "Spacious Modern Residence",
    location: "Vion Tower, Chino Roces Avenue, Makati City",
    nearMainRoad: true,
    furnishingStatus: "semi-furnished",
    basement: "no",
    guestroom:"no",
    hotwater: "yes",
    parkingArea: 2,
    stories: 1, 
    bedrooms: 2,
    bathrooms: 2,
    area: 71,
    yearBuilt: 2021,
    description:
      "A spacious modern residence suitable for larger families."
  },
   {
    id: 7,
    type: "Condominium",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1Mi1jMTljLTczZGUtOGIzZC0yMTAzMmM1NmRjZWMucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My0zMTY0LTczMjUtYTdlOS1kZGViOTIyMTA2MTUucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My0zMjZhLTczNzYtYTJmOC05NjBhMWQ1ZmRlYTYucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My1hODdhLTcxZTctYWIxMi1iYjA5ZTUxNzM5YjcucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My0zMmZhLTczYTYtYTk0NC0zNDJkYjk2MTU3ZmEucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My1hOTIxLTcwYWMtOTkxYy0yZmNlOGI0ODVhMjcucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My0zMmFjLTcwODctYmQ2NC1hZmYyYzE1YjEyMzQucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWZiMTFmLWJlODctNzYxOC1iZGFkLWZkNjJhOWEwNTdhNC8wMTlmYjc1My1hOWViLTcwNDEtYmJhNy0zMTIxNjBhOTc3YzMucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    ],
    price: "₱36,500,000",
    numericPrice: 36500000,
    title: "2 Bedroom Condo in BGC",
    location: "Fort Bonifacio, Taguig City",
    nearMainRoad: true,
    furnishingStatus: "furnished",
    basement: "no",
    guestroom:"no",
    hotwater: "yes",
    parkingArea: 2,
    stories: 1, 
    bedrooms: 3,
    bathrooms: 3,
    area: 84,
    yearBuilt: 2025,
    description:`Luxury Amenities:
Elegant art-inspired grand lobby with concierge
Infinity swimming pool
Fully equipped fitness center
Function rooms
Game room
Children's play area
Daycare center
Landscaped gardens and outdoor spaces
High-speed elevators
Keycard access system
24-hour security with CCTV monitoring

Details:
- Garage 
- Balcony
- Integral kitchen
- Alarm
- Partly furnished
- Air conditioning
- Equipped kitchen
- Panoramic view
- Electricity
- Laundry room`
  },
  // new begi   ning
  {
    id: 8,
    type: "House and Lot",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi05MTY2LTcyN2QtOWMwYS02NjRhOTQ5M2I3Y2QuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi04YzZiLTcxNmUtODg0My05NmRjNTQzMzhiNTMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi04ZGM2LTczMGEtODQwNy1mNmZjMGZkMmJlNmUuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi04ZTM5LTcyMTMtYWJlZS0zY2RiYTU1N2RlZDIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi04ZWQ5LTcwMjYtOWUwMi0xNTY1YWI0MGRiOWQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi04ZmI2LTcyZTEtOGE3MS1hNjExZTRlMjliZWMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi04ZmRlLTcwYjEtOTdiYy1hMTU3MDUxOGEzMWQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi05MDBiLTcyNjItOGI0OC1mNzdmYmE0ZGUzMTMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi05MDQ5LTczMjgtOGIwZi1iZDM0YTE2MmNhMDMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWIyMjQzLTk3ODUtNzIwMy1hZjFmLTQwMGM3ZTk2OGY3Zi8wMTliMjI2Zi05MGYxLTcwYTEtOWM0Ni1iNmJlYmJjYjlhYjUuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",

    ],
    nearMainRoad: true,
    price: "₱14,800,000",
    numericPrice: 14800000,
    title: "Modern 3-Storey Single Family House in Antipolo",
    location: "Mambugan, Antipolo City, Rizal",
    basement: "no",
    guestroom:"no",
    hotwater: "yes",
    furnishingStatus: "unfurnished",
    parkingArea: 2,
    stories: 3, 
    bedrooms: 4,
    bathrooms: 4,
    area: 450,
    yearBuilt: 2026,
    description: `House & Lot For Sale
Lot Area: 113sqm
Gross Floor Area: 155sqm
CORNER LOT
Single Attached
4 Spacious Bedrooms
3 Toilet & Bath
Carport for 2 SUV
Dirty Kitchen
Fence and gated
Dining area, Kitchen,
Free: cooktop, rangehood, built in oven
Floor Free, No landslide, Far from Faultline!`
  },{
    id: 9,
    type: "Townhouse",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC03NzE3LTcwZGItOTZkMy1lYmY2ZTIyZTRlN2QuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jMzY4LTcyZjMtOTZiNC01YmZkNWYzNDgyYWIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jNDE1LTcxYjAtODAzYi0xODcwNjcwOWM5YjYuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jNDM3LTczYjQtOGI2Yy1lMDc5MmJjZWRkMzcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jNDdkLTcyZWMtODgyMi05NjU2NWYyN2EyODIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jNGYwLTcwOTEtYTUzZi0xMWE1NmE4OTZjNDcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jNTBmLTcyOGItYTg4OS0xYjIzYWZlMzM4OGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA5MGIzLTg5ODItNzA1Zi1hZTM5LWU0NTBmMjExNTY2OC8wMWEwOTBiOC1jNWM0LTcxMDYtODJmNS1jNjJhY2M3YTA0Y2YuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",

    ],
    nearMainRoad: true,
    price: "₱42,500,000",
    numericPrice: 42500000,
    title: "5BR Townhouse",
    location: "C. Benitez Street, Cubao, 4th District, Quezon City",
    furnishingStatus: "Unfurnished",
    basement: "no",
    guestroom:"yes",
    hotwater: "yes",
    parkingArea: 3,
    stories: 1, 
    bedrooms: 5,
    bathrooms:5,
    area: 359,
    yearBuilt: 2026,
    description: "These modern 5-bedroom townhouses offer generous living spaces, multiple-car garages, and the flexibility to accommodate a growing family"
  },{
    id: 10,
    type: "House and Lot",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWNhZWZlLThiODQtNzY0YS05OTQzLTMxNGY4MDJlNDQwMS8wMTljYWYwMy1hYWZkLTcxMjItYjc5MC00NDE5ZDFjOGUwNjQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWNhZWZlLThiODQtNzY0YS05OTQzLTMxNGY4MDJlNDQwMS8wMTljYWYwMy1hYmViLTcyMWUtYmRlNC1lZTQzMGVmZTZiMmUuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWNhZWZlLThiODQtNzY0YS05OTQzLTMxNGY4MDJlNDQwMS8wMTljYWYwMy1hYzNkLTczZjgtYmVlZC03ZmI4Y2FjNGE2NTcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWNhZWZlLThiODQtNzY0YS05OTQzLTMxNGY4MDJlNDQwMS8wMTljYWYwMy1hYzYwLTcyNDItYmYzZi01MDgxMzVkNTg0ZjMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWNhZWZlLThiODQtNzY0YS05OTQzLTMxNGY4MDJlNDQwMS8wMTljYWYwMy1hYzg1LTcxYTQtYmVlNi01MmFmNmRhYjBkNGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWNhZWZlLThiODQtNzY0YS05OTQzLTMxNGY4MDJlNDQwMS8wMTljYWYwMy1hY2NiLTcyNzktYWNhYi0xMzk0ZDNlODYxODcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19"
    ],
    nearMainRoad: true,
    price: "₱4,696,119",
    numericPrice: 4696119,
    title: "2-Bedroom Condominium in Malate",
    location: "East Capitol Drive, Pasig City",
    hotwater: "yes",
    basement: "no",
    guestroom: "no",
    furnishingStatus: "furnished",
    parkingArea: 3,
    stories: 2, 
    bedrooms: 4,
    bathrooms: 4,
    area: 1410,
    yearBuilt: 2017,
    description: `Modern 4BR House near skyway Twin Tower, Estancia Mall, Ayala Mall The 30th, Sharila Mall.
    Property Features:
• 3-storey modern house
• 4 spacious bedrooms, all with own toilet & bath
• Bright kitchen with island counter
• Powder room for guests
• Lanai & dedicated laundry area
• 2-car garage + 1 street parking`
  },
  {
    id: 11,
    type: "Apartment",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJiYzA5YjE2MC0xNjVmLTQ1ZjktODkwOC04N2NkNDk2YWJmMGEvYmMwOWIxNjAtMTY1Zi00NWY5LTg5MDgtODdjZDQ5NmFiZjBhX2M0NGZjODZkLTdjYmYtNDAyMi04YjFiLTg3YzQyOTAwMjE1YS5qcGciLCJicmFuZCI6ImxhbXVkaSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTNmMDk0LTkxYzItNzg4NS05MjYwLWU2NjkyODhmMzRlZC8wMTlmNmQ2Mi0xMDZmLTcyYjAtOTI1Yi1iNzcwZTQwOTA5YzAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTNmMDk0LTkxYzItNzg4NS05MjYwLWU2NjkyODhmMzRlZC8wMTlmNmQ2Mi0wZmFiLTcxZDQtODVkZi1hYmI4ZmEyMWQ3ZjQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTNmMDk0LTkxYzItNzg4NS05MjYwLWU2NjkyODhmMzRlZC8wMTlmNmQ2Mi0wZmNlLTcxYzQtODdhNy0xMjY4MDQxN2IwNjYuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTNmMDk0LTkxYzItNzg4NS05MjYwLWU2NjkyODhmMzRlZC8wMTlmNmQ2Mi0xMDBkLTcyNmYtYTAyOS05YjA5MGQyNzk0YmMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",

    ],
    nearMainRoad: true,
    price: "₱5,800,000",
    numericPrice: 5800000,
    title: "Multi-Unit Residential Apartment Building",
    location: "Project 8, Quezon City",
    hotwater: "yes",
    basement: "no",
    guestroom: "no",
    furnishingStatus: "furnished",
    parkingArea: 3,
    stories: 2, 
    bedrooms: 6,
    bathrooms: 4,
    area: 33,
    yearBuilt: 2019,
    description: `A breathtaking view from the balcony of this high floor unit
    This well maintained unit is 33 sqm and you can enjoy first class amenities.`
  },
  {
    id: 12,
    type: "Apartment",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTExZTVkLWMxYTctNzdhNS1hMmI5LTIxYTNlMDIxYzcxZi8wMWExMWU1ZS01YWJkLTcxOTktYTBmZS05ZDI3ZTVjMWM4MzkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTExZTVkLWMxYTctNzdhNS1hMmI5LTIxYTNlMDIxYzcxZi8wMWExMWU1ZS01YTBmLTcwMDUtYWQ2Mi00MDM3ODZkNDMyMGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTExZTVkLWMxYTctNzdhNS1hMmI5LTIxYTNlMDIxYzcxZi8wMWExMWU1ZS01YmIwLTcyM2EtYmI4Yy1lNDZmZWJiOTQwNWEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTExZTVkLWMxYTctNzdhNS1hMmI5LTIxYTNlMDIxYzcxZi8wMWExMWU1ZS01YjZhLTcxMWItYTE5ZS1iNDQzMDllZTY3OTkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",

    ],
    nearMainRoad: true,
    price: "₱18,900,000",
    numericPrice: 18900000,
    title: "Elegant Single Detached House in Taguig",
    location: "Ususan, Taguig City",
    hotwater: "yes",
    basement: "no",
    guestroom: "no",
    furnishingStatus: "furnished",
    stories: 1, 
    parkingArea: 1,
    bedrooms: 3,
    bathrooms: 3,
    area: 190,
    yearBuilt: 2023,
    description: `EAST GALLERY
HIGH FLOOR
WITH BALCONY`
  },{
    id: 13,
    type: "Apartment",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiI3YTJkOGJhNS1hODYyLTRkYjEtYmFlOS0zN2QwNTAyZDIyZDAvN2EyZDhiYTUtYTg2Mi00ZGIxLWJhZTktMzdkMDUwMmQyMmQwXzEwZjk5ODE3LTU0ODctNDc4Ny04MjNiLTYzMTAyNWI3ZDhhOC5qcGciLCJicmFuZCI6ImxhbXVkaSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA2YmE2LWRhODMtNzNhNS05NmZmLWM0Njg1OTljYjE1NS8wMWEwNmJiMS0yY2RmLTczY2YtOGMyNS1iY2FmZTZmMTIxMzUuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA2YmE2LWRhODMtNzNhNS05NmZmLWM0Njg1OTljYjE1NS8wMWEwNmJiMS0yZTA2LTcxNjktOGE3ZC0xOWEzYThjYmU4ZTcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA2YmE2LWRhODMtNzNhNS05NmZmLWM0Njg1OTljYjE1NS8wMWEwNmJiMS0yZTMyLTcyMmMtODk4OC1mMGQ3ZWQ0MWNmNzguanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA2YmE2LWRhODMtNzNhNS05NmZmLWM0Njg1OTljYjE1NS8wMWEwNmJiMS0yZTcxLTcxNTktYmNkNC05OTkwNjk4MTQ1NzkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxYTA2YmE2LWRhODMtNzNhNS05NmZmLWM0Njg1OTljYjE1NS8wMWEwNmJiMS0yZTkyLTcwMGUtOTgxNi03YWQ3ZmM4YjgzYWMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    ],
    nearMainRoad: true,
    price: "₱3,800,000",
    numericPrice: 3800000,
    title: "The Mega 2 bedroom unit",
    location: "San Andres Bukid, Manila",
    hotwater: "no",
    basement: "no",
    guestroom: "no",
    furnishingStatus: "unfurnished",
    stories: 1, 
    parkingArea: 1,
    bedrooms: 2,
    bathrooms: 2,
    area: 87,
    yearBuilt: 2026,
    description: "Income-generating 4-door apartment property situated right next to Malate, Manila. Ideal for rental investment with easy commuting routes to Taft Avenue."
  },
  {
    id: 14,
    type: "House and Lot",
    images: [
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC80MGI3MzQyYi01MTRmLTRmNjYtYjliNi03Nzc3M2NkNjEzMDkucG5nIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC83MzdlYWQxYS1lZTNiLTQyZWEtYmIwOS02ZDU1NjY1ZWZlMTguanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC85Mjk4NWQ3YS1jMjc1LTQwMGQtODkwNC0wMWVkMGM1Y2E3YWMuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC9iM2ZhODFkMy1jYTVmLTRiNTItOTg2OS1kMDI4YzQ5ZWJmZjQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC9kMTZiYWM1Ny1mMGJmLTQyZTQtOWJmMy0zOWZkYmZkYTM1MWIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC83ZjkzNzRlMy00ZDBiLTQ3NjUtYjEzNy02NDQ0OGQ4MWJkNzcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5NGViMGFlLThkYjQtNDc3Yy04NzJkLWMwMjEzMWQwOGQ4OC85ZGE5ZTQ1Yi1hNzU1LTQ3YmYtOThlMy0wMjA4ODllODgzNTkuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19"
    ],
    nearMainRoad: true,
    price: "₱8,500,000",
    numericPrice: 8500000,
    title: "Residential House and Lot in Paco",
    location: "Mindoro Street, Paco, Manila (near Malate border)",
    hotwater: "yes",
    basement: "yes",
    guestroom: "yes",
    furnishingStatus: "semi-furnished",
    stories: 3, 
    parkingArea: 2,
    bedrooms: 5,
    bathrooms: 6,
    area: 288,
    yearBuilt: 2024,
    description: `Brand New House and Lot
    Details:
    5 Bedrooms
    Family Room
    6 Toilet
    2 Car Garage
    Water Heater`
  }
];

const marker = [
    {
    geocode: [14.648282, 121.049850],
    Popup: "Diliman, Quezon City"
  },{
    geocode: [ 14.5747, 121.0192],
    Popup: "Circuit Makati, Makati City",
  },{
    geocode: [14.5518, 121.0494],
    Popup: "Taguig City - BGC",
  },{
    geocode: [14.6374, 121.1783],
    Popup: "Sun Valley, Antipolo Rizal",
  },{
    geocode: [14.5583, 121.0772],
    Popup: "First District, Pasig, Eastern Manila District",
  },{
    geocode: [14.5409, 121.0191],
    Popup: "Vion Tower, Chino Roces Avenue, Makati City"
  },{
    geocode: [14.5586, 121.0563],
    Popup: "Fort Bonifacio, Taguig City"
  },{
    geocode: [14.6191, 121.1442],
    Popup: "Mambugan, Antipolo City, Rizal"
  },{
    geocode:[14.5570, 121.0773],
    Popup: "C. Benitez Street, Cubao, 4th District, Quezon City"
  },{
    geocode: [14.56781, 121.06642],
    Popup: "Doctor Maximo Street, Pasig City"
  },{
    geocode: [14.6612, 121.0204],
    Popup: "Project 8, Quezon City"
  },{
    geocode:[14.5385, 121.0664],
    Popup: "Ususan, Taguig"
  },{
    geocode:[14.5732, 121.0021],
    Popup: "San Andres Bukid, Manila"
  },{
    geocode: [14.5802, 120.9958],
    Popup: "Paco, Manila"
  }
]
export {properties, marker};