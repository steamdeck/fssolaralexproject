
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
  energyConsumption: z
    .number()
    .describe('Monthly energy consumption in kilowatt-hours (kWh).'),
  location: z.string().describe('City and state in India of the user.'),
  currentEnergyCost: z
    .number()
    .optional()
    .describe('Current cost per kWh of energy in Rupees (₹).'),
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

You will calculate the potential savings and environmental impact of switching to solar panels for a user.

Use the following information:

Location: {{{location}}}
Energy Consumption: {{{energyConsumption}}} kWh/month
Current Energy Cost: {{{currentEnergyCost}}} ₹/kWh (if available)

Provide a recommendation for the type and size of solar panel system that would be suitable for the user's home in India.

Estimate the monthly savings in Rupees (₹) after switching to solar.

Describe the environmental impact of switching to solar, including carbon emissions reduction in tonnes of CO2.

Ensure that the estimatedSavings field is a number.
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
