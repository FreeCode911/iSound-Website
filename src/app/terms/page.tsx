import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — iSound",
  description:
    "The terms that govern your use of the iSound Discord bot and this website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="August 15, 2026">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By inviting iSound (&quot;the Bot&quot;) to a Discord server, using
          its commands, or accessing this website, you agree to be bound by
          these Terms of Service. If you do not agree, do not use iSound.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          iSound is a free Discord bot that provides music playback, queue
          management, playlists, audio filters, and related utility
          commands inside Discord servers. Features may be added, changed,
          or removed at any time without notice.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          You must comply with{" "}
          <a
            href="https://discord.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord&apos;s Terms of Service
          </a>{" "}
          to use iSound, including any applicable minimum age requirements.
          Server administrators are responsible for ensuring iSound&apos;s
          use in their server complies with Discord&apos;s rules and any
          applicable local laws.
        </p>
      </section>

      <section>
        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use iSound to stream copyrighted content in violation of law or platform terms</li>
          <li>Attempt to exploit, abuse, reverse-engineer, or overload the Bot or its infrastructure</li>
          <li>Use iSound to harass, spam, or disrupt other users or servers</li>
          <li>Circumvent DJ roles, permissions, or rate limits</li>
          <li>Use the Bot for any unlawful purpose</li>
        </ul>
        <p>
          We reserve the right to restrict or block access for a server or
          user that violates these terms.
        </p>
      </section>

      <section>
        <h2>5. Content From Third Parties</h2>
        <p>
          iSound retrieves audio from third-party platforms such as YouTube,
          SoundCloud, Bandcamp, Twitch, and Vimeo, based on requests you
          make. We do not host, own, or control this content. You are
          responsible for ensuring your use of that content complies with
          the originating platform&apos;s terms and applicable copyright law.
          iSound does not permanently store or rebroadcast audio outside of
          live playback in your voice channel.
        </p>
      </section>

      <section>
        <h2>6. No Warranty & Availability</h2>
        <p>
          iSound is provided &quot;as is&quot; and &quot;as available,&quot;
          free of charge, without warranties of any kind, express or
          implied. We do not guarantee uninterrupted uptime, error-free
          operation, or that any specific song, source, or feature will
          always be available. Multi-node failover reduces — but does not
          eliminate — the chance of interruptions.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, iSound and its developers
          are not liable for any indirect, incidental, or consequential
          damages arising from your use of, or inability to use, the Bot or
          this website, including loss of data, playlists, or server
          settings.
        </p>
      </section>

      <section>
        <h2>8. Termination</h2>
        <p>
          You may remove iSound from your server at any time. We may suspend
          or terminate access to iSound for any server or user that violates
          these terms, without prior notice.
        </p>
      </section>

      <section>
        <h2>9. Changes to These Terms</h2>
        <p>
          We may revise these Terms from time to time. Material changes will
          be reflected by updating the &quot;Last updated&quot; date above.
          Continuing to use iSound after changes take effect means you accept
          the revised Terms.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these Terms can be sent through the{" "}
          <code>/report-bug</code> command or our support server, linked from
          the Discord invite page.
        </p>
      </section>
    </LegalLayout>
  );
}
