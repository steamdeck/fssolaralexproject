'use server';

import {
  calculateSavings,
  SavingsCalculatorInput,
  SavingsCalculatorOutput,
} from '@/ai/flows/savings-calculator';
import { z } from 'zod';

const SavingsCalculatorSchema = z.object({
  monthlyBill: z.coerce
    .number({ invalid_type_error: 'Please enter a valid number.' })
    .min(1, 'Monthly bill must be greater than 0.'),
  pincode: z.string().length(6, 'Please enter a valid 6-digit pincode.'),
  landSize: z.coerce
    .number({ invalid_type_error: 'Please enter a valid number.' })
    .min(1, 'Land size must be greater than 0.'),
});

export type FormState = {
  result?: SavingsCalculatorOutput;
  error?: string;
  fieldErrors?: {
    monthlyBill?: string[];
    pincode?: string[];
    landSize?: string[];
  };
};

export async function handleCalculateSavings(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    monthlyBill: formData.get('monthlyBill'),
    pincode: formData.get('pincode'),
    landSize: formData.get('landSize'),
  };

  const validatedFields = SavingsCalculatorSchema.safeParse(rawFormData);
  
  if (!validatedFields.success) {
    return {
      error: 'Please correct the errors below.',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await calculateSavings(validatedFields.data as SavingsCalculatorInput);
    return { result };
  } catch (error) {
    console.error('AI calculation failed:', error);
    return {
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
