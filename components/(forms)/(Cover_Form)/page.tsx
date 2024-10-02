"use client";
import React from 'react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface EnvelopeModalProps {
    coverForm: any; // 'any' because the form object from useForm will have many types
    onSubmit: (data: any) => void; // specify the type of data
    handleSubmit: (data: any) => void; // Updated to have a return type
}

const CoverForm = ({ coverForm, onSubmit, handleSubmit }: EnvelopeModalProps) => {
    return (
        <div>
            <div className="space-y-4 py-2 pb-4">
                <Form {...coverForm}>
                    <form onSubmit={coverForm.handleSubmit(onSubmit)}>
                        <FormField
                            control={coverForm.control}
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
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={coverForm.control}
                            name='fix_for'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fix For</FormLabel>
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
                            control={coverForm.control}
                            name='no'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number</FormLabel>
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
                            control={coverForm.control}
                            name='petitioner_complaint'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Petitioner Complaint</FormLabel>
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
                            control={coverForm.control}
                            name='respondent'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Respondent</FormLabel>
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
                            control={coverForm.control}
                            name='place'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Place</FormLabel>
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
                            control={coverForm.control}
                            name='date'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='date'
                                            placeholder='Please Enter Recipient Address.'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>Required</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={coverForm.control}
                            name='signature'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Signature</FormLabel>
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
                        <FormField
                            control={coverForm.control}
                            name='authorized_by'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Authorized By</FormLabel>
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
                        <FormField
                            control={coverForm.control}
                            name='address'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
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
                        <FormField
                            control={coverForm.control}
                            name='other_name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Other Names</FormLabel>
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

export default CoverForm