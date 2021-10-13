import React from 'react';
import { useIntl } from 'react-intl';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';

export default function BugBountyPage() {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'bug-bounty-page-seo' })} />
      <section className="md:bg-hero-pattern bg-scroll bg-top bg-no-repeat bg-contain">
        <div className="md:flex md:justify-center">
          <div className="mx-4 md:text-lg max-w-screen-md">
            <article>
              <h2 className="font-normal text-center pt-24 md:text-5xl pb-6">
                {intl.formatMessage({ id: 'bug-bounty-page-title' })}
              </h2>
              {/* <div className="py-12 md:flex"> */}
              {/* <div className="bg-white md:mx-4 pt-5 pb-2 px-8 shadow-md ring-1 ring-black ring-opacity-5 h-full md:w-1/2">
                  <a className="no-underline" href="/bug-bounty/#hunters">
                    <h3 className="font-normal text-textDark text-2xl hover:text-parityPink hover:underline">
                      {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-title' })}
                    </h3>
                  </a>
                  <ul className="text-textDark ml-4">
                    <a className="no-underline" href="/bug-bounty/#hunters-description">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-one' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-investigation-reporting">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-two' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-eligibility">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-three' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-ineligibility">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-four' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-reward">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-five' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-report-bug">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-six' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-legal-information">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-seven' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-governing-law">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-eight' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#hunters-customer-services">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-hunters-bullet-nine' })}
                      </li>
                    </a>
                  </ul>
                </div> */}
              {/* <div className="bg-white md:mx-4 my-6 md:my-0 pt-5 pb-2 px-8 shadow-md ring-1 ring-black ring-opacity-5 h-full md:w-1/2">
                  <a className="no-underline" href="/bug-bounty/#contributors">
                    <h3 className="font-normal text-textDark text-2xl hover:text-parityPink hover:underline">
                      {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-title' })}
                    </h3>
                  </a>
                  <ul className="font-normal text-textDark ml-4">
                    <a className="no-underline" href="/bug-bounty/#contributors-description">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-one' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-making-contributions">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-two' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-refunds">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-three' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-confidentiality">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-four' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-data-protection">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-five' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-liability">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-six' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-waiver">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-seven' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-third-party">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-eight' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-severance">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-nine' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-agreement">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-ten' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-governing-law">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-eleven' })}
                      </li>
                    </a>
                    <a className="no-underline" href="/bug-bounty/#contributors-customer-services">
                      <li className="font-normal m-0 hover:text-parityPink hover:underline">
                        {intl.formatMessage({ id: 'bug-bounty-page-contributors-bullet-twelve' })}
                      </li>
                    </a>
                  </ul>
                </div> */}
              {/* </div> */}

              <h3>Help Us Make Parity More Secure!</h3>
              <p>
                We work hard to make sure the systems we build are bug-free, but acknowledge that we might not catch
                them all. We call on our community and all bug bounty hunters to help identify bugs in the protocols and
                software. If you discover a bug, we appreciate your cooperation in responsibly investigating and
                reporting it to us so that we can address it as soon as possible.{' '}
              </p>
              <p>
                Our Parity Bug Bounty Program allows us to recognise and reward members of the Parity community for
                helping us find and address significant bugs, in accordance with the terms of the Parity Bug Bounty
                Program set out below.
              </p>
              <p>
                We want to remind all hunters that Parity’s main projects are blockchain-related source code (located in
                our Github repositories) and associated released binaries, and not websites or services in any form.
                This is the reason for our Bug Bounty Program covering only the former, and not the latter.
              </p>
              <h3>What&apos;s In Scope? (Hint: Not Our Website!)</h3>
              <p>
                If you&apos;ve found a potential bug in Substrate, Polkadot, or associated build and deployment
                infrastructure, then we want to hear from you! Please reach out to us within 48 hours of discovery.
              </p>
              <p>Parity welcomes vulnerability reports that demonstrate security flaws in:</p>
              <ul className="pl-4">
                <li>
                  <p className="font-bold mb-1">Substrate</p>
                  <ul className="pl-4 mb-1">
                    <li>
                      Any bugs which can be used to bring down or take control of Substrate clients without direct
                      access to the machine, including bugs in Substrate pallets and Substrate primitives
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-bold mb-1">Polkadot</p>
                  <ul className="pl-4 mb-1">
                    <li>
                      <strong>Client:</strong> Any bugs which can be used to bring down or take control of Parity
                      Polkadot client without direct access to the machine
                    </li>
                    <li>
                      <strong>Runtimes:</strong> Any bugs that compromise the intended behavior of the various
                      Parity-built blockchain runtimes (Kusama, Polkadot, etc)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Parity releases pipeline:</strong> any bugs which could be used to enable an attacker to
                  inject malicious code into our distributed binaries, or be used to halt Parity’s release process or
                  add malicious/unintended functions to the released binaries
                </li>
                <li>
                  <strong>Production infrastructure:</strong> publicly-available infrastructure Parity runs for
                  production-grade networks (in contrast to testnets), especially parts which are critical for network’s
                  well-being or safety of funds.
                </li>
                <li>
                  <strong>Cryptography code:</strong> any bugs relating to cryptography, encryption, decryption, and
                  signing of messages (this includes account creation and recovery).
                </li>
                <li>
                  <strong>Client Application Security:</strong> bugs which can allow users to obtain privileges not
                  intended for them.
                </li>
              </ul>
              <p>
                Please note that where the scope of this policy includes third-party code this should not be taken as an
                indication that we are legally or otherwise responsible for that code, its security, quality or your
                rights in respect of that code.
              </p>

              <h3>Exclusions — What&apos;s NOT in Scope</h3>
              <p>
                Did you find a bug in our open source blockchain code or related infrastructure? Great! Tell us about
                it!
              </p>
              <p>Most other things are not in scope, though. Specifically:</p>
              <ul className="pl-4">
                <li>
                  The Parity websites, including{' '}
                  <a href="https://parity.io" target="_blank" rel="noreferrer">
                    https://parity.io
                  </a>{' '}
                  and{' '}
                  <a href="https://substrate.dev" target="_blank" rel="noreferrer">
                    https://substrate.dev
                  </a>{' '}
                  (including subdomains), and any others we might make in the future, are not in scope.
                </li>
                <li>
                  Bugs which have already been submitted by another user or are already known to the Parity team or have
                  already been publicly disclosed
                </li>
                <li>
                  Bugs in third-party tools and services we’re using (but we would be glad to connect you with the
                  security team of the corresponding project)
                </li>
                <li>
                  Parity Technologies’ development team, Parity Technology employees and any other person employed or
                  providing services in any way to the company, directly or indirectly, are not eligible for rewards.
                </li>
                <li>Anything that contravenes the spirit or letter of this Program.</li>
              </ul>

              <h3>Be Nice and So Will We!</h3>
              <p>Responsible investigation and reporting includes, but isn&apos;t limited to, the following:</p>
              <ul className="pl-4">
                <li>
                  You should use your best effort not to access, modify, delete, or store user data or Parity’s data.
                  Instead, use your own accounts or test accounts for security research purposes.
                </li>
                <li>
                  Don’t defraud,harm, or violate the privacy of Parity Technologies Ltd or its users during your
                  research; you should make a good faith effort to not interrupt or degrade our services.
                </li>
                <li>
                  Don&apos;t target our physical security measures, or attempt to use social engineering, spam,
                  distributed denial of service (DDOS) attacks, etc.
                </li>
                <li>Initially report the bug only to us and not to anyone else.</li>
                <li>Keep the details of any suspected bug confidential.</li>
                <li>
                  After reporting a suspected bug, give us a reasonable amount of time to fix the bug before disclosing
                  it to anyone else, and seek our approval before disclosing it to anyone else. An uncoordinated public
                  disclosure may lead to your submission being disqualified from the Program.
                </li>
                <li>
                  Please don’t make repeat submissions of low quality, rejected or automated vulnerability reports.In
                  general, please investigate and report bugs in a way that makes a reasonable, good faith effort not to
                  be disruptive or harmful to us or our users. Otherwise your actions might be interpreted as an attack
                  rather than an effort to be helpful.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="border-t mt-24">
        <div className="text-center py-20">
          <h3 className="font-normal mb-2">{intl.formatMessage({ id: 'bug-bounty-footer-cta-title' })}</h3>
          <h3 className="font-normal mb-4">
            {intl.formatMessage({ id: 'bug-bountry-footer-cta-one' })}
            {` `}
            <a className="text-parityPink font-semibold no-underline hover:underline" href="mailto:bugbounty@parity.io">
              bugbounty@parity.io
            </a>
          </h3>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
