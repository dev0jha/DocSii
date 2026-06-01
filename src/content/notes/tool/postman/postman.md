---
title: "Postman"
description: "A comprehensive guide to Postman, API testing workflows, request/response cycles, variables, and automated testing"
category: "tool"
topic: "postman"
order: 3
tags: ["postman", "testing", "api", "tools"]
lastUpdated: 2026-06-01
---

**Postman** is a popular API (Application Programming Interface) development and testing tool that simplifies the process of building, testing, documenting, and sharing APIs.

### Definition and History

**Postman** is a comprehensive API development platform used by developers worldwide.

**Key Facts:**

- **Developed by:** Abhinav Asthana, Ankit Sobti, and Abhijit Kane
- **Company:** Postman Inc. (formerly Postdot Technologies)
- **First Release:** 2012 (as a Chrome extension)
- **Standalone App:** 2014
- **Current Status:** Leading API platform with millions of users
- **Headquarters:** San Francisco, California, USA

**Evolution:**

- **2012**: Started as a side project and Chrome browser extension
- **2014**: Released as a standalone desktop application
- **2016**: Introduced Postman Collections for sharing APIs
- **2019**: Raised $50 million in Series B funding
- **2021**: Valued at $5.6 billion after Series D funding
- **Present**: Enterprise-grade API platform

### What is Postman?

Postman is an API client that allows developers to:

- Create and send HTTP requests
- Test API endpoints
- Automate API testing
- Document APIs
- Monitor API performance
- Collaborate with teams
- Mock servers for testing

### API Testing Workflow

```mermaid
graph LR
    A[Developer] --> B[Postman Client]
    B --> C{HTTP Request}
    C -->|GET/POST/PUT/DELETE| D[API Server]
    D --> E{Process Request}
    E --> F[Response]
    F --> B
    B --> G[View Results]
    
    style B fill:#FF6C37
    style D fill:#4CAF50
```

**How it works:**

1. Developer creates a request in Postman
2. Postman sends HTTP request to API server
3. Server processes the request
4. Server sends back response
5. Postman displays the response

### Request-Response Cycle

```mermaid
graph TD
    A[Create Request in Postman] --> B[Configure Request]
    B --> C[Set HTTP Method<br/>GET, POST, PUT, DELETE, etc.]
    C --> D[Add URL/Endpoint]
    D --> E[Add Headers<br/>Authorization, Content-Type]
    E --> F[Add Body<br/>JSON, XML, Form Data]
    F --> G[Send Request]
    G --> H[API Server Processing]
    H --> I{Response}
    I --> J[Status Code<br/>200, 404, 500, etc.]
    I --> K[Response Headers]
    I --> L[Response Body<br/>JSON, XML, HTML]
    
    style A fill:#FF6C37
    style H fill:#4CAF50
    style I fill:#2196F3
```

### Key Features

**1. Request Building**

- Support for all HTTP methods (GET, POST, PUT, DELETE, PATCH, etc.)
- Easy parameter management
- Header configuration
- Body formats (JSON, XML, form-data, raw, binary)

**2. Collections**

- Organize related requests
- Share with team members
- Version control
- Import/Export functionality

**3. Environment Variables**

- Manage different environments (dev, staging, production)
- Store API keys and tokens securely
- Reuse values across requests

**4. Testing & Automation**

- Write test scripts in JavaScript
- Automated testing
- Continuous Integration (CI/CD) integration
- Collection Runner for batch testing

**5. Documentation**

- Auto-generate API documentation
- Interactive documentation
- Share with team or public

**6. Mock Servers**

- Create mock APIs
- Test without actual backend
- Simulate different scenarios

**7. Monitoring**

- Schedule API tests
- Monitor API performance
- Get alerts for failures

### Postman Architecture

```mermaid
graph TB
    subgraph Postman Client
    A[User Interface]
    B[Request Builder]
    C[Response Viewer]
    D[Test Scripts]
    E[Collections]
    end
    
    subgraph Features
    F[Environments]
    G[Variables]
    H[Pre-request Scripts]
    I[Tests]
    end
    
    subgraph External
    J[API Server]
    K[Mock Server]
    L[Postman Cloud]
    M[CI/CD Tools]
    end
    
    A --> B
    B --> H
    H --> J
    J --> C
    C --> I
    E --> B
    F --> B
    G --> B
    B --> K
    E --> L
    I --> M
    
    style A fill:#FF6C37
    style J fill:#4CAF50
    style L fill:#2196F3
```

### HTTP Methods Supported

```mermaid
graph TD
    A[HTTP Methods in Postman] --> B[GET<br/>Retrieve data]
    A --> C[POST<br/>Create new resource]
    A --> D[PUT<br/>Update entire resource]
    A --> E[PATCH<br/>Partial update]
    A --> F[DELETE<br/>Remove resource]
    A --> G[HEAD<br/>Get headers only]
    A --> H[OPTIONS<br/>Get available methods]
    
    style A fill:#FF6C37
    style B fill:#4CAF50
    style C fill:#2196F3
    style D fill:#FF9800
    style E fill:#9C27B0
    style F fill:#F44336
```

### Request Components

**URL Structure:**

```
https://api.example.com/v1/users?page=1&limit=10
└────┬────┘└─────┬──────┘└┬┘└─┬─┘└────┬──────────┘
  Protocol    Base URL   Ver Path  Query Params
```

**Request Parts:**

1. **Method**: GET, POST, PUT, DELETE, etc.
2. **URL**: API endpoint address
3. **Headers**: Metadata (Content-Type, Authorization)
4. **Body**: Data to send (for POST, PUT, PATCH)
5. **Query Parameters**: URL parameters (?key=value)
6. **Path Variables**: Dynamic URL segments

### Example: API Request Flow

```mermaid
sequenceDiagram
    participant D as Developer
    participant P as Postman
    participant A as API Server
    participant DB as Database
    
    D->>P: Create GET request
    D->>P: Add Authorization header
    D->>P: Click Send
    P->>A: HTTP GET /api/users
    A->>DB: Query users
    DB->>A: Return user data
    A->>P: 200 OK + JSON response
    P->>D: Display response
    D->>P: Write test scripts
    P->>P: Run tests
    P->>D: Show test results
```

### Collections Example

```mermaid
graph TD
    A[API Collection] --> B[User Management]
    A --> C[Products]
    A --> D[Orders]
    
    B --> B1[GET All Users]
    B --> B2[GET User by ID]
    B --> B3[POST Create User]
    B --> B4[PUT Update User]
    B --> B5[DELETE User]
    
    C --> C1[GET Products]
    C --> C2[POST Add Product]
    
    D --> D1[GET Orders]
    D --> D2[POST Create Order]
    
    style A fill:#FF6C37
```

### Environment Variables

```mermaid
graph LR
    A[Global Variables] --> E[Available Everywhere]
    
    B[Environment: Development] --> B1[base_url: localhost:3000]
    B --> B2[api_key: dev_key_123]
    
    C[Environment: Staging] --> C1[base_url: staging.api.com]
    C --> C2[api_key: staging_key_456]
    
    D[Environment: Production] --> D1[base_url: api.example.com]
    D --> D2[api_key: prod_key_789]
    
    style A fill:#FF6C37
    style B fill:#4CAF50
    style C fill:#FF9800
    style D fill:#F44336
```

**Usage:**

```jsx
// In URL
base_url/api/users

// In Headers
Authorization: Bearer api_key

// In Scripts
pm.environment.get("base_url")
```

### Testing with Postman

**Test Script Example:**

```jsx
// Test status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test response time
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test response body
pm.test("Response has user data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.exist;
    pm.expect(jsonData.email).to.include("@");
});

// Save data to environment
pm.test("Save user ID", function () {
    var jsonData = pm.response.json();
    pm.environment.set("user_id", jsonData.id);
});
```

### Test Workflow

```mermaid
graph TD
    A[Create Request] --> B[Write Pre-request Script]
    B --> C[Send Request]
    C --> D[Receive Response]
    D --> E[Run Test Scripts]
    E --> F{All Tests Pass?}
    F -->|Yes| G[Success]
    F -->|No| H[View Failed Tests]
    H --> I[Debug & Fix]
    I --> C
    
    style A fill:#FF6C37
    style G fill:#4CAF50
    style H fill:#F44336
```

### Response Components

```mermaid
graph TD
    A[API Response] --> B[Status Code]
    A --> C[Headers]
    A --> D[Body]
    A --> E[Cookies]
    A --> F[Response Time]
    A --> G[Response Size]
    
    B --> B1[200 - Success]
    B --> B2[201 - Created]
    B --> B3[400 - Bad Request]
    B --> B4[401 - Unauthorized]
    B --> B5[404 - Not Found]
    B --> B6[500 - Server Error]
    
    C --> C1[Content-Type]
    C --> C2[Cache-Control]
    C --> C3[Set-Cookie]
    
    D --> D1[JSON]
    D --> D2[XML]
    D --> D3[HTML]
    D --> D4[Plain Text]
    
    style A fill:#2196F3
```

### Common Use Cases

**1. API Development**

- Design and prototype APIs
- Test endpoints during development
- Debug API issues

**2. API Testing**

- Functional testing
- Integration testing
- Regression testing
- Load testing (with Newman)

**3. API Documentation**

- Create interactive docs
- Share with team
- Publish for external developers

**4. Team Collaboration**

- Share collections
- Sync across team
- Version control

**5. Automation**

- CI/CD integration
- Scheduled monitoring
- Automated testing pipelines

### Postman vs Newman

```mermaid
graph LR
    A[Postman GUI] --> C[Manual Testing]
    A --> D[Interactive Development]
    A --> E[Visual Interface]
    
    B[Newman CLI] --> F[Automated Testing]
    B --> G[CI/CD Integration]
    B --> H[Command Line]
    
    A --> I[Collections]
    I --> B
    
    style A fill:#FF6C37
    style B fill:#4CAF50
```

**Newman** is the command-line companion for Postman that allows you to run collections directly from the command line.

**Newman Usage:**

```bash
# Install Newman
npm install -g newman

# Run collection
newman run collection.json

# Run with environment
newman run collection.json -e environment.json

# Generate HTML report
newman run collection.json -r html
```

### Integration with CI/CD

```mermaid
graph LR
    A[Code Push] --> B[Git Repository]
    B --> C[CI/CD Pipeline]
    C --> D[Build Application]
    D --> E[Deploy to Server]
    E --> F[Run Newman Tests]
    F --> G{Tests Pass?}
    G -->|Yes| H[Deploy Success]
    G -->|No| I[Rollback]
    I --> J[Alert Team]
    
    style C fill:#FF6C37
    style H fill:#4CAF50
    style I fill:#F44336
```

### Authentication Methods

Postman supports various authentication types:

**1. API Key**

```
X-API-Key: your_api_key_here
```

**2. Bearer Token**

```
Authorization: Bearer your_token_here
```

**3. Basic Auth**

```
Authorization: Basic base64(username:password)
```

**4. OAuth 2.0**

- Authorization Code
- Client Credentials
- Implicit Flow
- Password Grant

**5. Digest Auth**

**6. AWS Signature**

**7. NTLM Authentication**

### Mock Server Flow

```mermaid
graph TD
    A[Create Collection] --> B[Add Example Responses]
    B --> C[Create Mock Server]
    C --> D[Get Mock URL]
    D --> E[Frontend Team Uses Mock]
    
    F[Backend Team] --> G[Develops Real API]
    
    E --> H[Development in Parallel]
    G --> H
    
    H --> I[Replace Mock with Real API]
    
    style C fill:#FF6C37
    style E fill:#2196F3
    style G fill:#4CAF50
```

### Postman Workspace Types

```mermaid
graph TD
    A[Postman Workspaces] --> B[Personal Workspace]
    A --> C[Team Workspace]
    A --> D[Public Workspace]
    
    B --> B1[Private to you]
    B --> B2[Your collections only]
    
    C --> C1[Shared with team]
    C --> C2[Collaborative]
    C --> C3[Role-based access]
    
    D --> D1[Public discovery]
    D --> D2[Open to everyone]
    D --> D3[API documentation]
    
    style A fill:#FF6C37
```

### Best Practices

**Organization:**

- Use collections to group related requests
- Name requests descriptively
- Add descriptions and documentation
- Use folders for better organization

**Variables:**

- Use environment variables for different environments
- Store sensitive data as variables
- Use global variables for common values
- Never hardcode credentials

**Testing:**

- Write tests for all requests
- Test status codes
- Validate response structure
- Check response times
- Use meaningful test names

**Collaboration:**

- Share collections with team
- Use version control
- Document your APIs
- Use consistent naming conventions

**Security:**

- Don't commit API keys to version control
- Use environment variables for secrets
- Enable two-factor authentication
- Use Postman Vault for sensitive data

### Common Response Status Codes

| Status Code | Meaning | Description |
| --- | --- | --- |
| **2xx - Success** | | |
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 204 | No Content | Success but no content to return |
| **3xx - Redirection** | | |
| 301 | Moved Permanently | Resource moved to new URL |
| 304 | Not Modified | Cached version is still valid |
| **4xx - Client Errors** | | |
| 400 | Bad Request | Invalid request syntax |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | No permission to access |
| 404 | Not Found | Resource doesn't exist |
| 429 | Too Many Requests | Rate limit exceeded |
| **5xx - Server Errors** | | |
| 500 | Internal Server Error | Server encountered an error |
| 502 | Bad Gateway | Invalid response from upstream |
| 503 | Service Unavailable | Server temporarily unavailable |

### Postman Alternatives

While Postman is the most popular, other tools include:

- **Insomnia** - Open-source REST client
- **Thunder Client** - VS Code extension
- **Paw** - macOS native API tool
- **curl** - Command-line tool
- **HTTPie** - User-friendly CLI
- **REST Client** - VS Code extension
- **Swagger UI** - API documentation and testing

### Why Use Postman?

**Advantages:**

- User-friendly interface
- Comprehensive feature set
- Cross-platform support (Windows, macOS, Linux)
- Team collaboration features
- Extensive documentation
- Large community support
- Free tier available
- CI/CD integration
- Mock servers
- API monitoring

**Use Cases:**

- Backend API development
- Frontend-backend integration
- API testing and debugging
- API documentation
- Team collaboration
- Automated testing
- Performance monitoring

### Getting Started

**Installation:**

1. Visit [postman.com](https://postman.com)
2. Download for your operating system
3. Install and create account
4. Create your first workspace
5. Start building requests

**First Request:**

1. Click "New" -> "HTTP Request"
2. Enter URL: https://jsonplaceholder.typicode.com/users
3. Select method: GET
4. Click "Send"
5. View response in the response panel
