# User Registration API Documentation

## Register User
Create a new user account.

**URL**: `/user/register`

**Method**: `POST`

**Content-Type**: `application/json`

### Request Body
```json
{
    "fullname": {
        "firstname": "string", // minimum 3 characters
        "lastname": "string"  // optional, minimum 3 characters if provided
    },
    "email": "string",     // valid email format, minimum 5 characters
    "password": "string"   // minimum 6 characters
}