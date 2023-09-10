# Getting Started

This tutorial gives a brief introduction to how to run this react (nextjs) project

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Clone](#clone)
  - [Dependencies](#dependencies)
  - [Application](#application)

## Project Structure

<!-- tree -d -I 'node_modules' -->

<details>
<summary>Click to expand</summary>

```
.
├── docs
├── public
│   ├── fonts
│   └── images
└── src
    ├── components
    │   ├── core
    │   │   ├── Alert
    │   │   ├── BackgroundEffect
    │   │   ├── Banner
    │   │   ├── Card
    │   │   │   ├── HorizontalCard
    │   │   │   ├── PersonCard
    │   │   │   ├── SimpleCard
    │   │   │   └── VerticalCard
    │   │   ├── FallbackText
    │   │   ├── Link
    │   │   │   ├── PrimaryLink
    │   │   │   ├── SecondaryLink
    │   │   │   └── SimpleLink
    │   │   ├── Loading
    │   │   └── Title
    │   │       ├── EffectTitle
    │   │       └── SimpleTitle
    │   ├── data
    │   │   ├── Reference
    │   │   └── Row
    │   └── templates
    │       ├── APIInfo
    │       ├── ErrorModal
    │       ├── Grid
    │       ├── InfoBox
    │       │   ├── InfoBoxItem
    │       │   └── InfoBoxRoot
    │       ├── Pagination
    │       │   ├── PaginationItem
    │       │   └── PaginationRoot
    │       ├── Socials
    │       │   ├── SocialItem
    │       │   └── SocialRoot
    │       └── Sources
    ├── layout
    │   ├── Header
    │   └── Layout
    ├── lib
    ├── pages
    │   └── explorer
    │       ├── actors
    │       │   └── details
    │       ├── characters
    │       │   └── details
    │       ├── episodes
    │       │   └── details
    │       ├── locations
    │       │   └── details
    │       └── seasons
    │           └── details
    ├── services
    └── styles
```

</details>

## Prerequisites

- Text editor (**VSCode** recommanded)
- Terminal (with bash)
- Yarn

### Local

Running the app locally (dev mode) will use the local [HawAPI](https://github.com/HawAPI/HawAPI) endpoint:

> NEXT_PUBLIC_API_URL=http://localhost:8080/api

File configuration: [.env.development](../.env.development)

You can see [how to configure the HawAPI project](https://github.com/HawAPI/HawAPI/blob/main/docs/GETTING_STARTED.md#prerequisites) or [use the docker version](https://github.com/HawAPI/HawAPI/pkgs/container/hawapi). Note that, both options will require the [database setup](https://github.com/HawAPI/HawAPI/blob/main/docs/GETTING_STARTED.md#database).

## Remote

For run the application locally (dev mode) without api/database setup you can use the free and public api endpoint by replacing [.env.development](../.env.development) with:

> NEXT_PUBLIC_API_URL=https://hawapi.theproject.id/api

> <img alt="Warning" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/light-theme/warning.svg#gh-dark-mode-only">
> <img alt="Warning" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/warning.svg#gh-light-mode-only">
>
> See the public endpoint [rate limits](https://hawapi.theproject.id/docs/guides/rate-limiting/#controlling-usage)

## Setup

Step by step of how to run the application.

- See all [Prerequisites](#prerequisites)

### Clone

> **Note** \
> Alternatively, you could [download all files (Zip)](https://github.com/LucJosin/hawbrary/archive/refs/heads/main.zip)

- SSH

```
git clone git@github.com:LucJosin/hawbrary.git
```

- HTTPS

```
git clone https://github.com/LucJosin/hawbrary.git
```

### Dependencies

Get all dependencies:

```bash
yarn install
```

### Application

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
