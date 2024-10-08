import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'

const schema = z.object({
    file: z.instanceof(File, { message: "Invalid file" })
        .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB')
        .refine((file)=> file.type.startsWith('audio/') || file.type.startsWith('video/'), 'File must be an audio or a video file')
})
export default function UploadForm() {
    return (
        <form>
            <div className="flex justify-end items-center gap-1.5">
                <Input id="file" type="file" name='file' accept='audio/*,video/*' required />
                <Button>Transcribe</Button>
            </div>
        </form>
    )
}

