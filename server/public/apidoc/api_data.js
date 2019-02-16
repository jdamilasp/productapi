define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/users",
    "title": "Create New User",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "Users",
    "description": "<p>Create New User for Given FirstName, Email, Password. If not exist in DB given email.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password. Minimum length 6</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:   ",
          "content": "{\n  \"status\": \"success\",\n  \"token\" : \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p><code>firstName</code>, <code>email</code> and <code>password</code> are required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailValidationError",
            "description": "<p><code>email</code> address is invalid format</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExist",
            "description": "<p>Given <code>email</code> Already in DB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error 404 Bad Request\n{\n  \"error\": \"ValidationError\",\n  \"message\": \"User validation failed: password: Path `password` is required.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/users"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/users/password/validate",
    "title": "User Password Validate",
    "version": "1.0.0",
    "name": "UserPasswordValidate",
    "group": "Users",
    "description": "<p>Check, Given <code>email</code> matach to correct format and <code>email</code> exist in DB. if email exist, password convert to hash and checking hash with DB.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User <code>email</code> is requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User <code>password</code> is requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "rememberme",
            "description": "<p>User <code>rememberme</code> is optional. default <code>false</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:   ",
          "content": "{\n  \"status\": \"valid\",\n  \"email\" : \"abc@gmail.com\", \n  \"token\" : \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p><code>email</code> and <code>password</code> are required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailValidationError",
            "description": "<p><code>email</code> address is invalid format</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordValidationError",
            "description": "<p><code>password</code> is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p><code>email</code> not found value : <code>abc@gmail.com</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error 404 Not Found\n{\n  \"error\": \"NotFoundError\",\n  \"message\": \"email not found. value : `abc@gmail.com`\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/users/password/validate"
      }
    ]
  }
] });
