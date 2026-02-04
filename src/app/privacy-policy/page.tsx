import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for LinuxHub.uz - Learn how we collect, use, and protect your data. Information about cookies, Google AdSense, and your privacy rights.",
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "February 4, 2026";

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Privacy Policy
                </h1>
                <p className="text-muted-foreground">Last updated: {lastUpdated}</p>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Introduction</h2>
                    <p>
                        Welcome to LinuxHub.uz (&quot;we,&quot; &quot;our,&quot; or
                        &quot;us&quot;). We are committed to protecting your privacy and
                        ensuring transparency about how we collect, use, and safeguard your
                        information when you visit our website at{" "}
                        <Link href="https://linuxhub.uz" className="text-primary underline">
                            https://linuxhub.uz
                        </Link>
                        .
                    </p>
                    <p>
                        This Privacy Policy explains our practices regarding data
                        collection and usage. By using our website, you agree to the
                        collection and use of information in accordance with this policy.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Information We Collect</h2>

                    <h3 className="text-xl font-medium mt-4">
                        Automatically Collected Information
                    </h3>
                    <p>
                        When you visit our website, we automatically collect certain
                        information about your device and your visit. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Log Files:</strong> Our servers automatically record
                            information that your browser sends whenever you visit our
                            website. These log files may include your Internet Protocol (IP)
                            address, browser type and version, the pages you visit, the time
                            and date of your visit, the time spent on those pages, and other
                            statistics.
                        </li>
                        <li>
                            <strong>Device Information:</strong> We collect information about
                            the device you use to access our website, including the hardware
                            model, operating system and version, unique device identifiers,
                            and mobile network information.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> We collect information about how you
                            interact with our website, including the pages you view, the links
                            you click, and the features you use.
                        </li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track activity
                        on our website and hold certain information. Cookies are files with
                        a small amount of data that are sent to your browser from a website
                        and stored on your device.
                    </p>

                    <h3 className="text-xl font-medium mt-4">Types of Cookies We Use</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Essential Cookies:</strong> These cookies are necessary
                            for the website to function properly and cannot be switched off in
                            our systems.
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> These cookies allow us to
                            count visits and traffic sources so we can measure and improve the
                            performance of our site.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> These cookies are used to
                            deliver advertisements that are relevant to you and your
                            interests.
                        </li>
                    </ul>

                    <p className="mt-4">
                        You can instruct your browser to refuse all cookies or to indicate
                        when a cookie is being sent. However, if you do not accept cookies,
                        you may not be able to use some portions of our website.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">
                        Google AdSense and DoubleClick Cookies
                    </h2>
                    <p>
                        We use Google AdSense to display advertisements on our website.
                        Google AdSense uses cookies, including the DoubleClick cookie, to
                        serve ads based on your prior visits to our website and other
                        websites on the Internet.
                    </p>

                    <h3 className="text-xl font-medium mt-4">How Google Uses Cookies</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Google uses the DoubleClick cookie to enable it and its partners
                            to serve ads to you based on your visit to our site and/or other
                            sites on the Internet.
                        </li>
                        <li>
                            Third-party vendors, including Google, use cookies to serve ads
                            based on your prior visits to our website or other websites.
                        </li>
                        <li>
                            Google&apos;s use of advertising cookies enables it and its
                            partners to serve ads based on your visit to our site and/or other
                            sites on the Internet.
                        </li>
                    </ul>

                    <h3 className="text-xl font-medium mt-4">Opting Out</h3>
                    <p>
                        You may opt out of personalized advertising by visiting{" "}
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Google Ads Settings
                        </a>
                        . Alternatively, you can opt out of a third-party vendor&apos;s use
                        of cookies for personalized advertising by visiting{" "}
                        <a
                            href="https://www.aboutads.info/choices/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            www.aboutads.info
                        </a>
                        .
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                    <p>We use the information we collect for various purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To provide and maintain our website</li>
                        <li>To improve and personalize your experience on our website</li>
                        <li>To understand how visitors use our website</li>
                        <li>To display relevant advertisements</li>
                        <li>To detect, prevent, and address technical issues</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Data Sharing and Disclosure</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your personally
                        identifiable information to outside parties except in the following
                        circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Service Providers:</strong> We may share information with
                            third-party service providers who assist us in operating our
                            website and serving advertisements (such as Google AdSense).
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> We may disclose your
                            information if required to do so by law or in response to valid
                            requests by public authorities.
                        </li>
                        <li>
                            <strong>Protection of Rights:</strong> We may disclose information
                            to protect our rights, privacy, safety, or property, and that of
                            our users or others.
                        </li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Your Consent</h2>
                    <p>
                        By using our website, you consent to our Privacy Policy and agree to
                        its terms. You also consent to the use of cookies and similar
                        technologies as described in this policy.
                    </p>
                    <p>
                        If you do not agree with this policy, please do not use our website.
                        Your continued use of our website following the posting of changes
                        to this policy will be deemed your acceptance of those changes.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Your Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>The right to access your personal data</li>
                        <li>The right to rectification of inaccurate data</li>
                        <li>The right to erasure of your data</li>
                        <li>The right to restrict processing</li>
                        <li>The right to data portability</li>
                        <li>The right to object to processing</li>
                    </ul>
                    <p className="mt-4">
                        To exercise any of these rights, please contact us using the
                        information provided below.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Children&apos;s Privacy</h2>
                    <p>
                        Our website is not intended for children under the age of 13. We do
                        not knowingly collect personal information from children under 13.
                        If you are a parent or guardian and you are aware that your child
                        has provided us with personal information, please contact us.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify
                        you of any changes by posting the new Privacy Policy on this page
                        and updating the &quot;Last updated&quot; date at the top of this
                        policy.
                    </p>
                    <p>
                        You are advised to review this Privacy Policy periodically for any
                        changes. Changes to this Privacy Policy are effective when they are
                        posted on this page.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact
                        us:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Via Telegram:{" "}
                            <a
                                href="https://t.me/dior_react"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                @dior_react
                            </a>
                        </li>
                        <li>
                            Via GitHub:{" "}
                            <a
                                href="https://github.com/diyornv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                github.com/diyornv
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
}
