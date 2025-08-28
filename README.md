This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Run the development server with these commands in sequence:

```bash
npm install

npm run build

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next js
- React Material UI
- Axios as http client
- React Query 
- [fhirpath.js](https://github.com/HL7/fhirpath.js) - as JSON parser for FHIR model.

## Assumptions
- The API https://build.fhir.org/diagnosticreport-example.json, provides the list of diagnosis as well as their details in same API, but in real system it would be different, meaning different API for list and seperate to get the further details, so I implemented the project consider this work flow, however both list and detail view screen using the same API internally, which can be changed with real API.

- FHIR library I used is really powerful. I called its `evaluate` function twice, I believe it could be done in a single call, but for that deeper knowledge of this library is required, which can be done once we  are used to working with the library.

- Unit tests, I kept the architecture very testable, each component can be tested alone with the help of React Testing Library and Jest.
