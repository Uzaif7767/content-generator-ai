"use client";

import React, { useEffect, useState } from "react";
import {
  Editor,
  EditorProvider,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnBulletList,
  BtnNumberedList,
} from "react-simple-wysiwyg";

import { Copy, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [content, setContent] = useState("");

  // ✅ Clean AI text
  const cleanText = (text?: string) => {
    if (!text) return "";

    return text
      .replace(/\\[a-z]+[0-9]? ?|{\\|}|<[^>]*>/g, "")
      .replace(/[\r\n]+/g, "\n")
      .trim();
  };

  // ✅ Update editor content
  useEffect(() => {
    setContent(cleanText(aiOutput));
    setIsCopied(false);
  }, [aiOutput]);

  // ✅ Copy content
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // ✅ Clear editor
  const handleClear = () => {
    setContent("");
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>

        <div className="flex gap-2">
          <Button onClick={handleCopy} className="flex gap-2 bg-green-600">
            {isCopied ? (
              <>
                <Check className="w-4 h-4" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy
              </>
            )}
          </Button>

          <Button
            onClick={handleClear}
            className="flex gap-2"
            variant="destructive"
          >
            <Trash2 className="w-4 h-4" /> Clear
          </Button>
        </div>
      </div>

      <div className="p-4">
        <EditorProvider>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnBulletList />
            <BtnNumberedList />
          </Toolbar>

          <Editor
            value={content}
            onChange={(e) => setContent(e.target.value)}
            containerProps={{
              style: {
                minHeight: "400px",
              },
            }}
          />
        </EditorProvider>
      </div>
    </div>
  );
}

export default OutputSection;