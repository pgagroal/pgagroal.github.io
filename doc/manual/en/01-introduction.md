

# Introduction

[**pgagroal**][pgagroal] is a high-performance protocol-native connection pool for [PostgreSQL][postgresql].

## Features

* High performance
* Connection pool
* Limit connections for users and databases
* Prefill support
* Remove idle connections
* Perform connection validation
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

## Platforms

The supported platforms are

* [Fedora][fedora] 42+
* [RHEL][rhel] 10 / RockyLinux 10
* [FreeBSD][freebsd]
* [OpenBSD][openbsd]

## Migration

### From 2.0.x to 2.1.0

#### Vault Encryption

The key derivation for vault file encryption has been upgraded to
`PKCS5_PBKDF2_HMAC` (SHA-256, random 16-byte salt, 600,000 iterations).

This is a **breaking change**. Existing vault files encrypted with the
old method cannot be decrypted by version 2.1.0.

**Action required:**

1. Stop pgagroal
2. Delete the existing user files:
   - `pgagroal_users.conf`
   - `pgagroal_frontend_users.conf`.
   - `pgagroal_admins.conf`
   - `pgagroal_superuser.conf`
   - Vault users file (if applicable)
3. Delete the existing master key:
   ```
   rm ~/.pgagroal/master.key
   ```
4. Regenerate the master key:
   ```
   pgagroal-admin master-key
   ```
5. Re-add all users:
   ```
   pgagroal-admin user add -f <users_file>
   ```
6. Restart pgagroal

## How to Use This Manual

This manual is organized to guide you from initial setup to advanced usage and development. Use the table below to quickly find the section most relevant to your needs:

> **Navigation Note**: Each entry has two links separated by `|`:
> - **First link (Chapter)**: Use when reading the PDF manual (jumps to page)
> - **Second link (File)**: Use when browsing individual markdown files
> - File links will not work in PDF format

| Chapter                                                           | File                                                              | Description                                                                   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [Installation](#installation)                                    | [02-installation.md](/doc/manual/en/02-installation)                         | Step-by-step setup for Rocky Linux, PostgreSQL 18, and pgagroal             |
| [Getting Started](#getting-started)                              | [03-gettingstarted.md](/doc/manual/en/03-gettingstarted)                     | Quick introduction to basic pgagroal usage and initial configuration        |
| [Configuration](#configuration)                                  | [04-configuration.md](/doc/manual/en/04-configuration)                       | Comprehensive guide to all configuration files and options                   |
| [Prefill](#prefill)                                              | [05-prefill.md](/doc/manual/en/05-prefill)                                   | How to configure and use connection prefill for better performance          |
| [Remote Management](#remote-administration)                      | [06-remote_management.md](/doc/manual/en/06-remote_management)               | Setting up and using remote management features for pgagroal                |
| [Split Security](#security-model)                                | [07-split_security.md](/doc/manual/en/07-split_security)                     | Implementing split security models for authentication and access control    |
| [TLS](#transport-level-security-tls)                             | [08-tls.md](/doc/manual/en/08-tls)                                           | Configuring Transport Layer Security (TLS) for secure connections           |
| [Database Alias](#database-aliases)                              | [09-database_alias.md](/doc/manual/en/09-database_alias)                     | Using database aliases for flexible client connections                      |
| [Vault](#vault)                                                  | [10-vault.md](/doc/manual/en/10-vault)                                       | Managing user credentials and secrets with the pgagroal vault               |
| [Prometheus](#prometheus)                                        | [11-prometheus.md](/doc/manual/en/11-prometheus)                             | Integrating Prometheus metrics and monitoring                               |
| [Web Console](#web-console)                                      | [12-console.md](/doc/manual/en/12-console)                                   | Web-based monitoring console for metrics visualization                     |
| [Docker](#docker)                                                | [13-docker.md](/doc/manual/en/13-docker)                                     | Running pgagroal in Docker containers                                       |
| [Command Line Tools](#command-line-tools)                        | [14-cli-tools.md](/doc/manual/en/14-cli-tools)                               | Comprehensive CLI tools reference (pgagroal-cli, pgagroal-admin)           |
| [Performance](#performance)                                      | [15-performance.md](/doc/manual/en/15-performance)                           | Performance benchmarks, tuning, and optimization                            |
| [Failover](#failover)                                            | [16-failover.md](/doc/manual/en/16-failover)                                 | Failover configuration and scripting                                        |
| [Pipelines](#pipelines)                                          | [17-pipelines.md](/doc/manual/en/17-pipelines)                               | Pipeline types and configuration                                             |
| [Security](#security)                                            | [18-security.md](/doc/manual/en/18-security)                                 | Comprehensive security hardening guide                                      |
| [Health Check](#health-check)                                    | [19-health_check.md](/doc/manual/en/19-health_check)                         | Setting up and configuring health checks                                     |
| [Development](#developers)                                       | [70-dev.md](/doc/manual/en/70-dev)                                           | Development environment setup and contribution guidelines                   |
| [Git](#git-guide)                                                | [71-git.md](/doc/manual/en/71-git)                                           | Git workflow and version control practices for the project                  |
| [Architecture](#architecture)                                    | [72-architecture.md](/doc/manual/en/72-architecture)                         | High-level architecture and design of pgagroal                              |
| [RPM](#rpm)                                                      | [73-rpm.md](/doc/manual/en/73-rpm)                                           | Building and using RPM packages                                             |
| [Building](#building-pgagroal)                                   | [74-building.md](/doc/manual/en/74-building)                                 | Compiling pgagroal from source                                              |
| [Code Coverage](#code-coverage)                                  | [75-codecoverage.md](/doc/manual/en/75-codecoverage)                         | Code coverage analysis and testing practices                                |
| [Event Loop](#event-loop)                                        | [76-eventloop.md](/doc/manual/en/76-eventloop)                               | Understanding the event loop implementation                                  |
| [Core API](#core-apis)                                           | [77-core_api.md](/doc/manual/en/77-core_api)                                 | Reference for core API functions                                            |
| [Testing](#test-suite)                                           | [78-test.md](/doc/manual/en/78-test)                                         | Testing frameworks and procedures                                           |
| [Distribution Installation](#distribution-specific-installation) | [79-distributions.md](/doc/manual/en/79-distributions)                       | Platform-specific installation notes                                        |
| [Acknowledgements](#acknowledgement)                             | [97-acknowledgement.md](/doc/manual/en/97-acknowledgement)                   | Credits and contributors                                                     |
| [Licenses](#license)                                             | [98-licenses.md](/doc/manual/en/98-licenses)                                 | License information                                                          |
| [References](#references)                                        | [99-references.md](/doc/manual/en/99-references)                             | Additional resources and references                                          |
