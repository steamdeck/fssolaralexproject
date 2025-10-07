'use server';

import {
  calculateSavings,
  SavingsCalculatorInput,
  SavingsCalculatorOutput,
} from '@/ai/flows/savings-calculator';
import { z } from 'zod';

const SavingsCalculatorSchema = z.object({
  energyConsumption: z.coerce
    .number({ invalid_type_error: 'Please enter a valid number.' })
    .min(1, 'Energy consumption must be greater than 0.'),
  location: z.string().min(3, 'Location is required.'),
  currentEnergyCost: z.coerce.number().optional(),
});

export type FormState = {
  result?: SavingsCalculatorOutput;
  error?: string;
  fieldErrors?: {
    energyConsumption?: string[];
    location?: string[];
    currentEnergyCost?: string[];
  };
};

export async function handleCalculateSavings(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    energyConsumption: formData.get('energyConsumption'),
    location: formData.get('location'),
    currentEnergyCost: formData.get('currentEnergyCost') || undefined,
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
