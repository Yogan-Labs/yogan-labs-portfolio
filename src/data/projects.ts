export const projects = [
  {
    id: "api-user",
    title: "API User – Auth & User Management",
    stack: ["NestJS", "TypeScript", "MongoDB"],
    badges: ["JWT", "Refresh Token", "RBAC", "Swagger"],
    description:
      "Production-ready user management API with authentication, roles, login tracking, password reset, and rate limiting.",
    features: [
      "User registration & login",
      "JWT access + refresh tokens",
      "Role-based access (USER / ADMIN)",
      "Login tracking (IP, UA, success/failure)",
      "Password reset flow",
      "Rate-limited auth endpoints",
      "Swagger & Postman collection",
    ],
    status: "Private · Available for freelance",
  },{
  id: "api-user-express",
  title: "API User – Auth & User Management (Express.js)",
  stack: ["Express.js", "TypeScript", "MongoDB"],
  badges: [
    "JWT",
    "Refresh Token Rotation",
    "RBAC",
    "Rate Limiting",
    "Swagger"
  ],
  description:
    "Production-ready user management and authentication API built with Express.js, featuring secure JWT auth, refresh-token rotation, role-based access, login auditing, password reset, and auth-aware rate limiting.",
  features: [
    "User registration & login",
    "JWT access tokens + refresh-token rotation",
    "Role-based access control (USER / ADMIN)",
    "Login tracking (IP, User-Agent, success/failure)",
    "Secure password reset (hashed, expiring tokens)",
    "Auth-aware rate limiting (IP + user-based)",
    "Refresh token revocation & logout",
    "Swagger (OpenAPI) documentation",
    "Postman collection"
  ],
  status: "Private · Available for freelance / contract work",
}

];
