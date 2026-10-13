# Verified automated test evidence

**Project:** Guardian Lily  
**Date (UTC):** 2026-10-13  
**Source:** [GitHub Actions workflow run 38464977685](https://github.com/Ainny1/guardian-lily/actions/runs/38464977685)  
**Job:** `python-tests` — **success**  
**Commit tested:** `30d923b1f0bfd2ba91a53508b9a06657f6af922c` (`main`)  
**Environment:** GitHub-hosted Ubuntu runner, CPython 3.11.17

## Observed results

| Suite | Command | Tests | Result |
| --- | --- | ---: | --- |
| Static privacy site | `python -m unittest discover -s tests -v` | 3 | PASS |
| PenTest Lab | `python -m unittest discover -s pentest-lab/tests -v` | 13 | PASS |
| **Total** | | **16** | **PASS** |

The workflow job and its step logs were inspected, not inferred from a badge. The logs explicitly report `Ran 3 tests ... OK` and `Ran 13 tests ... OK`. The lab suite includes 4 access-control tests, 4 HTML-rendering tests, and 5 SQL-injection tests.

**Interpretation:** Some tests intentionally demonstrate insecure behavior in fictional offline examples. A passing demonstration test means the expected weakness was reproduced. Separate tests verify the secure versions' behavior. These results are **not** a production penetration test, browser XSS exploit, or security certification.

**Evidence:** [Inspect the full run and job logs](https://github.com/Ainny1/guardian-lily/actions/runs/38464977685). This document records that specific run only; future commits require their own verification.

## Reproduce locally

From the repository root with Python 3:

```bash
python -m unittest discover -s tests -v
python -m unittest discover -s pentest-lab/tests -v
```

No third-party packages, remote endpoints, or real personal data are needed.
