'use client';
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast';
import { useUploadThing } from '@/utils/uploadthing'; 

const schema = z.object({
    file: z.instanceof(File, { message: "Invalid file" })
        .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB')
        .refine((file)=> file.type.startsWith('audio/') || file.type.startsWith('video/'), 'File must be an audio or a video file')
})
export default function UploadForm() {
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
        const file = formData.get('file') as File;

        const validatedFields = schema.safeParse({file});
        
        if(!validatedFields.success){
            console.log("validatedFields", validatedFields.error.flatten().fieldErrors)
            toast({title: "Something went wrong",variant: 'destructive',description: validatedFields.error.flatten().fieldErrors.file?.[0]?? "Invalid file", })
        }

        if(file){
            const resp =await startUpload([file])
            console.log(resp)
        }
    }
    return (
        <form action={handleTranscribe}>
            <div className="flex justify-end items-center gap-1.5">
                <Input id="file" type="file" name='file' accept='audio/*,video/*' required />
                <Button>Transcribe</Button>
            </div>
        </form>
    )
}

