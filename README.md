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
### Web
<img width="1771" height="976" alt="Web-Main Screen" src="https://github.com/user-attachments/assets/2747b190-7438-4e75-ae3a-36ca385b6674" />
<img width="1743" height="958" alt="Web-Diagnosis list" src="https://github.com/user-attachments/assets/9774252e-9dcb-4438-b6d0-3cdbf08fb4eb" />
<img width="1743" height="965" alt="web-Diagnosis details-1" src="https://github.com/user-attachments/assets/137ab7c2-a8ee-4f0c-9faa-ca7d87470e71" />
<img width="1747" height="958" alt="web-Diagnosis details-2" src="https://github.com/user-attachments/assets/80651a33-e0b3-4573-91fa-f1876592d5e1" />

### Mobile
<img width="1504" height="977" alt="Mobile-Main Screen" src="https://github.com/user-attachments/assets/3a46d0d0-81ec-4b00-85a5-a184a0fa572c" />
<img width="1612" height="955" alt="Mobile-Diagnosis list" src="https://github.com/user-attachments/assets/e2f11c3c-1c37-4d96-9569-10979515852a" />
<img width="1633" height="950" alt="Mobile-Diagnosis details" src="https://github.com/user-attachments/assets/4f97bc76-f3ea-41e5-853a-42fe96ac073c" />





