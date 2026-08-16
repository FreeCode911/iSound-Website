import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — iSound",
  description:
    "How iSound collects, uses, and protects data when you use the bot or this website.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 15, 2026">
      <section>
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains what information iSound (&quot;the
          Bot,&quot; &quot;we,&quot; &quot;us&quot;) collects when you use it
          on Discord or visit this website, why we collect it, and how it&apos;s
          handled. By inviting iSound to a server or using its commands, you
          agree to the practices described here.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>iSound collects only what it needs to function:</p>
        <ul>
          <li>
            <strong>Server (guild) settings</strong> — DJ role, default
            volume, announcement channel, custom embed color, and autoplay
            preference, tied to your server&apos;s Discord ID.
          </li>
          <li>
            <strong>Playlists</strong> — playlist names and track lists you
            create, tied to your Discord user ID so they follow you across
            servers.
          </li>
          <li>
            <strong>Command usage data</strong> — the slash command and
            options you send (e.g. a song query), processed to run the
            command. This is not stored beyond what&apos;s needed for
            playlists or settings above.
          </li>
          <li>
            <strong>Bug reports</strong> — if you use{" "}
            <code>/report-bug</code>, the description and any optional
            screenshot you submit.
          </li>
        </ul>
        <p>
          iSound does <strong>not</strong> read, log, or store the content of
          your regular Discord messages. It only ever sees data explicitly
          sent through its slash commands.
        </p>
      </section>

      <section>
        <h2>3. How We Use Information</h2>
        <ul>
          <li>To play music, manage queues, and apply your saved settings</li>
          <li>To keep your playlists available across servers and sessions</li>
          <li>To enforce DJ roles and per-server permissions</li>
          <li>To diagnose and fix bugs you report</li>
          <li>To monitor node health and prevent abuse of the service</li>
        </ul>
      </section>

      <section>
        <h2>4. Where Data Is Stored</h2>
        <p>
          Settings and playlists are stored in a MongoDB database operated by
          the iSound team. Reasonable technical safeguards are in place, but
          no online storage system can be guaranteed 100% secure. Audio is
          streamed through Lavalink nodes and is not recorded or retained.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          iSound retrieves audio and metadata from third-party platforms —
          including YouTube, SoundCloud, Bandcamp, Twitch, and Vimeo — to
          fulfill playback requests. Your use of iSound to access these
          platforms is also subject to their respective terms and privacy
          policies. iSound operates within Discord and is bound by{" "}
          <a
            href="https://discord.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://discord.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          in addition to this policy.
        </p>
      </section>

      <section>
        <h2>6. Data Retention & Deletion</h2>
        <p>
          Guild settings are retained until the server removes iSound, at
          which point associated data is deleted on a routine cleanup cycle.
          Playlists persist under your user ID until you delete them with{" "}
          <code>/pl-delete</code> or request full account data deletion by
          contacting us (see Section 9). We may retain minimal data as
          required to comply with legal obligations or resolve disputes.
        </p>
      </section>

      <section>
        <h2>7. Children&apos;s Privacy</h2>
        <p>
          iSound is intended for use in compliance with Discord&apos;s Terms
          of Service, which require users to meet Discord&apos;s minimum age
          requirement. We do not knowingly collect data from children below
          that age, and any such data discovered will be deleted.
        </p>
      </section>

      <section>
        <h2>8. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          or delete your data. You can self-serve most of this through
          commands like <code>/pl-list</code>, <code>/pl-delete</code>, and
          server settings commands. For anything else, reach out using the
          contact details below.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about this policy or a data request can be sent through
          the <code>/report-bug</code> command or via our support server,
          linked from the Discord invite page.
        </p>
      </section>

      <section>
        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy as iSound&apos;s features change.
          Material changes will be reflected by updating the &quot;Last
          updated&quot; date at the top of this page. Continued use of iSound
          after changes take effect constitutes acceptance of the revised
          policy.
        </p>
      </section>
    </LegalLayout>
  );
}
