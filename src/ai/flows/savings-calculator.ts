
// savings-calculator.ts
'use server';

/**
 * @fileOverview A savings calculator AI agent.
 *
 * - calculateSavings - A function that handles the savings calculation process.
 * - SavingsCalculatorInput - The input type for the calculateSavings function.
 * - SavingsCalculatorOutput - The return type for the calculateSavings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SavingsCalculatorInputSchema = z.object({
  monthlyBill: z
    .number()
    .describe('Average monthly electricity bill in Rupees (₹).'),
  pincode: z.string().describe('The 6-digit pincode of the user\'s location in India.'),
});
export type SavingsCalculatorInput = z.infer<typeof SavingsCalculatorInputSchema>;

const SavingsCalculatorOutputSchema = z.object({
  estimatedSavings: z
    .number()
    .describe('Estimated monthly savings in Rupees (₹) after switching to solar.'),
  environmentalImpact: z
    .string()
    .describe(
      'Description of the environmental impact of switching to solar, including carbon emissions reduction.'
    ),
  solarPanelRecommendation: z
    .string()
    .describe('Recommendation for the type and size of solar panel system.'),
});
export type SavingsCalculatorOutput = z.infer<typeof SavingsCalculatorOutputSchema>;

export async function calculateSavings(
  input: SavingsCalculatorInput
): Promise<SavingsCalculatorOutput> {
  return calculateSavingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'savingsCalculatorPrompt',
  input: {schema: SavingsCalculatorInputSchema},
  output: {schema: SavingsCalculatorOutputSchema},
  prompt: `You are an expert in renewable energy economics and environmental impact in India.

You will calculate the potential savings and environmental impact of switching to solar panels for a user based on their monthly electricity bill and pincode.

Use the following information:

Pincode: {{{pincode}}}
Monthly Electricity Bill: ₹{{{monthlyBill}}}

Based on the pincode, determine the city, state, and average electricity tariff if not implicitly available. Assume an average cost per unit if needed to estimate energy consumption from the bill.

Provide a recommendation for the type and size of solar panel system that would be suitable for the user's home in India.

Estimate the monthly savings in Rupees (₹) after switching to solar. The savings should be the amount the user saves from their current bill.

Describe the environmental impact of switching to solar, including carbon emissions reduction in tonnes of CO2.

Ensure that the estimatedSavings field is a number representing the money saved per month.
`,
});

const calculateSavingsFlow = ai.defineFlow(
  {
    name: 'calculateSavingsFlow',
    inputSchema: SavingsCalculatorInputSchema,
    outputSchema: SavingsCalculatorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
