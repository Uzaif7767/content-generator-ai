"use client";

import React, { useState } from "react";
import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFromInput: (formData: any) => void;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFromInput, loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTemplate) return; // 🔥 safety

    userFromInput(formData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔥 agar template nahi hai to UI mat dikhao
  if (!selectedTemplate) {
    return (
      <div className="p-5 border rounded-lg bg-white text-center text-gray-500">
        Please select a template
      </div>
    );
  }

  return (
    <div className="p-5 shadow-md border rounded-xl bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={selectedTemplate.icon || "/default-icon.png"}
          alt={selectedTemplate.name}
          width={60}
          height={60}
          className="rounded-lg bg-gray-100 p-2"
        />

        <div>
          <h2 className="font-bold text-2xl text-blue-700">
            {selectedTemplate.name}
          </h2>
          <p className="text-gray-500 text-sm">
            {selectedTemplate.desc}
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="mt-4 text-gray-500 space-y-5" onSubmit={onSubmit}>
        {selectedTemplate.form?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="font-semibold text-sm">
              {item.label}
            </label>

            {item.field === "input" && (
              <Input
                name={item.name}
                required={item.required}
                placeholder={`Enter ${item.label}`}
                onChange={handleInputChange}
              />
            )}

            {item.field === "textarea" && (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full py-6 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin w-4 h-4" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;