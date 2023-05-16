import React from "react";
import Link from "next/link";

import { Meta } from "@/ui";

export default function AboutUsPage() {
  return (
    <>
      <Meta title="Terms and Conditions of Use - NoNameDM" />
      <div className="site-wrap">
        <article>
          <h1>Terms and Conditions of Use</h1>
          <p>
            {`These Terms and Conditions of Use ("Terms") govern your use of the
            NoNameDM website (the "Website") and its services. By accessing or
            using the Website, you agree to be bound by these Terms. If you do
            not agree with any part of these Terms, please refrain from using
            the Website.`}
          </p>
          <h2>1. User Eligibility</h2>
          <p>
            You must be at least 18 years old or the age of legal majority in
            your jurisdiction to use the NoNameDM services. By using the
            Website, you represent and warrant that you meet these eligibility
            requirements. If you do not meet these requirements, you may not use
            the services provided by NoNameDM.
          </p>
          <h2>2. Account Creation and Security</h2>
          <p>
            In order to access certain features of the Website, you may be
            required to create an account. You are responsible for maintaining
            the confidentiality of your account information, including your
            username and password. You agree to provide accurate and up-to-date
            information during the registration process. You must notify
            NoNameDM immediately of any unauthorized use of your account or any
            other breach of security.
          </p>
          <h2>3. Anonymous Messaging</h2>
          <p>
            NoNameDM provides a platform for anonymous messaging. While using
            the service, you understand and acknowledge that the messages you
            receive may be from anonymous sources, and NoNameDM does not verify
            the authenticity or accuracy of such messages. You agree that
            NoNameDM shall not be held liable for any content, consequences, or
            damages arising from the use of the anonymous messaging feature.
          </p>
          <h2>4. Prohibited Conduct</h2>
          <p>
            When using the Website, you agree to abide by the following rules of
            conduct:
          </p>
          <ul>
            <li>
              Do not use the service for any illegal or unauthorized purposes.
            </li>
            <li>Do not harass, threaten, or abuse other users.</li>
            <li>
              Do not engage in any form of hate speech, discrimination, or
              offensive behavior.
            </li>
            <li>
              Do not impersonate or falsely represent yourself as someone else.
            </li>
            <li>
              Do not attempt to disrupt the functioning of the Website or
              compromise its security.
            </li>
            <li>
              Do not use the service to send or distribute spam, viruses, or any
              other malicious content.
            </li>
          </ul>
          <h2>5. Intellectual Property</h2>
          <p>
            The content on the NoNameDM website, including text, graphics,
            logos, and images, is protected by intellectual property laws and is
            owned or licensed by NoNameDM. You may not reproduce, modify,
            distribute, or exploit any of the content without prior written
            permission from NoNameDM.
          </p>
          <h2>6. Disclaimer of Warranty</h2>
          <p>
            {`The NoNameDM service is provided "as is" and without any warranty or
            guarantee of any kind. NoNameDM does not warrant that the Website
            will be error-free, uninterrupted, or free of viruses or other
            harmful components. You use the service at your own risk.`}
          </p>
          <h2>7. Limitation of Liability</h2>
          <p>
            NoNameDM and its affiliates, directors, officers, employees, or
            agents shall not be liable for any direct, indirect, incidental,
            special, or consequential damages arising out of or in connection
            with your use of the Website or the services provided by NoNameDM.
          </p>
          <h2>8. Modifications to the Terms</h2>
          <p>
            NoNameDM reserves the right to modify or update these Terms at any
            time without prior notice. It is your responsibility to review these
            Terms periodically. By continuing to use the Website after any
            modifications to the Terms, you agree to be bound by the revised
            Terms .
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Jurisdiction]. Any legal action or proceeding arising
            out of or relating to these Terms shall be exclusively brought in
            the courts located in [Jurisdiction].
          </p>
          <p>
            By using the NoNameDM website, you agree to these Terms and
            Conditions of Use. If you have any questions or concerns regarding
            these Terms, please contact us
          </p>
        </article>
      </div>
    </>
  );
}
