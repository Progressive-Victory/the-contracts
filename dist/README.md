# the-contracts

A repository of our CRUD contracts for talking with our API.

Used primarily by:

- the-website[https://github.com/Progressive-Victory/the-website]
- the-api[https://github.com/Progressive-Victory/the-api]
- the-discord-bot[https://github.com/Progressive-Victory/the-discord-bot]

# Development

## Getting Started

`pnpm install`

## Style

`pnpm run lint-ci`

`pnpm run prettier`

## Tests

TODO

## Versioning and Compatibility

https://semver.org/

AVOID Backwards incompatible changes.

If backwards incompatible changes are required, consult with a Senior Developer and/or Department Lead during development and deployment.

Backwards incompatible changes to contracts:

- removing fields
- renaming fields
- adding required fields

## Workflow

- the-contracts
  - Update contract class in the-contracts
  - Update library version according to semver principles
  - Get approval to merge PR to main.
- downstream: the-api/the-website/the-discord-bot
  - Update contract class version (`pv-contracts` in `package.json`)
  - Continue following development workflow for that repo

Have a rollback plan ready.
