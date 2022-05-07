# blockstartercosmos
**blockstartercosmos** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Description

This project implements a Kickstarter-like application where people can list projects or causes that need funding and anyone can participate in their funding.

Requirements: 

- [x] Ability to list a project with a description + deadline + funding desired
    
- [x] Ability to send funds to a project :
    
- [x] it cannot be zero
    
- [x] it cannot exceed the funding amount
    
- [x] the project's deadline must be in the future

- [ ] User can claim back donation if project fails to collect all funds needed
    
- [x] User can directly see which projects they contributed to

## Get started

```
ignite chain serve
```


### 1. Query initial balances
```
blockstarter-cosmosd query bank balances [Alice's address]
```
### 2. Create a Project

```
blockstarter-cosmosd tx blockstartercosmos create-project TestTitle description-project 1 x 9999token --from alice --chain-id blockstartercosmos -y
```

### 3. List the project
```
blockstarter-cosmosd query blockstartercosmos list-project
```

### 4. Fund project
```
blockstarter-cosmosd tx blockstartercosmos fund-project 0 9000token --from bob --chain-id blockstartercosmos -y
```

### 5. List contributors
```
blockstarter-cosmosd query blockstartercosmos list-contributors
```

### 6. Claim the contributions as the project creator
```
blockstarter-cosmosd tx blockstartercosmos claim-contributions 0 --from alice --chain-id blockstartercosmos -y
```