# ✿ Guardian Lily

**Privacy-first digital safety education and an ethical penetration-testing learning project.**

Guardian Lily has two intentionally separate parts:

- **Guardian Lily Protect** — a static, accessible educational website with a personal privacy checkup and fictional-message safety scenarios.
- **Guardian Lily PenTest Lab** — a planned isolated, intentionally vulnerable *fictional* application for authorized security testing and remediation. Not yet implemented.

## Protect MVP

Open `index.html` in a browser to try the first version. No login, analytics, backend, remote scripts, cookies, or persistent checklist storage. Your checklist state is held only in the current page and resets on refresh.

The educational site is not an emergency response service and cannot determine whether a person or message is safe.

### Local tests

```bash
python -m unittest discover -s tests -v
```

The repository includes GitHub Actions for these offline tests. CI results and deployment have not yet been verified.

### Privacy and safety

See [Threat Model](docs/THREAT-MODEL.md). Even without application tracking, a browser or hosting provider may retain history or server logs. Avoid using monitored devices for sensitive safety planning.

### Penetration testing

See [PenTest Lab plan](pentest-lab/README.md). Any vulnerable examples will be kept local-only and separate from the public educational website.

## Roadmap

- [x] Static privacy checkup
- [x] Fictional-message awareness examples
- [x] Offline static tests and initial threat model
- [ ] Validate GitHub Actions and publish the static site
- [ ] Expand accessible educational scenarios with careful review
- [ ] Build isolated PenTest lab with patches and regression tests

## License

See `LICENSE` if included. Contributions should avoid personal stories, real conversations, location details, or children's data.
