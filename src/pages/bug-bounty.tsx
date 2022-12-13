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
                infrastructure, then we want to hear from you!
              </p>
              <p>Parity welcomes vulnerability reports that demonstrate security flaws in:</p>
              <ul className="font-normal text-testDark pl-4">
                <li>
                  <p className="font-bold mb-1">Substrate - implementation-related issues only</p>
                  <ul className="font-normal text-testDark pl-4 mb-1">
                    <li>
                      Any bugs which can be used to bring down or take control of Substrate clients without direct
                      access to the machine, including bugs in Substrate pallets and Substrate primitives.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-bold mb-1">Smoldot</p>
                  <ul className="font-normal text-testDark pl-4 mb-1">
                    <li>
                      Any bugs which can be used to bring down or take control of Smoldot light clients without direct
                      access to the machine.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-bold mb-1">Polkadot - implementation-related issues only</p>
                  <ul className="font-normal text-testDark pl-4 mb-1">
                    <li className="leading-relaxed">
                      <strong>Client:</strong> Any bugs which can be used to bring down or take control of Parity
                      Polkadot client without direct access to the machine.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Runtimes:</strong> Any bugs that compromise the intended behavior of the various
                      Parity-built blockchain runtimes (Kusama, Polkadot, etc).
                    </li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  <strong>Parity releases pipeline:</strong> any bugs which could be used to enable an attacker to
                  inject malicious code into our distributed binaries, or be used to halt Parity’s release process or
                  add malicious/unintended functions to the released binaries.
                </li>
                <li className="leading-relaxed">
                  <strong>Production infrastructure:</strong> publicly-available infrastructure Parity runs for
                  production-grade networks (in contrast to testnets), especially parts which are critical for network’s
                  well-being or safety of funds. Please note that this does not include our publicly available web pages
                  that are static.
                </li>
                <li className="leading-relaxed">
                  <strong>Cryptography code:</strong> any bugs relating to cryptography, encryption, decryption, and
                  signing of messages (this includes account creation and recovery) in products, developed by Parity.
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
              <ul className="font-normal text-testDark pl-4">
                <li className="leading-relaxed">
                  Static websites, until you can find a way to compromise the data on the website for all of the
                  visitors.
                </li>
                <li className="leading-relaxed">
                  Bugs which have already been submitted by another user or are already known to the Parity team or have
                  already been publicly disclosed.
                </li>
                <li className="leading-relaxed">
                  Bugs in third-party tools and services we’re using (but we would be glad to connect you with the
                  security team of the corresponding project).
                </li>
                <li className="leading-relaxed">
                  Parity Technologies’ development team, Parity Technology employees and any other person employed or
                  providing services in any way to the company, directly or indirectly, are not eligible for rewards.
                  Social engineering attacks are also here.
                </li>
                <li className="leading-relaxed">Anything that contravenes the spirit or letter of this Program.</li>
              </ul>

              <h3>Be Nice and So Will We!</h3>
              <p>Responsible investigation and reporting includes, but isn&apos;t limited to, the following:</p>
              <ul className="font-normal text-testDark pl-4">
                <li className="leading-relaxed">
                  Use your best effort not to access, modify, delete, or store user data or Parity’s data. Instead, use
                  your own accounts or test accounts for security research purposes.
                </li>
                <li className="leading-relaxed">
                  Don’t defraud, harm, or violate the privacy of Parity Technologies Ltd or its users during your
                  research; you should make a good faith effort to not interrupt or degrade our services.
                </li>
                <li className="leading-relaxed">
                  Don&apos;t target our physical security measures, or attempt to use social engineering, spam,
                  distributed denial of service (DDOS) attacks, etc.
                </li>
                <li className="leading-relaxed">Initially report the bug only to us and not to anyone else.</li>
                <li className="leading-relaxed">Keep the details of any suspected bug confidential.</li>
                <li className="leading-relaxed">
                  After reporting a suspected bug, give us a reasonable amount of time to fix the bug before disclosing
                  it to anyone else, and seek our approval before disclosing it to anyone else. An uncoordinated public
                  disclosure may lead to your submission being disqualified from the Program.
                </li>
                <li className="leading-relaxed">
                  Please don’t make repeat submissions of low quality, rejected or automated vulnerability reports.In
                  general, please investigate and report bugs in a way that makes a reasonable, good faith effort not to
                  be disruptive or harmful to us or our users. Otherwise your actions might be interpreted as an attack
                  rather than an effort to be helpful.
                </li>
              </ul>

              <h3>Is My Bug Eligible?</h3>
              <p>To be eligible for a reward under this Program:</p>
              <ul className="font-normal text-testDark pl-4">
                <li className="leading-relaxed">
                  Play by the rules - this includes complying with the spirit and letter of this policy as well as any
                  other applicable laws or agreements.
                </li>
                <li className="leading-relaxed">
                  The security bug must be original and previously unreported. Duplicate submissions made within 72
                  hours of each other will split the bounty between reporters. If duplicate submissions are of unequal
                  quality, the split will be at the level of the lesser report, and the greater report will receive a
                  pro-rated additional bounty on top of the split.
                </li>
                <li className="leading-relaxed">
                  The security bug must be a part of Parity’s code, not the code of a third party. We will pay bounties
                  for vulnerabilities in third-party libraries (for instance, libp2p) incorporated into shipped client
                  code utilized by Parity if both of the following two conditions are met:
                  <ul className="font-normal text-testDark pl-4 mb-0">
                    <li>the bug leads to an exploitable vulnerability in Parity&apos;s software in particular, and</li>
                    <li>is not actively maintained by another commercial entity with a separate bug bounty program.</li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  You must not have written the buggy code or otherwise been involved in contributing the buggy code to
                  the Parity project.
                </li>
                <li className="leading-relaxed">
                  You must be old enough to be eligible to participate in and receive payment from this Program in your
                  jurisdiction, or otherwise qualify to receive payment, whether through consent from your parent or
                  guardian or some other way.
                </li>
                <li className="leading-relaxed">
                  You must not be an employee, contractor, or otherwise have a business relationship with the Parity or
                  any of its subsidiaries.
                </li>
                <li className="leading-relaxed">
                  If you inadvertently access, modify, delete, or store user data, we ask that you notify Parity
                  immediately at <a href="mailto:bugbounty@parity.io">bugbounty@parity.io</a> and delete any stored data
                  after notifying us.
                </li>
                <li className="leading-relaxed">
                  We might be prevented by law from paying you. For example, if you happen to live in a country on a
                  sanctions list that applies to us. In this case, if we can we would be happy to make a donation to a
                  well-established charity of your choice.
                </li>
                <li className="leading-relaxed">
                  You must not either directly or indirectly exploit the security vulnerability for your own gain or
                  incite, encourage or assist anyone else in doing so.
                </li>
                <li className="leading-relaxed">
                  Before sharing any part of the security issue with a third party, you must give us a reasonable amount
                  of time to address the security issue.
                </li>
                <li className="leading-relaxed">
                  To the extent that you propose a fix that includes code we will ask you to sign our standard
                  contributor license agreement in respect of that fix so that we can deploy it going forwards.
                </li>
              </ul>
              <p>
                Do not threaten or attempt to extort Parity. We reserve the right to disqualify individuals from the
                Program if they threaten to withhold the security issue from us or if you threaten to release the
                vulnerability or any exposed data to the public or any third party or otherwise act in a malicious,
                disrespectful, or disruptive manner.
              </p>
              <p>
                <i>
                  We want your bugs! But please note that it&apos;s entirely at our discretion to decide whether a bug
                  is significant enough to be eligible for reward. Our lawyer made us write this. You understand.
                </i>
              </p>

              <h3>Ka-Ching! How We Pay You &#128512;</h3>
              <p>Bug Bounty Hunter Program rewards are at the sole discretion of Parity Technologies. </p>
              <ul className="font-normal text-testDark pl-4">
                <li className="leading-relaxed">
                  The minimum reward for eligible bugs is the equivalent of 100 USD in KSM.
                </li>
                <li className="leading-relaxed">
                  Rewards over the minimum are at our discretion, but we will pay significantly more for particularly
                  serious issues, i.e. that the identified issue could put a significant number of users at risk of
                  severe damage, monetary or otherwise.
                </li>
                <li className="leading-relaxed">Each bug will only be considered for a reward once.</li>
                <li className="leading-relaxed">
                  Bounty eligible bug hunters will be asked to send their proof of identity and KSM address to be
                  rewarded.
                </li>
              </ul>

              <h3>How to Report a Bug</h3>
              <ul className="font-normal text-testDark pl-4">
                <li className="leading-relaxed">
                  Is there a bug in our website? It&apos;s not eligible! Scroll back up to learn what is in scope —
                  namely, our open source blockchain technology: Substrate, Polkadot, and associated infrastructure.
                </li>
                <li className="leading-relaxed">
                  Still want to report? Send your bug to <a href="mailto:bugbounty@parity.io">bugbounty@parity.io</a>,
                  including the information below:
                  <ul className="font-normal text-testDark pl-4 mb-0">
                    <li>step by step details to reproduce</li>
                    <li>affected components</li>
                    <li>potential impact</li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  Please be as detailed as possible. The easier it is for us to reproduce your bug, the faster we can
                  fix it — and the faster we can pay you! Try to include as much information in your report as you can,
                  including a description of the bug, its potential impact, and steps for reproducing it or proof of
                  concept.
                </li>
                <li className="leading-relaxed">
                  Please add a Github link to the repo you’ve found a bug in right in the email title — this will help
                  our laborious robots to route your email accordingly.
                </li>
                <li className="leading-relaxed">
                  Please allow two business days for us to respond before taking any further action.
                </li>
              </ul>
              <p>
                Once the issue has been submitted, our team will review the information, assign a severity level (that
                may or may not be similar to your choice) and redirect this to one member of the Bug Bounty Program
                team, who will contact you with more details on the next steps.
              </p>

              <h3>What Our Lawyers Want You to Know!</h3>
              <p>
                The Parity Bug Bounty Program is a discretionary rewards program for our active community to encourage
                and reward those who are helping to improve the systems we build. It is not a competition. We can cancel
                the Program at any time and awards are at the sole discretion of Parity Technologies development team.
                All Bug Bounty awards are subject to compliance with local laws, rules, and regulations. We are not able
                to issue awards to individuals who are on sanctions lists or who are in countries on sanctions lists.
                You are responsible for all taxes payable in connection with the receipt of any rewards. All rewards are
                subject to the laws of England and Wales. Finally, your testing must not violate any law or compromise
                any data — or funds — that are not yours.
              </p>
              <p>
                We will do our best to respond to your submission as quickly as possible, keep you updated on the fix,
                and award a bounty where appropriate. If you follow these guidelines in discovering and disclosing a
                vulnerability, we will not consider your actions as an attack and won’t take any legal action against
                you.
              </p>
              <p>
                <b>Privacy</b> <br />
                As part of participating in the Bug Bounty Program you will need to share with us personal data
                including your name, email address, ID information and photos, and a blockchain address. Parity
                Technologies is committed to protecting and respecting your privacy. To understand how Parity uses your
                personal data please see our privacy policy (<a href="/privacy/">https://www.parity.io/privacy/</a>). If
                you want to contact us about this please email <a href="mailto:legal@parity.io">legal@parity.io</a>.
              </p>
              <p>
                <b>Governing Law and Jurisdiction</b> <br />
                Any obligations arising out of or in connection with the Parity Bug Bounty Program or its subject matter
                will be governed by and construed in accordance with the law of England and Wales, and the courts of
                England and Wales shall have exclusive jurisdiction to settle any dispute or claim (including
                non-contractual disputes or claims) arising out of or in connection with the Parity Bug Bounty Program.
              </p>

              <h3>Legal Safe Harbour</h3>
              <p>
                Parity strongly supports security research into Substrate and Polkadot and wants to encourage that
                research. If you conduct genuine, in-scope, bug hunting research in good faith and in accordance with
                this policy we will consider your actions to be legitimate and will not seek prosecution. But for the
                avoidance of doubt, this does not give you permission to act in any manner that is inconsistent with the
                law or might cause Parity to be in breach of any of its legal obligations.
              </p>
              <p>
                We understand that many Parity systems and services are interconnected with third-party systems and
                services. While we can authorize your research on Parity’s systems and services we cannot authorize
                efforts on third-party products or guarantee they won’t pursue legal action against you.{' '}
              </p>
              <p>
                <b>
                  If you’re not sure whether your conduct complies with this policy, please contact us first at{` `}
                  <a href="mailto:bugbounty@parity.io">bugbounty@parity.io</a> and we will do our best to clarify.
                </b>
              </p>

              <h3>Got Questions? We Got Answers!</h3>
              <p>
                If you have a query or complaint about the Parity Bug Bounty Hunter Program, please contact us using the
                same <a href="mailto:bugbounty@parity.io">bugbounty@parity.io</a> email address.
              </p>
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
