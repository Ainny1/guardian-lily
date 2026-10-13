"""Offline static checks for privacy and educational scope."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class StaticSiteTests(unittest.TestCase):
    def test_no_remote_dependencies_or_forms(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertNotIn("<form", html)
        self.assertNotIn("https://", html)
        self.assertIn("connect-src 'none'", html)

    def test_no_persistent_browser_storage(self):
        script = (ROOT / "app.js").read_text(encoding="utf-8")
        for forbidden in ("localStorage.", "sessionStorage.", "fetch(", "XMLHttpRequest(", "sendBeacon("):
            self.assertNotIn(forbidden, script)

    def test_fictional_scenarios_and_no_safety_guarantee(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("fictional", html.lower())
        self.assertIn("not emergency response", html.lower())


if __name__ == "__main__":
    unittest.main()
