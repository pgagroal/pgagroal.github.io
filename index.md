---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "pgagroal"
  tagline: pgagroal is a high-performance connection pool for PostgreSQL
  actions:
    - theme: brand
      text: Getting started
      link: /doc/GETTING_STARTED.md
    - theme: alt
      text: Releases
      link: /releases

features:
  - title: High performance connection pool
    details: Handle PostgreSQL connections with low overhead and a process model built for speed.
  - title: Limit connections for users and databases
    details: Apply per-user and per-database limits to keep busy systems predictable.
  - title: Prefill support
    details: Warm the pool ahead of traffic so applications can start serving requests faster.
  - title: Remove idle connections
    details: Reclaim unused connections automatically to reduce waste and keep the pool healthy.
  - title: Connection validation
    details: Check pooled connections before reuse so clients receive reliable backends.
  - title: Enable / disable database access
    details: Toggle database availability for maintenance windows and controlled operational changes.
  - title: Graceful / fast shutdown
    details: Choose between draining active work cleanly or stopping quickly when needed.
  - title: Prometheus support
    details: Export metrics in a Prometheus-friendly format for monitoring and alerting.
  - title: Grafana 12 dashboard
    details: Visualize pool health, traffic, and performance with a ready-to-use dashboard.
  - title: Remote management
    details: Administer pgagroal securely without needing direct local access to the host.
  - title: Authentication query support
    details: Use database-backed authentication queries to integrate with existing account data.
  - title: Failover support
    details: Trigger external failover workflows when a PostgreSQL server can no longer accept writes.
  - title: Transport Layer Security (TLS) v1.2+ support
    details: Protect client and management traffic with modern TLS support.
  - title: Daemon mode
    details: Run pgagroal as a background service suitable for production deployments.
  - title: User vault
    details: Store and manage user credentials for operational workflows with dedicated tooling.
---
