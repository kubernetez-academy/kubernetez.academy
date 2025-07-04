---
layout: layouts/training.vto
type: training
title: Go
subtitle: Modern Backend Development with Go
description: Master Go programming with a focus on building cloud-native applications, microservices, and containerized backends. Learn the language that powers Kubernetes, Docker, and modern infrastructure.
featured:
    enabled: true
    description: Learn Go programming for cloud-native application development.
    order: 40
color: cyan-500
icon:
  name: fab fa-golang
  library: font
overview: Go has become the language of choice for cloud-native development, powering everything from Kubernetes to Docker to modern microservices. This comprehensive training teaches you Go programming with a specific focus on building production-ready, containerized applications and cloud-native services.

learningOutcomes:
  - Master Go syntax, idioms, and best practices
  - Build REST APIs and microservices with Go
  - Implement concurrent programming with goroutines and channels
  - Create containerized Go applications with Docker
  - Build cloud-native applications following 12-factor principles
  - Implement observability with metrics, logging, and tracing
  - Work with databases and data persistence in Go
  - Write comprehensive tests and benchmarks
  - Deploy Go applications to Kubernetes
  - Optimize Go applications for performance and scalability

curriculum:
  - title: "Go Fundamentals"
    description: "Master the core concepts and syntax of Go programming"
    topics:
      - "Go language overview and ecosystem"
      - "Setting up the Go development environment"
      - "Variables, types, and constants"
      - "Functions and methods"
      - "Control structures and error handling"
      - "Packages and modules"

  - title: "Data Structures and Collections"
    description: "Working with Go's built-in data structures effectively"
    topics:
      - "Arrays and slices"
      - "Maps and their use cases"
      - "Structs and embedded types"
      - "Interfaces and polymorphism"
      - "Pointers and memory management"
      - "String manipulation and processing"

  - title: "Concurrency and Goroutines"
    description: "Mastering Go's powerful concurrency model"
    topics:
      - "Goroutines and the Go scheduler"
      - "Channels for communication"
      - "Select statements and multiplexing"
      - "Synchronization primitives (Mutex, WaitGroup)"
      - "Context package for cancellation"
      - "Common concurrency patterns"

  - title: "Building REST APIs"
    description: "Creating robust HTTP services and APIs"
    topics:
      - "HTTP package fundamentals"
      - "Building RESTful services"
      - "Middleware patterns and implementation"
      - "Request validation and error handling"
      - "Popular frameworks (Gin, Echo, Fiber)"
      - "API documentation with OpenAPI/Swagger"

  - title: "Database Integration"
    description: "Working with databases and data persistence"
    topics:
      - "Database/sql package fundamentals"
      - "Working with PostgreSQL and MySQL"
      - "Connection pooling and management"
      - "GORM for ORM-style development"
      - "Database migrations and versioning"
      - "NoSQL databases (MongoDB, Redis)"

  - title: "Testing and Quality Assurance"
    description: "Comprehensive testing strategies for Go applications"
    topics:
      - "Unit testing with the testing package"
      - "Table-driven tests"
      - "Mocking and dependency injection"
      - "Integration testing strategies"
      - "Benchmarking and performance testing"
      - "Code coverage and quality metrics"

  - title: "Error Handling and Logging"
    description: "Robust error handling and observability practices"
    topics:
      - "Go's error handling philosophy"
      - "Custom error types and wrapping"
      - "Structured logging with popular libraries"
      - "Metrics collection with Prometheus"
      - "Distributed tracing concepts"
      - "Health checks and monitoring endpoints"

  - title: "Containerization and Deployment"
    description: "Deploying Go applications in containerized environments"
    topics:
      - "Creating efficient Docker images for Go"
      - "Multi-stage builds and optimization"
      - "Configuration management (12-factor app)"
      - "Secrets and environment management"
      - "Health checks and graceful shutdown"
      - "Deploying to Kubernetes"

  - title: "Microservices Patterns"
    description: "Building distributed systems with Go"
    topics:
      - "Microservices architecture principles"
      - "Service discovery and communication"
      - "Circuit breakers and resilience patterns"
      - "API gateways and load balancing"
      - "Event-driven architectures"
      - "Distributed system challenges"

  - title: "Performance and Optimization"
    description: "Optimizing Go applications for production"
    topics:
      - "Profiling Go applications"
      - "Memory management and garbage collection"
      - "CPU profiling and optimization"
      - "Benchmarking and performance testing"
      - "Scaling strategies and bottleneck identification"
      - "Production monitoring and alerting"
---