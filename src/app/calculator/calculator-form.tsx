
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
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
import { CircleDollarSign, Leaf, Loader2, Sparkles, Calendar, Home } from 'lucide-react';

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
  const [state, formAction] = useActionState(handleCalculateSavings, initialFormState);
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <FormItem>
                  <FormLabel>
                    Monthly Bill (₹)
                  </FormLabel>
                  <FormControl>
                    <Input
                      name="monthlyBill"
                      type="number"
                      placeholder="e.g., 2500"
                      required
                    />
                  </FormControl>
                  <FormDescription>
                    Your average bill in Rupees.
                  </FormDescription>
                  {state.fieldErrors?.monthlyBill && (
                    <FormMessage>{state.fieldErrors.monthlyBill[0]}</FormMessage>
                  )}
                </FormItem>

                <FormItem>
                  <FormLabel>Land Size (sq ft)</FormLabel>
                  <FormControl>
                    <Input name="landSize" type="number" placeholder="e.g., 500" required />
                  </FormControl>
                  <FormDescription>
                    Available terrace/land area.
                  </FormDescription>
                  {state.fieldErrors?.landSize && (
                    <FormMessage>{state.fieldErrors.landSize[0]}</FormMessage>
                  )}
                </FormItem>

                <FormItem>
                  <FormLabel>Pincode</FormLabel>
                  <FormControl>
                    <Input name="pincode" placeholder="e.g., 110085" required />
                  </FormControl>
                  <FormDescription>
                    Your 6-digit area pincode.
                  </FormDescription>
                  {state.fieldErrors?.pincode && (
                    <FormMessage>{state.fieldErrors.pincode[0]}</FormMessage>
                  )}
                </FormItem>
              </div>
              
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <Card className="bg-primary text-primary-foreground lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Estimated Savings</CardTitle>
                        <CircleDollarSign className="h-6 w-6 text-primary-foreground/70" />
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="text-center flex-1">
                           <p className="text-xs text-primary-foreground/80 mb-1">Monthly Savings</p>
                            <div className="text-5xl font-bold">
                                ₹{state.result.monthlySavings.toFixed(2)}
                            </div>
                        </div>
                         <div className="text-center flex-1">
                           <p className="text-xs text-primary-foreground/80 mb-1">Annual Savings</p>
                            <div className="text-5xl font-bold">
                                ₹{state.result.annualSavings.toFixed(2)}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Solar System Recommendation</CardTitle>
                        <Home className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground">{state.result.solarPanelRecommendation}</p>
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
            </div>
        </div>
      )}
    </div>
  );
}
