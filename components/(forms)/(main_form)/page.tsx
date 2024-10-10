"use client";
import React from 'react'
import { useState } from 'react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface globalFormProps {
    globalForm: any;
    onSubmit: (data: any) => void;
    handleSubmit: (data: any) => void;
}

const GlobalForm = ({ globalForm, onSubmit, handleSubmit }: globalFormProps) => {
    return (
        <div>
            <div className="space-y-4 py-2 pb-4">
                <Form {...globalForm}>
                    <form onSubmit={globalForm.handleSubmit(onSubmit)}>
                        <FormField
                            control={globalForm.control}
                            name='court_name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Name'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
                            name='persion1'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Persion</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter the First Persion'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
                            name='persion2'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Second Persion</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter the First Persion Name.'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
                            name='brief_for'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Brief For</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Brief For.'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
                            name='opposite_counsel'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Opposite Counsel</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Your Opposite Counsel.'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
                            name='books_citation'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Books Citation</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Please Enter Books Citation.'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={globalForm.control}
                            name='before_the_honable'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Before The Honable</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder=' Before the honable'
                                            {...field}

                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={globalForm.control}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={globalForm.control}
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

export default GlobalForm