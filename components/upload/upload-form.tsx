'use client';
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast';
import { useUploadThing } from '@/utils/uploadthing'; 
import { generateBlogPostAction, transcribeUploadedFile } from '@/actions/upload-actions';
import { FileUpload } from '../ui/file-upload';

const schema = z.object({
    file: z.instanceof(File, { message: "Invalid file" })
        .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB')
        .refine((file)=> file.type.startsWith('audio/') || file.type.startsWith('video/'), 'File must be an audio or a video file')
})
export default function UploadForm() {
    const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
    const {toast} = useToast()
    const {startUpload} = useUploadThing("videoOrAudioUploader", {
        onClientUploadComplete: () => {
          alert("uploaded successfully!");
        },
        onUploadError: () => {
          alert("error occurred while uploading");
        },
        onUploadBegin: () => {
          console.log("upload has begun for");
        },
      })
    async function handleTranscribe(formData: FormData){
        const file = files[0]
        console.log(files[0])
        const validatedFields = schema.safeParse({file});
        
        if(!validatedFields.success){
            console.log("validatedFields", validatedFields.error.flatten().fieldErrors)
            toast({title: "Something went wrong",variant: 'destructive',description: validatedFields.error.flatten().fieldErrors.file?.[0]?? "Invalid file", })
        }

        if(file){
            const resp: any = await startUpload([file])
            console.log(resp)

            if(!resp){
                toast({
                    title: 'Somethign went wrong',
                    description: 'Please use a different file',
                    variant: 'destructive'
                })
            }

            const result = await transcribeUploadedFile(resp)

            const { data = null, message = null } = result || {}

            if( !result || (!data && !message)){
                toast({
                    title: 'An unexpected error',
                    description: 'An error occured during transcription. Please try again.',
                    variant: 'destructive'
                })
            }

            if(data){
                // loading for generating blog post

                await generateBlogPostAction({
                    transcriptions: data.transcriptions,
                    userId: data.userId
                })
            }
        }
    }
    return (
        <form action={handleTranscribe}>
            <div className="flex justify-end items-center flex-col gap-1.5">
                {/* <Input id="file" type="file" name='file' accept='audio/*,video/*' required /> */}
                <FileUpload  onChange={handleFileUpload} />
                <Button>Transcribe</Button>
            </div>
        </form>
    )
}

