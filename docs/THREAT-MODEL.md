# Guardian Lily Protect — initial threat model

## Scope
Static client-side educational site with fictional scenarios and an ephemeral checklist. No accounts, forms, analytics, external scripts, cookies, localStorage, or backend. Does not process messages or identify abusers.

## Sensitive users and risks
- People concerned about account compromise or coercive monitoring.
- Children and teens who may misinterpret examples as personalized safety determinations.
- Users on shared or monitored devices.

## Mitigations
- No collection, upload, or persistence of checklist responses.
- Restrictive Content Security Policy and no external network dependencies.
- Fictional scenarios only; never ask for real private conversations.
- Clear limitations and advice to seek trusted support when device monitoring is suspected.
- No claim that closing a tab erases browser history or protects against device monitoring.

## Residual risks
- Browser history may reveal a visit; screenshots, extensions, or device-monitoring software may observe page activity.
- Educational tips are not individualized safety plans.
- Hosting platforms may retain ordinary HTTP access logs outside this app's control.

## PenTest lab separation
Any intentionally vulnerable training application will be maintained in a separate local-only directory and must never be exposed as the public safety website. Only fictional users/data may be used.
