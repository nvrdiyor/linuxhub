"use client";

import { MDXRemote as MDXRemoteClient, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Callout } from "./callout";
import { Steps, Step } from "./steps";
import { Tabs, TabList, TabTrigger, TabContent } from "./tabs";
import { CodeBlock } from "./code-block";

// MDX components
const mdxComponents = {
    Callout,
    Steps,
    Step,
    Tabs,
    TabList,
    TabTrigger,
    TabContent,
    CodeBlock,
};

interface MDXContentProps {
    mdxSource: MDXRemoteSerializeResult;
}

export function MDXContent({ mdxSource }: MDXContentProps) {
    return <MDXRemoteClient {...mdxSource} components={mdxComponents} />;
}
