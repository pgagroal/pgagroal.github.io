Features
--------

* High performance
* Connection pool
* Limit connections for users and databases
* Prefill support
* Remove idle connections
* Connection validation
* Enable / disable database access
* Graceful / fast shutdown
* Prometheus support
* Grafana 12 dashboard
* Remote management
* Authentication query support
* Failover support
* Transport Layer Security (TLS) v1.2+ support
* Daemon mode
* User vault

Overview
--------

`pgagroal` makes use of

* Process model
* Shared memory model across processes
* `io_uring` (Linux) / `kqueue` (*BSD) for fast network interactions
* [Atomic operations](https://en.cppreference.com/w/c/atomic) are used to keep track of state

See [Architecture](./ARCHITECTURE.md) for the architecture of `pgagroal`.

Further information
-------------------

* [GitHub](https://github.com/pgagroal/pgagroal)

Related projects
----------------

* [pgmoneta](https://pgmoneta.github.io/) - Backup / restore solution for PostgreSQL
* [pgexporter](https://pgexporter.github.io/) - Prometheus exporter for PostgreSQL
