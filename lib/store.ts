// lib/store.ts
import { create } from 'zustand';
import { GlobalFormData } from './types';

interface FormState {
    formDataGlobal: GlobalFormData;
    updateFormDataGlobal: (data: Partial<GlobalFormData>) => void;
}

export const useFormStore = create<FormState>((set) => ({
    formDataGlobal: {
        name: '',
        llmreplacement: '',
        designation: '',
        resident: '',
        mobileno: '',
        email: '',
        recipientaddress: '',
        court_name: '',
        no: '',
        fix_for: '',
        petitioner_complaint: '',
        respondent: '',
        place: '',
        date: '',
        signature: '',
        authorized_by: '',
        address: '',
        other_name: '',
        persion1: '',
        persion2: '',
    },
    updateFormDataGlobal: (data) => set((state) => ({
        formDataGlobal: { ...state.formDataGlobal, ...data },
    })),
}));
