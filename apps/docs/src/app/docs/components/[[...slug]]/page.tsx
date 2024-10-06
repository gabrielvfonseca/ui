import { notFound } from "next/navigation"

import { allDocs } from "contentlayer/generated";

import { Mdx } from "@components/mdx/components";

import type { Metadata } from "next";

import { constructMetadata } from "@utils/metadata";
import Heading from "@components/heading";

interface DocPageProps {
  params: {
    slug: string[]
  }
};

async function getDocFromParams(params) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
};

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params);

  if (!doc) {
    return {};
  }

  return constructMetadata({
    title: doc.title,
    description: doc.description,
  }) as Metadata;
};

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
};

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) notFound();

  return (
    <div className="h-fit">
      <Heading 
        title={doc.title}
        description={doc.description}
      />
      <div className="p-12 border-t border-gray-alpha-400">
        <Mdx code={doc.body.code} />
      </div>
    </div>
  );
};