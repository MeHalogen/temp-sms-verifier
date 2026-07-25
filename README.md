# temp-sms-verifier

Query public temporary SMS gateway boards to receive registration codes and phone verifications automatically.

## Features

- Scrapes public temporary number inbox indexes.
- Finds matching verification codes using regular expressions.
- Saves costs on dedicated validation systems.

## Installation

```bash
npm install temp-sms-verifier
```

## Usage

```typescript
import { getSmsCodes } from 'temp-sms-verifier';

// Grab verification messages sent to a temp number
const codes = await getSmsCodes('+12345678901');
console.log('Verification SMS messages:', codes);
// Output: ['Your verification code is 4821', ...]
```

## API Reference

### getSmsCodes(phoneNumber)

Reads and returns messages received by a temporary number.

**Parameters:**
- `phoneNumber`: `string`

**Returns:** `Promise<string[]>`

## License

MIT
