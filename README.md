# Node.js Ticketing Application

A Node.js application for fetching, booking and updating tickets via REST APIs.

## Installation

1. Clone the repository.
2. Install dependencies using npm:
3. Create a `.env` file in the root directory of the project and add the following environment variables:
Replace `<your MongoDB connection string>` with the actual connection string for your MongoDB database.


## Hosting

This node application is currently hosted on EC2. You can access the APIs at http://ec2-3-93-14-147.compute-1.amazonaws.com.


## Testing

You can test the following REST endpoints using tools like Postman or cURL:

1. `GET /api/ticket` - Fetch all tickets.
2. `GET /api/ticket/:id` - Fetch a single ticket based on id.
2. `GET /api/ticket/:id/user` - Fetch user details of booked ticket.
3. `PUT /api/tickets/:id` - Update an existing ticket.
4. `POST /api/tickets/reset` - Reset all tickets (set them to open for booking).
