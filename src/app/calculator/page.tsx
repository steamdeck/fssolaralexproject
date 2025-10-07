import { CalculatorForm } from './calculator-form';

export default function CalculatorPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              AI Savings Calculator
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover your potential savings and environmental impact by switching
              to solar. Just provide a few details, and our AI will generate a
              custom estimate for you.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <CalculatorForm />
          </div>
        </div>
      </section>
    </div>
  );
}
