import { describe, it, expect } from 'vitest';
import { fetchVerificationCodes } from '../src/index.js';

describe('temp-sms-verifier', () => {
  it('should validate verification codes fetch', async () => {
    const codes = await fetchVerificationCodes('12015550199');
    expect(codes.length).toBeGreaterThan(0);
    expect(codes[0].from).toBe('Google');
  });
});