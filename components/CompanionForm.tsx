"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "./ui/select"
import { subjects } from "@/constants"
import { createCompanion } from "@/lib/actions/companion.actions"
import { redirect } from "next/navigation";
const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required.'}),
    subject: z.string().min(1, { message: 'Subject is required.'}),
    topic: z.string().min(1, { message: 'Topic is required.'}),
    voice: z.string().min(1, { message: 'Voice is required.'}),
    style: z.string().min(1, { message: 'Style is required.'}),
    duration: z.number().min(1, { message: 'Duration is required.'}),
})

const CompanionForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
    },
  })
 
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const companions = await createCompanion(values);

        if(companions) {
            redirect(`/companions/${companions.id}`);
        } else {
            console.log('Failed to create a companion');
            redirect('/');
        }
    }


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
             control={form.control} 
             name="name" render={({ field }) => ( 
                <FormItem>  
                    <FormLabel>Companion Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter the Companion Name"
                         {...field} className="Input" />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>   
             )}
            />
             <FormField
             control={form.control} 
             name="subject" render={({ field }) => ( 
                <FormItem>  
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                        <Select
                         onValueChange={field.onChange}
                         value={field.value}
                         defaultValue={field.value}
                         >

                            <SelectTrigger className="input capitalize">
                                <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map((subject) => (
                                        <SelectItem key={subject} value={subject} className="capitalize">
                                            {subject}
                                        </SelectItem>
                                    ))} 
                                </SelectContent>
                        </Select>
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>   
             )}
            />
             <FormField
             control={form.control} 
             name="topic" render={({ field }) => ( 
                <FormItem>  
                    <FormLabel>What should the companion Do?</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Eg. Derevatives and Integrals"
                         {...field} className="Input" />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>   
             )}
            />
              <FormField
             control={form.control} 
             name="voice" render={({ field }) => ( 
                <FormItem>  
                    <FormLabel>Voice</FormLabel>
                    <FormControl>
                        <Select
                         onValueChange={field.onChange}
                         value={field.value}
                         defaultValue={field.value}
                         >

                            <SelectTrigger className="input ">
                                <SelectValue placeholder="Select the voice" />
                                </SelectTrigger>
                                <SelectContent>
                                    
                                        <SelectItem  value="Male" >
                                            Male
                                        </SelectItem>
                                        <SelectItem  value="Female" >
                                            Female
                                        </SelectItem>
                                   
                                </SelectContent>
                        </Select>
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>   
             )}
            />
               <FormField
             control={form.control} 
             name="style" render={({ field }) => ( 
                <FormItem>  
                    <FormLabel>Style</FormLabel>
                    <FormControl>
                        <Select
                         onValueChange={field.onChange}
                         value={field.value}
                         defaultValue={field.value}
                         >

                            <SelectTrigger className="input ">
                                <SelectValue placeholder="Select the style" />
                                </SelectTrigger>
                                <SelectContent>
                                    
                                        <SelectItem  value="formal" >
                                           formal
                                        </SelectItem>
                                        <SelectItem  value="casual" >
                                            casual
                                        </SelectItem>
                                   
                                </SelectContent>
                        </Select>
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>   
             )}
            />
             <FormField
             control={form.control} 
             name="duration" render={({ field }) => ( 
                <FormItem>  
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="15"
                         {...field} className="Input" />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>   
             )}
            />
           
            <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
        </form>
    </Form>
  )
}

export default CompanionForm