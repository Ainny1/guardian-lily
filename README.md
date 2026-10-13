# ✿ Guardian Lily

**Privacy-first digital safety education and an ethical penetration-testing learning project.**

Guardian Lily has two intentionally separate parts:

- **Guardian Lily Protect** — a static, accessible educational website with a personal privacy checkup and fictional-message safety scenarios.
- **Guardian Lily PenTest Lab** — an offline collection of fictional security exercises with vulnerable examples, secure fixes, finding reports, and tests. No vulnerable service is deployed.

## Protect MVP

Open `index.html` in a browser to try the first version. No login, analytics, backend, remote scripts, cookies, or persistent checklist storage. Your checklist state is held only in the current page and resets on refresh.

The educational site is not an emergency response service and cannot determine whether a person or message is safe.

### Local tests

```bash
python -m unittest discover -s tests -v
```

The repository includes GitHub Actions for these offline tests. GitHub Actions is configured to run both static-site and PenTest Lab tests; check the Actions tab for actual run results. The public site is published via GitHub Pages.

### Privacy and safety

See [Threat Model](docs/THREAT-MODEL.md). Even without application tracking, a browser or hosting provider may retain history or server logs. Avoid using monitored devices for sensitive safety planning.

### Penetration testing

See [PenTest Lab exercises](pentest-lab/README.md) and the [Security Findings Dashboard](security-findings.html). Insecure examples are offline only; GitHub Pages may make source files publicly readable but does not run these Python exercises.

## Roadmap

- [x] Static privacy checkup
- [x] Fictional-message awareness examples
- [x] Offline static tests and initial threat model
- [x] Publish static site; CI configured (verify individual workflow results)
- [ ] Expand accessible educational scenarios with careful review
- [x] Add three offline PenTest exercises with fixes and regression tests
- [x] Publish security findings dashboard

## License

See `LICENSE` if included. Contributions should avoid personal stories, real conversations, location details, or children's data.
