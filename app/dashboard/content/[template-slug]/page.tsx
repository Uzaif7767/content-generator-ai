"use client";
import React, { useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { useParams } from "next/navigation";

function CreateNewContent() {
  const params = useParams();
  const templateSlug = params["template-slug"];

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAioutput] = useState<string>("");
  const { user } = useUser();

  async function GenerateAIContent(formData: any) {
    try {
      setLoading(true);

      const FinalAIPrompt = `
User Input:
${JSON.stringify(formData)}

Instruction:
${selectedTemplate?.aiPrompt}

Generate clean, professional and well-structured content.
`;

      const res = await fetch("/api/generate-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: FinalAIPrompt }),
      });

      const data = await res.json();

      console.log("🔥 API Response:", data);

      setAioutput(data.text || "No response");

      await SaveINDb(formData, selectedTemplate?.slug, data.text);

    } catch (error) {
      console.error("Error:", error);
      setAioutput("❌ Failed to generate content");
    } finally {
      setLoading(false);
    }
  }

  const SaveINDb = async (formData: any, slug: any, aiResp: string) => {
    const createdBy =
      user?.primaryEmailAddress?.emailAddress || "Anonymous";

    try {
      await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: createdBy,
        createdAt: moment().format("DD/MM/yyyy"),
      });
    } catch (error) {
      console.error("DB Error:", error);
    }
  };

  return (
    <div className="p-5">
      <Link href={`/dashboard`}>
        <Button className="bg-blue-900">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFromInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />

        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;