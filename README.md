# Credential Playground

This CLI is an introduction to the Bloom Protocol credential structure and a framework for developing issuers.

# Installing with Git

install node if you havent already ([version 10 recommended](https://nodejs.org/dist/v10.15.1/)) \*if you have nvm run `nvm use`

no need to change any config

```
git clone git@github.com:hellobloom/bloom-credential-playground.git
cd bloom-credential-playground
npm install
bin/ts-start.sh interactive
```

## Features

### Interactive Mode

Run the CLI in interactive mode to use the autocompletion features.

```
bin/ts-start.sh interactive
```

### 1. Account Creation

First you will need to use the `account` subcommand to create a local account

`bin/ts-start.sh account create --email subject@test.com --name "John Doe"`

You can optionally specify the `--privateKey` to use your own private key

Create a second account to play the part of the credential issuer.

`bin/ts-start.sh account create --email issuer@test.com --name "Issuer Company"`

### 2. Credential Issuance

Issue a credential from account 2 to account 1.

**The sample commands in this doc use sample data from [SG-Verify](<https://public.cloud.myinfo.gov.sg/sg-verify/sgverify-webhook-specs.html#section/Understanding-the-Data-Structure/Data-Items-(Top-Level)>)**

`bin/ts-start.sh issuance create --type ndi --subjectId "subject@test.com" --issuerId "issuer@test.com"`

In this example, credentials are extracted from the raw data in `src/issuers/default/ndi.ts` and formatted into the Selective Disclosure Merkle Tree format. This format gets stored on the client. Users can compute Verifiable Credentials and Verifiable Presentations when they wish to share the data with a third party.

#### Specifying A Source File

You can raw data from a file path by including the `src` field.

`bin/ts-start.sh issuance create --type ndi --subjectId "subject@test.com" --issuerId "issuer@test.com" --src "src/issuers/default/ndi-sample.json"`

#### Encrypting The Credential Components

Include the `--encrypt` flag to encrypt the credential components for the subject using their AES key.

`bin/ts-start.sh issuance create --type ndi --subjectId "subject@test.com" --issuerId "issuer@test.com" --encrypt`

Inspect the encrypted cyphertext with the `inspect` command

`bin/ts-start.sh issuance inspect --id 1 --cyphertext`

Decrypt the cyphertext with the `--decrypt` flag

`bin/ts-start.sh issuance inspect --id 1 --decrypt`

### 3. Sharing

Compute credentials from the Selective Disclosure Merkle Tree.

`bin/ts-start.sh share preview --id 1 --type income`

This command prints the formatted credential, computed from the Selective Disclosure Merkle Tree.

Format credentials into a Verifiable Presentation for sharing.

`bin/ts-start.sh share share --id 1 --type income`

Integrate with [share-kit](https://github.com/hellobloom/share-kit) request data JSON.

`bin/ts-start.sh share share --id 1 --r JSON_COPIED_WHEN_CLICKING_QR`

### 4. Validation

Verify the integrity of the shared Verifiable Presentation and perform all of the embedded proofs.

`bin/ts-start.sh verify verify --id 1`

Run the above command with the verbose flag to see each verification logged.

`bin/ts-start.sh verify verify --id 1 --verbose`

```
✔ Presentation context is present
✔ Presentation type is correct
✔ Credential ID is present
✔ Credential type is valid option
✔ Issuer is valid address format
✔ Issuance date is valid RFC3339 format
✔ Subject is valid address format
✔ Credential data is present
✔ Authorization array is valid or omitted
✔ Credential subject passed validation
✔ Type string is present
✔ Created timestamp is valid RFC3339 format
✔ Creator is valid address format
✔ Valid data node version: batch
✔ Valid batch layer 2 hash format
✔ Valid batch attestation signature format
✔ Valid batch attestation signature
✔ Valid subject signature format
✔ Valid request nonce format
✔ Valid layer 2 hash format
✔ Valid root hash format
✔ Valid root hash nonce format
✔ Valid merkle proof position
✔ Valid merkle leaf data format
✔ Valid merkle proof position
✔ Valid merkle leaf data format
✔ Valid merkle proof position
✔ Valid merkle leaf data format
✔ Valid merkle proof position
✔ Valid merkle leaf data format
✔ Valid Merkle proof array
✔ Valid network stage
✔ Valid data node
✔ Valid attester address format
✔ Valid subject address format
✔ Verified data passed validation
✔ Merkle proof passed validation
✔ Credential proof passed validation
✔ Credential proof subject matches embedded subject
✔ Validated array of Verifiable Credentials
✔ Presentation type is present
✔ Presentation creaded date is valid RFC3339 format
✔ Creator is valid address format
✔ Nonce is present
✔ Domain is present
✔ Credential hash is valid format
✔ Validated presentation proof
✔ Embedded credential hash matches the computed credential hash
✔ Signature digest matches the computed credential hash
✔ Signature string is formatted correctly
✔ Signature matches the proof creator
✔ Token matches the proof nonce
Verified data of type income from subject 0xd0d45aac45bf6d33b0f6d7544522866d929f3125
Verified data: {"data":{"lastupdated":"2019-09-17","high":{"value":4999},"source":"2","classification":"C","low":{"value":4000}}}
Completed verification
```

### Encrypted Data Storage

When you create an account, an AES encryption key is automatically generated. If you generated an account before this feature was available you can either generate a new account or add an encryption key to an existing account.

`bin/ts-start.sh account updateKey --account subject@bloom.co --type Encryption`

## Extending the playground

It should be fairly easy to add additional issuer types to the demo. See how it is done in `src/issuers/ndi.ts` and `src/issuers/base.ts > loadData, getClaimNodes`.

# Dependencies

- [docker](https://docs.docker.com/install/)

# Installing with docker

```
docker login
mkdir $HOME/.bloom-credential-playground
docker run -v $HOME/.bloom-credential-playground:/app/sqlite -it hellobloom/bloom-credential-playground
```

# Hot reloading and debugging

Use the VSCode debug profiles to attach the debugger to the server or the tests or both

using `bin/debug.sh` will enable hot reloading.

or use the VSCode debug profile "interactive" to debug with hot reloading interactively

or use the VSCode debug profile "cli" to debug the cli

# Usage

You can run the cli in interactive mode with the `interactive` subcommand (default in the docker image) or you can run other subcommands directly from the command line for example

`docker run -v $HOME/.bloom-credential-playground:/app/sqlite -it hellobloom/bloom-credential-playground account ls`

You can re-run recent commands with the `replay` subcommand for example

`bin/ts-start.sh replay --cmd 0`

will rerun the most recent command

# Gotchas

- sometimes the debugger takes a few seconds to actually attach when using "interactive"
