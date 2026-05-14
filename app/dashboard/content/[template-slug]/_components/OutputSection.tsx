import React, { useState, useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy, Check, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef: any = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  // ✅ SAFE CLEAN FUNCTION
  const cleanText = (text?: string) => {
    if (!text) return ""; // 🔥 FIX (no crash)

    return text
      .replace(/\\[a-z]+[0-9]? ?|{\\|}|<[^>]*>/g, "")
      .replace(/[\r\n]+/g, "\n")
      .trim();
  };

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();

    if (!editorInstance) return; // 🔥 FIX

    const cleanOutput = cleanText(aiOutput || "");

    editorInstance.setMarkdown(cleanOutput);

    setIsCopied(false);
  }, [aiOutput]);

  // ✅ COPY FUNCTION SAFE
  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) return;

    const content = editorInstance.getMarkdown();

    navigator.clipboard
      .writeText(content)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text:', err);
      });
  };

  // ✅ CLEAR FUNCTION SAFE
  const handleClear = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) return;

    editorInstance.setMarkdown('');
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

      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="450px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;