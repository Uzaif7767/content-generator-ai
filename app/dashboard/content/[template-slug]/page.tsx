"use client";
import React, { useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { useParams } from "next/navigation"; // ✅ Fix: Using useParams()

function CreateNewContent() {
    const params = useParams(); // ✅ Fix
    const templateSlug = params["template-slug"];

    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === templateSlug
    );

    const [loading, setLoading] = useState(false);
    const [aiOutput, setAioutput] = useState<string>("");
    const { user } = useUser(); // Clerk user

    async function GenerateAIContent(formData: any) {
        try {
            setLoading(true);
            const SelectedPropmt = selectedTemplate?.aiPrompt;
            const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPropmt;

            console.log("Final AI Prompt:", FinalAIPrompt);

            const result = await chatSession.sendMessage(FinalAIPrompt);
            const responseText = await result.response.text();
            console.log("AI Response:", responseText);

            setAioutput(responseText);
            await SaveINDb(formData, selectedTemplate?.slug, responseText);
        } catch (error) {
            console.error("Error generating AI content:", error);
            setAioutput("Failed to generate content. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    // Retry logic for DB saving
    const SaveINDb = async (formData: any, slug: any, aiResp: string) => {
        const MAX_RETRIES = 3;
        let attempt = 0;
        const createdBy = user?.primaryEmailAddress?.emailAddress || "Anonymous";

        while (attempt < MAX_RETRIES) {
            try {
                console.log("Attempting to save to DB... Attempt:", attempt + 1);
                const result = await db.insert(AIOutput).values({
                    formData: formData,
                    templateSlug: slug,
                    aiResponse: aiResp,
                    createdBy: createdBy,
                    createdAt: moment().format("DD/MM/yyyy"),
                });

                console.log("Database save result:", result);
                return;
            } catch (error) {
                attempt += 1;
                console.error(`Database error (Attempt ${attempt}):`, error);
                if (attempt >= MAX_RETRIES) {
                    setAioutput("Failed to save content after multiple attempts. Please try again.");
                    break;
                }
            }
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
