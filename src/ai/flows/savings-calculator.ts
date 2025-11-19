
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
  landSize: z
    .number()
    .describe('The available terrace or land size in square feet.'),
});
export type SavingsCalculatorInput = z.infer<typeof SavingsCalculatorInputSchema>;

const SavingsCalculatorOutputSchema = z.object({
  monthlySavings: z
    .number()
    .describe('Estimated monthly savings in Rupees (₹) after switching to solar.'),
  annualSavings: z
    .number()
    .describe('Estimated annual savings in Rupees (₹) after switching to solar.'),
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
Pincode: {{{pincode}}}
Monthly Electricity Bill: ₹{{{monthlyBill}}}
Terrace/Land Size: {{{landSize}}} sq ft

Here are the formulas you MUST use for your calculations:

1.  **Calculate Solar Capacity from Land Size:**
    - Formula: Solar Capacity (kW) = Usable Area (sq ft) / 100
    - Example: 300 sq ft -> 3 kW

2.  **Calculate Required Solar Size from Bill:**
    - Assume electricity rate is ₹8/unit.
    - Monthly Units = Monthly Bill (₹) / 8
    - Required kW = Monthly Units / 120
    - Example: Bill ₹500 -> 62.5 units -> 0.52 kW required. Recommend the next practical size, e.g., 1 kW.

3.  **Calculate Savings:**
    - Monthly Saving = Monthly Bill
    - Yearly Saving = Monthly Saving × 12

**Your Task:**

1.  **Solar Panel Recommendation:**
    - Calculate the possible system size based on `landSize`.
    - Calculate the required system size based on `monthlyBill`.
    - Compare these two values and recommend the most practical solar panel system size (in kW) for the user. Explain your choice. For instance, if the land can only fit a 2kW system but the user needs 3kW, you should recommend the 2kW system and explain the limitation.

2.  **Savings Calculation:**
    - Calculate `monthlySavings` which must be equal to the user's `monthlyBill`.
    - Calculate `annualSavings` which must be `monthlySavings * 12`.

3.  **Environmental Impact:**
    - Describe the environmental impact of the recommended solar system, including carbon emissions reduction in tonnes of CO2 per year.

**Output Format:**
- Your final response must be a JSON object matching the output schema.
- `monthlySavings` must be a number.
- `annualSavings` must be a number.
- `solarPanelRecommendation` should be a descriptive string.
- `environmentalImpact` should be a descriptive string.
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
    if (!output) {
      throw new Error('The AI model did not return a valid output.');
    }

    // Ensure the output conforms to the logic requested
    const correctedOutput: SavingsCalculatorOutput = {
      ...output,
      monthlySavings: input.monthlyBill,
      annualSavings: input.monthlyBill * 12,
    };
    
    return correctedOutput;
  }
);
