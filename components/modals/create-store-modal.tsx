"use client";

import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import EnvelopeForm from '../(forms)/(Envelope_Form)/page';
import CoverForm from '../(forms)/(Cover_Form)/page';

interface EnvelopeStoreModalProps {
    onSubmit: (data: any) => void
}


interface CoverStoreModalProps {
    onSubmit: (data: any) => void
}



const envelopeFormSchema = z.object({
    name: z.string().min(1),
    degree: z.string(),
    profession: z.string(),
    residential: z.string(),
    phoneno: z.string(),
    email: z.string(),
    recipient: z.string()


});



const coverFormSchema = z.object({
    court_name: z.string().min(1),
    no: z.string(),
    fix_for: z.string(),
    petitioner_complaint: z.string(),
    respondent: z.string(),
    place: z.string(),
    date: z.string(),
    signature: z.string(),
    authorized_by: z.string(),
    address: z.string(),
    other_name: z.string(),

});



export const EnvelopeStoreModal = ({ onSubmit }: EnvelopeStoreModalProps) => {
    // Access the state and actions from the custom hook
    // const storeModal = useStoreModal();

    const envelopeForm = useForm<z.infer<typeof envelopeFormSchema>>({
        resolver: zodResolver(envelopeFormSchema),
        defaultValues: {
            name: "",
        },
    });
    {
        /*
            This is a function called handleSubmit function this is a async fat arrow function which takes
            values as prop and its type would be of the type envelopeFormSchema 
            
            also onSubmit function takes data as a parameter whose type is any defined in the 
            EnvelopeStoreModalProps
        */
    }
    const handleSubmit = async (values: z.infer<typeof envelopeFormSchema>) => {
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
        <EnvelopeForm
            form={envelopeForm}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        />
        // </Modal>
    );
};

export const CoverStoreModal = ({ onSubmit }: CoverStoreModalProps) => {

    const coverForm = useForm<z.infer<typeof coverFormSchema>>({
        resolver: zodResolver(coverFormSchema),
        defaultValues: {
            court_name: "",
        },
    });

    const handleSubmit = async (values: z.infer<typeof coverFormSchema>) => {
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
        <CoverForm
            coverForm={coverForm}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        />
        // </Modal>
    );

}