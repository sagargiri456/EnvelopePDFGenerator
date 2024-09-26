"use client";

import * as z from 'zod';
// import { useStoreModal } from "@/hooks/use-store-modal";
// import { Modal } from "@/components/ui/modal";
import { ReactNode } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface StoreModalProps {
        onSubmit: (data: any) => void
}

const formSchema = z.object({
    name: z.string().min(1),
    degree: z.string(),
    profession: z.string(),
    residential: z.string(),
    phoneno: z.string(),
    email: z.string(),
    recipient: z.string()


});

export const StoreModal = ({ onSubmit }: StoreModalProps) => {
    // Access the state and actions from the custom hook
    // const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        onSubmit(values);
    };

    // Render the Modal component with values from the store
    return (
        // <Modal
        //   title="Create Store"
        //   description="This is the description of the store modal."
        //   isOpen={storeModal.isOpen}
        //   onClose={storeModal.onClose}
        // >
        <div>
            <div className="space-y-4 py-2 pb-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Name'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='degree'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Degree:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter the Qualification Degree'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='profession'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Profession:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Profession.'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='residential'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Residential Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Residential Address.'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='phoneno'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Phone Number.'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Email.'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='recipient'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Reciepient Address:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Recipient Address.'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />


                        <div className='pt-6 space-x-2 flex items-center justify-end'>
                            <Button
                                variant='outline'
                                onClick={() => { console.log('Closed it') }}>
                                Cancel
                            </Button>
                            <Button type='submit'>Continue</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
        // </Modal>
    );
};
