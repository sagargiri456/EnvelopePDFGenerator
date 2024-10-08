"use client";
import React from 'react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CoverFormProps {
    form: any; // 'any' because the form object from useForm will have many types
    onSubmit: (data: any) => void; // function to handle form submission
    handleSubmit:(data:any)=>void
  }

const EnvelopeForm = ({ form, onSubmit,handleSubmit }: CoverFormProps) => {
  return (
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
  )
}

export default EnvelopeForm