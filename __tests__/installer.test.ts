import fs = require('fs');
import * as installer from '../src/installer';

describe('installer', () => {
  it('acquires v0.117.0 version of GoReleaser', async () => {
    const goreleaser = await installer.getGoReleaser('v0.117.0');
    expect(fs.existsSync(goreleaser)).toBe(true);
  }, 100000);

  it('acquires latest version of GoReleaser', async () => {
    const goreleaser = await installer.getGoReleaser('latest');
    expect(fs.existsSync(goreleaser)).toBe(true);
  }, 100000);
});
