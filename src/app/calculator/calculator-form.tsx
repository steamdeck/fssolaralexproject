'use client';

import { useFormState, useFormStatus } from 'react-dom';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { handleCalculateSavings, type FormState } from './actions';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { CircleDollarSign, Leaf, Loader2, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Calculating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Calculate My Savings
        </>
      )}
    </Button>
  );
}

const initialFormState: FormState = {};

export function CalculatorForm() {
  const [state, formAction] = useFormState(handleCalculateSavings, initialFormState);
  // We use a dummy useForm for component compatibility but logic is in server action
  const form = useForm(); 

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Estimate Your Solar Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormItem>
                  <FormLabel>
                    Average Monthly Energy Use (kWh)
                  </FormLabel>
                  <FormControl>
                    <Input
                      name="energyConsumption"
                      type="number"
                      placeholder="e.g., 750"
                      required
                    />
                  </FormControl>
                  <FormDescription>
                    You can find this on your electricity bill.
                  </FormDescription>
                  {state.fieldErrors?.energyConsumption && (
                    <FormMessage>{state.fieldErrors.energyConsumption[0]}</FormMessage>
                  )}
                </FormItem>

                <FormItem>
                  <FormLabel>Location (City, State)</FormLabel>
                  <FormControl>
                    <Input name="location" placeholder="e.g., San Diego, CA" required />
                  </FormControl>
                  <FormDescription>
                    Helps us estimate solar potential in your area.
                  </FormDescription>
                  {state.fieldErrors?.location && (
                    <FormMessage>{state.fieldErrors.location[0]}</FormMessage>
                  )}
                </FormItem>
              </div>

              <FormItem>
                <FormLabel>Current Cost per kWh (Optional)</FormLabel>
                <FormControl>
                  <Input
                    name="currentEnergyCost"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 0.15"
                  />
                </FormControl>
                <FormDescription>
                  Your cost in USD per kWh, if you know it.
                </FormDescription>
                {state.fieldErrors?.currentEnergyCost && (
                    <FormMessage>{state.fieldErrors.currentEnergyCost[0]}</FormMessage>
                  )}
              </FormItem>
              
              <SubmitButton />
              
              {state.error && !state.fieldErrors && (
                <p className="text-sm font-medium text-destructive">{state.error}</p>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {state.result && (
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Your Personalized Results</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-primary text-primary-foreground">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Estimated Monthly Savings</CardTitle>
                        <CircleDollarSign className="h-6 w-6 text-primary-foreground/70" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-5xl font-bold">
                            ${state.result.estimatedSavings.toFixed(2)}
                        </div>
                        <p className="text-xs text-primary-foreground/80">
                            Based on your energy usage and location.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Environmental Impact</CardTitle>
                        <Leaf className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{state.result.environmentalImpact}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Solar System Recommendation</CardTitle>
                        <Sparkles className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground">{state.result.solarPanelRecommendation}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      )}
    </div>
  );
}
