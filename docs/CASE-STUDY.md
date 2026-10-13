# Guardian Lily — Cybersecurity Portfolio Case Study

## Project overview

Guardian Lily is an open-source, privacy-first digital safety education project with two complementary parts: a static public website for practical privacy guidance and a separate **offline** PenTest Lab that teaches vulnerability identification and remediation using fictional examples.

- **Public website:** [Guardian Lily Protect](https://ainny1.github.io/guardian-lily/)
- **Findings dashboard:** [Security Findings](https://ainny1.github.io/guardian-lily/security-findings.html)
- **Source repository:** [Ainny1/guardian-lily](https://github.com/Ainny1/guardian-lily)
- **Verified test evidence:** [16 passing tests, GitHub Actions run 38464977685](https://github.com/Ainny1/guardian-lily/actions/runs/38464977685)

## Objectives

1. Publish accessible digital privacy education without accounts, analytics, or collecting visitor responses.
2. Demonstrate common application-security weaknesses in a controlled, invented-data environment.
3. Pair every insecure example with a safer implementation, regression tests, and a written finding.
4. Make the work independently inspectable through source code, documentation, and CI logs.

## Architecture and tools

**Public-facing component:** Static HTML, CSS, and vanilla JavaScript, hosted through GitHub Pages. The privacy checklist stores selections only in the active page state; no application backend is used.

**Training component:** Python standard library and in-memory SQLite. Lab functions are intentionally insecure for educational comparison, but **no vulnerable service is hosted**. Because the repository is public, source files may be publicly readable; the insecure Python code is not executed by GitHub Pages.

**Verification:** Python `unittest` and GitHub Actions. The workflow runs website and lab test suites on a hosted Ubuntu runner.

## Findings and remediation

| ID | Exercise | Demonstrated issue | Corrective approach | Tests |
| --- | --- | --- | --- | ---: |
| GL-001 | Broken object-level authorization (IDOR/BOLA) | A fictional user can retrieve another fictional user's note when ownership is unchecked. | Verify object ownership; real systems must derive identity from trusted authentication context. | 4 |
| GL-002 | Unsafe HTML rendering / XSS prevention | Untrusted fictional HTML markup is inserted without encoding. **No browser script execution was demonstrated.** | Encode output for HTML text context; use context-specific protections in real applications. | 4 |
| GL-003 | SQL injection | Concatenated input alters a SQLite query filter and returns additional fictional rows. | Bind query parameters and enforce authorization separately. | 5 |

Full reports: [GL-001](../pentest-lab/FINDING-001.md) · [GL-002](../pentest-lab/FINDING-002.md) · [GL-003](../pentest-lab/FINDING-003.md).

## Methodology

1. Define a limited, authorized, fictional scenario.
2. Reproduce the insecure behavior in an offline test.
3. Explain the root cause and potential impact in the finding report.
4. Implement a safer alternative.
5. Add regression checks and run both test suites in CI.
6. Link source, reports, and test evidence from the public findings dashboard.

## Verified outcome

On **October 13, 2026**, GitHub Actions run [38464977685](https://github.com/Ainny1/guardian-lily/actions/runs/38464977685) reported a successful `python-tests` job on commit `30d923b1f0bfd2ba91a53508b9a06657f6af922c`. The logs show **3/3 website tests** and **13/13 lab tests** passing, **16/16 total**.

This validates the behavior covered by the tests; it does not establish that the public site is free from every vulnerability or that any real target was tested.

## Skills demonstrated

Application-security fundamentals; access-control testing; safe HTML output encoding; SQL parameterization; Python; SQLite; regression testing; CI/CD; threat modeling; technical vulnerability reporting; privacy-aware frontend design.

## Future improvements

- Add automated accessibility checks and manual keyboard/screen-reader review.
- Add focused tests for the findings dashboard's internal and external links.
- Keep a dated record of verification after substantive changes.
- Expand educational content while maintaining the no-collection design.
