"use client";

import Script from "next/script";

export default function ConversionTracking() {
  return (
    <Script
      id="google-ads-conversion"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-17557026573/WZhHCJTWu5obEI3u67NB',
              'value': 1.0,
              'currency': 'AED',
              'event_callback': callback
            });
            return false;
          }
        `,
      }}
    />
  );
}
