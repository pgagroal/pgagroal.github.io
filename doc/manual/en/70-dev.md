

# Developers

This chapter provides comprehensive guidance for developers who want to contribute to pgagroal, understand its architecture, or extend its functionality.

## Documentation Guide

pgagroal documentation is organized to serve different audiences and use cases. Use this guide to quickly find the information you need.

> **Note**: This manual contains the core documentation chapters. Additional standalone documentation files are located in the `doc/` directory, project root, and `contrib/` directory of the source repository. File paths shown below are relative to the project root directory.

### Quick Reference

> **Navigation Note**: Each entry has two links separated by `|`:
> - **First link (Chapter)**: Use when reading the PDF manual (jumps to page)
> - **Second link (File)**: Use when browsing individual markdown files
> - File links will not work in PDF format

| What you want to do                    | Where to look                                                                                                    |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------|
| **Get started quickly**                | [Getting started](#getting-started) \| [03-gettingstarted.md](/doc/manual/en/03-gettingstarted)                           |
| **Install pgagroal**                   | [Installation](#installation) \| [02-installation.md](/doc/manual/en/02-installation)                                      |
| **Configure pgagroal**                 | [Configuration](#configuration) \| [04-configuration.md](/doc/manual/en/04-configuration)                                  |
| **Set up development environment**     | [Building pgagroal](#building-pgagroal) \| [74-building.md](/doc/manual/en/74-building)                                    |
| **Understand the architecture**        | [Architecture](#architecture) \| [72-architecture.md](/doc/manual/en/72-architecture)                                      |
| **Write tests**                        | [Test Suite](#test-suite) \| [78-test.md](/doc/manual/en/78-test)                                                          |
| **Use Git workflow**                   | [Git guide](#git-guide) \| [71-git.md](/doc/manual/en/71-git)                                                              |
| **Build RPM packages**                 | [RPM](#rpm) \| [73-rpm.md](/doc/manual/en/73-rpm)                                                                          |
| **Analyze code coverage**              | [Code Coverage](#code-coverage) \| [75-codecoverage.md](/doc/manual/en/75-codecoverage)                                    |
| **Work with core APIs**                | [Core API](#core-apis) \| [77-core_api.md](/doc/manual/en/77-core_api)                                                     |
| **Understand event loop**              | [Event Loop](#event-loop) \| [76-eventloop.md](/doc/manual/en/76-eventloop)                                                |
| **Configure security/TLS**             | [Transport Level Security (TLS)](#transport-level-security-tls) \| [08-tls.md](/doc/manual/en/08-tls)                     |
| **Use command-line tools**             | [Command Line Tools](#command-line-tools) \| [14-cli-tools.md](/doc/manual/en/14-cli-tools)                               |
| **Set up monitoring**                  | [Prometheus](#prometheus) \| [11-prometheus.md](/doc/manual/en/11-prometheus)                                              |
| **Optimize performance**               | [Performance](#performance) \| [15-performance.md](/doc/manual/en/15-performance)                                          |
| **Configure failover**                 | [Failover](#failover) \| [16-failover.md](/doc/manual/en/16-failover)                                                      |
| **Choose pipeline type**               | [Pipelines](#pipelines) \| [17-pipelines.md](/doc/manual/en/17-pipelines)                                                  |
| **Harden security**                    | [Security](#security) \| [18-security.md](/doc/manual/en/18-security)                                                      |
| **Deploy with Docker**                 | [Docker](#docker) \| [13-docker.md](/doc/manual/en/13-docker)                                                              |
| **Configure database aliases**         | [Database Aliases](#database-aliases) \| [09-database_alias.md](/doc/manual/en/09-database_alias)                         |
| **Manage user credentials**            | [Vault](#vault) \| [10-vault.md](/doc/manual/en/10-vault)                                                                  |
| **Contribute to project**              | [Git guide](#git-guide) \| [71-git.md](/doc/manual/en/71-git), see also `CONTRIBUTING.md` in project root                |
| **Report issues or get help**          | GitHub Issues: https://github.com/pgagroal/pgagroal/issues                                                       |

### User Documentation

#### Manual Chapters (Comprehensive Guide)

> **Navigation Note**: Each table entry has two links - a **Chapter** link and a **File** link:
> - **If reading the PDF manual**: Use the **Chapter** links (first column) to navigate within the PDF
> - **If reading individual markdown files**: Use the **File** links (second column) to open specific files
> - The File links will not work in PDF format, and Chapter links may not work when browsing individual files

**User-Focused Chapters (01-17):**

| Chapter                                                           | File                                                              | Description                                                                   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [Introduction](#introduction)                                    | [01-introduction.md](/doc/manual/en/01-introduction)                         | Overview of pgagroal features and manual structure                           |
| [Installation](#installation)                                    | [02-installation.md](/doc/manual/en/02-installation)                         | Step-by-step setup for Rocky Linux, PostgreSQL 17, and pgagroal             |
| [Getting Started](#getting-started)                              | [03-gettingstarted.md](/doc/manual/en/03-gettingstarted)                     | Quick introduction to basic pgagroal usage and configuration                 |
| [Configuration](#configuration)                                  | [04-configuration.md](/doc/manual/en/04-configuration)                       | Comprehensive guide to all configuration files and options                   |
| [Prefill](#prefill)                                              | [05-prefill.md](/doc/manual/en/05-prefill)                                   | How to configure and use connection prefill for performance                  |
| [Remote Management](#remote-administration)                      | [06-remote_management.md](/doc/manual/en/06-remote_management)               | Setting up and using remote management features                              |
| [Security Model](#security-model)                                | [07-split_security.md](/doc/manual/en/07-split_security)                     | Implementing split security models for authentication                        |
| [Transport Level Security](#transport-level-security-tls)        | [08-tls.md](/doc/manual/en/08-tls)                                           | Configuring TLS for secure connections                                       |
| [Database Aliases](#database-aliases)                            | [09-database_alias.md](/doc/manual/en/09-database_alias)                     | Using database aliases for flexible client connections                       |
| [Vault](#vault)                                                  | [10-vault.md](/doc/manual/en/10-vault)                                       | Managing user credentials and secrets with pgagroal vault                    |
| [Prometheus](#prometheus)                                        | [11-prometheus.md](/doc/manual/en/11-prometheus)                             | Integrating Prometheus metrics and monitoring                                |
| [Web Console](#web-console)                                      | [12-console.md](/doc/manual/en/12-console)                                   | Web-based monitoring console for metrics visualization                      |
| [Docker](#docker)                                                | [13-docker.md](/doc/manual/en/13-docker)                                     | Running pgagroal in Docker containers                                        |
| [Command Line Tools](#command-line-tools)                        | [14-cli-tools.md](/doc/manual/en/14-cli-tools)                               | Comprehensive CLI tools reference (pgagroal-cli, pgagroal-admin)            |
| [Performance](#performance)                                      | [15-performance.md](/doc/manual/en/15-performance)                           | Performance benchmarks, tuning, and optimization                             |
| [Failover](#failover)                                            | [16-failover.md](/doc/manual/en/16-failover)                                 | Failover configuration and scripting                                         |
| [Pipelines](#pipelines)                                          | [17-pipelines.md](/doc/manual/en/17-pipelines)                               | Pipeline types and configuration                                              |
| [Security](#security)                                            | [18-security.md](/doc/manual/en/18-security)                                 | Comprehensive security hardening guide                                       |

**Developer-Focused Chapters (70-79):**

| Chapter                                                           | File                                                              | Description                                                                   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [Developers](#developers)                                        | [70-dev.md](/doc/manual/en/70-dev)                                           | Development environment setup and contribution guidelines (this chapter)     |
| [Git Guide](#git-guide)                                          | [71-git.md](/doc/manual/en/71-git)                                           | Git workflow and version control practices for the project                   |
| [Architecture](#architecture)                                    | [72-architecture.md](/doc/manual/en/72-architecture)                         | High-level architecture and design of pgagroal                               |
| [RPM](#rpm)                                                      | [73-rpm.md](/doc/manual/en/73-rpm)                                           | Building and using RPM packages                                              |
| [Building pgagroal](#building-pgagroal)                          | [74-building.md](/doc/manual/en/74-building)                                 | Compiling pgagroal from source                                               |
| [Code Coverage](#code-coverage)                                  | [75-codecoverage.md](/doc/manual/en/75-codecoverage)                         | Code coverage analysis and testing practices                                 |
| [Event Loop](#event-loop)                                        | [76-eventloop.md](/doc/manual/en/76-eventloop)                               | Understanding the event loop implementation                                   |
| [Core API](#core-apis)                                           | [77-core_api.md](/doc/manual/en/77-core_api)                                 | Reference for core API functions                                             |
| [Test Suite](#test-suite)                                        | [78-test.md](/doc/manual/en/78-test)                                         | Testing frameworks and procedures                                             |
| [Distribution Installation](#distribution-specific-installation) | [79-distributions.md](/doc/manual/en/79-distributions)                       | Platform-specific installation notes                                         |

**Reference Chapters (97-99):**

| Chapter                                   | File                                                              | Description                                                                   |
|-------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [Acknowledgements](#acknowledgement)     | [97-acknowledgement.md](/doc/manual/en/97-acknowledgement)                   | Credits and contributors                                                      |
| [Licenses](#license)                     | [98-licenses.md](/doc/manual/en/98-licenses)                                 | License information                                                           |
| [References](#references)                | [99-references.md](/doc/manual/en/99-references)                             | Additional resources and references                                           |

#### Additional User Resources

The manual chapters above provide comprehensive coverage. Additional standalone files in `doc/` directory provide supplementary information:

- **doc/GETTING_STARTED.md** - Alternative quick start guide (supplements [Getting Started](#getting-started) | [03-gettingstarted.md](/doc/manual/en/03-gettingstarted))
- **doc/VAULT.md** - Additional vault examples (supplements [Vault](#vault) | [10-vault.md](/doc/manual/en/10-vault))

### Administrator Documentation

All administration topics are covered in this manual:

> **Navigation Note**: Use **Chapter** links when reading the PDF manual, **File** links when browsing individual markdown files.

| Chapter                                                   | File                                                              | Description                                                       |
|-----------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| [Configuration](#configuration)                          | [04-configuration.md](/doc/manual/en/04-configuration)                       | Complete configuration reference                                  |
| [Remote Management](#remote-administration)              | [06-remote_management.md](/doc/manual/en/06-remote_management)               | Remote management setup                                           |
| [Transport Level Security](#transport-level-security-tls)| [08-tls.md](/doc/manual/en/08-tls)                                           | TLS configuration                                                 |
| [Vault](#vault)                                          | [10-vault.md](/doc/manual/en/10-vault)                                       | User credential management                                        |
| [Command Line Tools](#command-line-tools)                | [14-cli-tools.md](/doc/manual/en/14-cli-tools)                               | Complete CLI reference (pgagroal-cli, pgagroal-admin)           |
| [Performance](#performance)                              | [15-performance.md](/doc/manual/en/15-performance)                           | Performance tuning and benchmarks                                |
| [Failover](#failover)                                    | [16-failover.md](/doc/manual/en/16-failover)                                 | Failover configuration and procedures                            |
| [Pipelines](#pipelines)                                  | [17-pipelines.md](/doc/manual/en/17-pipelines)                               | Pipeline configuration and usage                                  |
| [Security](#security)                                    | [18-security.md](/doc/manual/en/18-security)                                 | Security hardening and best practices                            |
| [Prometheus](#prometheus)                                | [11-prometheus.md](/doc/manual/en/11-prometheus)                             | Monitoring and metrics                                            |
| [Web Console](#web-console)                              | [12-console.md](/doc/manual/en/12-console)                                   | Web-based monitoring console                                      |
| [Docker](#docker)                                        | [13-docker.md](/doc/manual/en/13-docker)                                     | Container deployment                                              |

**Legacy standalone documentation files (now superseded by manual chapters):**

| Legacy File              | Superseded By                                                     | Chapter                                                           |
|--------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| doc/CLI.md               | [Command Line Tools](#command-line-tools)                        | [14-cli-tools.md](/doc/manual/en/14-cli-tools)                               |
| doc/ADMIN.md             | [Command Line Tools](#command-line-tools)                        | [14-cli-tools.md](/doc/manual/en/14-cli-tools)                               |
| doc/PERFORMANCE.md       | [Performance](#performance)                                      | [15-performance.md](/doc/manual/en/15-performance)                           |
| doc/FAILOVER.md          | [Failover](#failover)                                            | [16-failover.md](/doc/manual/en/16-failover)                                 |
| doc/PIPELINES.md         | [Pipelines](#pipelines)                                          | [17-pipelines.md](/doc/manual/en/17-pipelines)                               |
| doc/SECURITY.md          | [Security](#security)                                            | [18-security.md](/doc/manual/en/18-security)                                 |
| doc/DISTRIBUTIONS.md     | [Distribution Installation](#distribution-specific-installation) | [79-distributions.md](/doc/manual/en/79-distributions)                       |

### Developer Documentation

Essential reading for contributors and developers:

> **Navigation Note**: Use **Chapter** links when reading the PDF manual, **File** links when browsing individual markdown files.

| Chapter                                   | File                                                              | Description                                                       |
|-------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| [Architecture](#architecture)            | [72-architecture.md](/doc/manual/en/72-architecture)                         | High-level architecture and design of pgagroal                   |
| [Building pgagroal](#building-pgagroal)  | [74-building.md](/doc/manual/en/74-building)                                 | Compiling pgagroal from source with development options          |
| [Git Guide](#git-guide)                  | [71-git.md](/doc/manual/en/71-git)                                           | Git workflow and version control practices for the project       |
| [Test Suite](#test-suite)                | [78-test.md](/doc/manual/en/78-test)                                         | Testing frameworks and procedures                                 |
| [Code Coverage](#code-coverage)          | [75-codecoverage.md](/doc/manual/en/75-codecoverage)                         | Code coverage analysis and testing practices                     |
| [Event Loop](#event-loop)                | [76-eventloop.md](/doc/manual/en/76-eventloop)                               | Understanding the event loop implementation                       |
| [Core API](#core-apis)                   | [77-core_api.md](/doc/manual/en/77-core_api)                                 | Reference for core API functions                                 |
| [RPM](#rpm)                              | [73-rpm.md](/doc/manual/en/73-rpm)                                           | Building and using RPM packages                                  |

**Additional developer resources (supplements manual chapters):**

| File                    | Supplements                                                                   | Description                                                       |
|-------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------|
| doc/DEVELOPERS.md       | [Building pgagroal](#building-pgagroal) \| [74-building.md](/doc/manual/en/74-building) | Detailed development environment setup                            |
| doc/ARCHITECTURE.md     | [Architecture](#architecture) \| [72-architecture.md](/doc/manual/en/72-architecture)   | Extended architecture documentation                               |
| doc/TEST.md             | [Test Suite](#test-suite) \| [78-test.md](/doc/manual/en/78-test)                       | Extended testing documentation                                    |

### Project Management & Planning

Files in the project root directory:

| File                | Description                                       |
|---------------------|---------------------------------------------------|
| CONTRIBUTING.md     | Contribution guidelines and legal information     |
| README.md           | Project overview and quick start                  |
| AUTHORS             | List of project contributors                      |
| LICENSE             | Project license information                       |
| CODE_OF_CONDUCT.md  | Community guidelines and conduct policies         |

### Security & Certificate Documentation

**Security topics covered in this manual:**

> **Navigation Note**: Use **Chapter** links when reading the PDF manual, **File** links when browsing individual markdown files.

| Chapter                                                          | File                                              | Description                                       |
|------------------------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
| [Transport Level Security (TLS)](#transport-level-security-tls) | [08-tls.md](/doc/manual/en/08-tls)                           | Complete TLS configuration and certificate setup |
| [Security Model](#security-model)                               | [07-split_security.md](/doc/manual/en/07-split_security)     | Advanced security models                         |

### Testing & Development Scripts

**Testing covered in this manual:**

> **Navigation Note**: Use **Chapter** links when reading the PDF manual, **File** links when browsing individual markdown files.

| Chapter                               | File                                              | Description                                |
|---------------------------------------|---------------------------------------------------|--------------------------------------------|
| [Test Suite](#test-suite)            | [78-test.md](/doc/manual/en/78-test)                         | Complete testing procedures and frameworks |
| [Code Coverage](#code-coverage)      | [75-codecoverage.md](/doc/manual/en/75-codecoverage)         | Code coverage analysis                     |

**Additional testing documentation in project root:**

| File    | Description                       |
|---------|-----------------------------------|
| TEST.md | Root-level testing documentation |

### Configuration Examples & Templates

Configuration file templates and examples in `doc/etc/`:

| File                           | Description                           |
|--------------------------------|---------------------------------------|
| doc/etc/pgagroal.conf         | Main configuration file template     |
| doc/etc/pgagroal_hba.conf     | Host-based authentication template   |
| doc/etc/pgagroal_vault.conf   | Vault configuration template         |
| doc/etc/pgagroal.service      | Systemd service file                 |
| doc/etc/pgagroal.socket       | Systemd socket file                  |

### Contrib Directory (Additional Tools & Examples)

Community contributions and additional tools in `contrib/`:

| Path                             | Description                                           |
|----------------------------------|-------------------------------------------------------|
| contrib/docker/                  | Docker configuration examples and Dockerfiles       |
| contrib/grafana/README.md        | Grafana dashboard setup and configuration            |
| contrib/prometheus_scrape/README.md | Prometheus metrics documentation generator           |
| contrib/valgrind/README.md       | Valgrind memory debugging configuration              |
| contrib/shell_comp/              | Shell completion scripts for bash and zsh           |

### Man Pages (Reference Documentation)

Complete command-line and configuration reference in `doc/man/`:

| File                                   | Description                             |
|----------------------------------------|-----------------------------------------|
| doc/man/pgagroal.1.rst                | Main pgagroal command reference        |
| doc/man/pgagroal-cli.1.rst            | CLI tool reference                      |
| doc/man/pgagroal-admin.1.rst          | Admin tool reference                    |
| doc/man/pgagroal-vault.1.rst          | Vault tool reference                    |
| doc/man/pgagroal.conf.5.rst           | Main configuration file reference      |
| doc/man/pgagroal_hba.conf.5.rst       | HBA configuration reference            |
| doc/man/pgagroal_databases.conf.5.rst | Database limits configuration reference |
| doc/man/pgagroal_vault.conf.5.rst     | Vault configuration reference          |

### Reference Materials

> **Navigation Note**: Use **Chapter** links when reading the PDF manual, **File** links when browsing individual markdown files.

| Chapter                                   | File                                                  | Description                         |
|-------------------------------------------|-------------------------------------------------------|-------------------------------------|
| [Acknowledgements](#acknowledgement)     | [97-acknowledgement.md](/doc/manual/en/97-acknowledgement)       | Credits and contributors            |
| [Licenses](#license)                     | [98-licenses.md](/doc/manual/en/98-licenses)                     | License information                 |
| [References](#references)                | [99-references.md](/doc/manual/en/99-references)                 | Additional resources and references |

## Development Environment Setup

For detailed development environment setup, see [Building pgagroal](#building-pgagroal) | [74-building.md](/doc/manual/en/74-building). Here's a quick overview:

### Prerequisites

For Fedora-based systems:
```bash
dnf install git gcc cmake make liburing liburing-devel openssl openssl-devel systemd systemd-devel python3-docutils libatomic zlib zlib-devel libzstd libzstd-devel lz4 lz4-devel bzip2 bzip2-devel libasan libasan-static binutils clang clang-analyzer clang-tools-extra
```

### Quick Build

```bash
git clone https://github.com/pgagroal/pgagroal.git
cd pgagroal
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_INSTALL_PREFIX=/usr/local ..
make
make install
```

## Contributing Workflow

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from main
4. **Make your changes** following the coding guidelines
5. **Test your changes** thoroughly
6. **Submit a pull request** with a clear description

For detailed Git workflow, see [Git guide](#git-guide) | [71-git.md](/doc/manual/en/71-git).

## Key Development Principles

- **Security First**: Always consider security implications
- **Performance Matters**: pgagroal is a high-performance connection pool
- **Code Quality**: Follow established patterns and write tests
- **Documentation**: Update documentation with your changes
- **Community**: Engage with the community for feedback

## Getting Help

- **GitHub Discussions** (https://github.com/pgagroal/pgagroal/discussions) - Ask questions
- **GitHub Issues** (https://github.com/pgagroal/pgagroal/issues) - Report bugs or request features
- **Code of Conduct** (see `CODE_OF_CONDUCT.md` in project root) - Community guidelines
