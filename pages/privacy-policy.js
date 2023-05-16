import React from "react";
import Link from "next/link";

import { Meta } from "@/ui";

export default function AboutUsPage() {
  return (
    <>
      <Meta title="About Us - NoNameDM" />
      <div className="site-wrap">
        <article>
          <h2>Privacy Policy for NoNameDM</h2>
          <p>
            At NoNameDM, we respect your privacy and are committed to protecting
            the personal information you provide while using our website. This
            Privacy Policy explains how we collect, use, and disclose your
            information when you access and use our services. Please read this
            policy carefully to understand our practices regarding your personal
            information.
          </p>
          <h2>Information We Collect</h2>
          <p>
            When you use NoNameDM, we may collect the following types of
            information:
          </p>
          <p>
            1. Personal Information: When you sign up for an account, we collect
            your email address and username. You have the option to provide
            additional information such as your name, but it is not mandatory.
          </p>
          <p>
            2. Anonymous Messages: Our service allows you to receive secret
            anonymous messages from your friends. We collect and store these
            messages on our servers temporarily to deliver them to you. We do
            not disclose the identity of the senders unless required by law.
          </p>
          <p>
            {`3. Log Data: When you access NoNameDM, our servers automatically
            record certain information. This may include your IP address,
            browser type, referring/exit pages, and other usage details. We use
            this information to analyze trends, administer the site, track
            users' movements, and gather demographic information for aggregate
            use.`}
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            1. Personal Information: We use your email address to send you
            important account-related information, such as password resets and
            notifications. We may also use your email address to send you
            promotional and marketing materials if you have opted to receive
            them.
          </p>
          <p>
            2. Anonymous Messages: We collect anonymous messages solely for the
            purpose of delivering them to you. We do not use or disclose the
            content of these messages for any other purposes.
          </p>
          <p>
            3. Log Data: We analyze log data to improve the performance and
            functionality of our website, diagnose technical problems, and
            prevent fraudulent activities.
          </p>
          <h2>Information Sharing and Disclosure</h2>
          <p>
            NoNameDM is committed to maintaining the privacy of your personal
            information. We do not sell, trade, or rent your personal
            information to third parties. However, we may share your information
            in the following circumstances:
          </p>
          <p>
            1. Service Providers: We may engage trusted third-party service
            providers to perform certain functions necessary to operate our
            website. These providers have access to your personal information
            only to perform tasks on our behalf and are obligated not to
            disclose or use it for any other purpose.
          </p>
          <p>
            2. Legal Requirements: We may disclose your personal information if
            required to do so by law or in response to valid requests by public
            authorities (e.g., a court or government agency).
          </p>
          <h2>Security</h2>
          <p>
            NoNameDM takes reasonable measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please be aware that no method of transmission
            over the internet or electronic storage is completely secure.
          </p>
          <h2>{`Children's Privacy`}</h2>
          <p>
            NoNameDM is not intended for use by individuals under the age of 18.
            We do not knowingly collect personal information from children. If
            you become aware that a child has provided us with personal
            information, please contact us, and we will take steps to remove the
            information from our systems.
          </p>
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy on our website. It
            is your responsibility to review this Privacy Policy periodically
            for any modifications.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us at privacy@nonamedm.com.
          </p>

          <p>Last updated: [03/01/2023]</p>
        </article>
      </div>
    </>
  );
}
