import React, { useState, useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy, Check, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef: any = useRef();
  const [isCopied, setIsCopied] = useState(false); // Track if content is copied

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();

    // Clean the input to remove unwanted RTF/HTML
    const cleanOutput = cleanText(aiOutput);
    editorInstance.setMarkdown(cleanOutput); // Set the cleaned markdown content in the editor

    // Reset the copied state when new content is passed
    setIsCopied(false); // Reset the button back to 'Copy'
  }, [aiOutput]);

  // Function to clean text (removing RTF/HTML tags)
  const cleanText = (text: string) => {
    // Removes RTF tags, HTML tags, and excess spaces
    return text
      .replace(/\\[a-z]+[0-9]? ?|{\\|}|<[^>]*>/g, '') // Remove RTF and HTML tags
      .replace(/[\r\n]+/g, '\n') // Normalize newlines
      .trim(); // Remove leading/trailing whitespace
  };

  // Function to copy content from editor to clipboard
  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const content = editorInstance.getMarkdown(); // Get the markdown content from the editor

    // Copy content to clipboard
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setIsCopied(true); // Change button to 'Copied!' when successful
        setTimeout(() => {
          setIsCopied(false); // Reset the button back to 'Copy' after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text:', err);
      });
  };

  // Function to clear the editor content
  const handleClear = () => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(''); // Clear the markdown content
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
          <Button onClick={handleClear} className="flex gap-2" variant="destructive">
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
