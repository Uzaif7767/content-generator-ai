"use client"

import React, { useState } from 'react';
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFromInput: (formData: any) => void;
    loading: boolean;
}

function FormSection({ selectedTemplate, userFromInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>({});

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userFromInput(formData);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            <Image src={selectedTemplate?.icon || '/default-icon.png'} alt='icon' width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-blue-700'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>{item.label}</label>
                        {item.field === 'input' ? (
                            <Input
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        ) : item.field === 'textarea' ? (
                            <Textarea
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        ) : null}
                    </div>
                ))}
                <Button type='submit' className='w-full py-6' disabled={loading}>
                    {loading && <Loader2Icon className='animate-spin' />}
                    Generate Content
                </Button>
            </form>
        </div>
    );
}

export default FormSection;
