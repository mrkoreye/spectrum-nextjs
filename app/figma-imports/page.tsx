"use client";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { SSRProvider, Provider, defaultTheme } from "@adobe/react-spectrum";
import { useEffect, useState } from "react";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default function Page(props: PageProps) {
  const [content, setContent] = useState(undefined);
  const builderModelName = "figma-imports";

  useEffect(() => {
    async function getBuilderContent() {
      return await builder
        .get(builderModelName, {
          userAttributes: {
            urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
          },
        })
        .toPromise();
    }

    getBuilderContent().then((data) => setContent(data));
  }, []);

  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <RenderBuilderContent content={content} model={builderModelName} />
      </Provider>
    </SSRProvider>
  );
}
