# Analytics tracking plan

The site emits events to `window.dataLayer` through `src/lib/analytics.ts`. GTM remains consent-gated and is the only layer allowed to forward these events to analytics or advertising platforms.

## Packages funnel

| Event | Trigger | Key parameters |
| --- | --- | --- |
| `cta_click` | A marked Packages CTA is clicked | `cta_id`, `cta_label`, `cta_destination`, `cta_location` |
| `packages_brief_start` | First configurator change | `path_id` |
| `packages_path_select` | Starting path changes | `path_id` |
| `packages_priority_update` | A priority is selected or removed | `priority_id`, `selected`, `selected_count` |
| `packages_brief_submit` | Brief continues to the audit form | `path_id`, `priority_ids`, `priority_count` |
| `form_start` | First audit-form input | `form_id`, `form_source`, `brief_attached` |
| `audit_form_submit` | Valid form is handed to Formspree or the mail client | `form_id`, `form_source`, `delivery_method`, `brief_attached` |
| `generate_lead` | Form endpoint confirms a successful submission | `lead_type`, `lead_source`, `goal`, `value`, `currency` |

All events also include `v1be.locale` and `v1be.page_path`. Package-selection events contain no personal data. `generate_lead` may include consent-gated enhanced-conversion fields as defined in the tracking layer.

Accepted audit attribution sources are allowlisted as `packages-hero`, `packages-proof`, and `packages-footer`; unknown query values normalize to `contact` and never enter analytics dimensions verbatim.

## GTM publication checklist

1. Create Custom Event triggers for the events above.
2. Map `v1be.*` values with Data Layer Variables.
3. Send the funnel events to GA4 only when analytics consent is granted.
4. Mark only `generate_lead` as the primary lead conversion.
5. Validate in GTM Preview and GA4 DebugView before publishing the container.
