
'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          setIsSuccess(true);
        } else {
          setError('Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        setError('There was an error submitting the form.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
        <form
            ref={formRef}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzo-i2WeKBwuv1uCGgiLsQW3H4Y521jlxPtqtrRb-MlqWrwjBW8x5r8b_WBEXUVglLynQ/exec"
            className="space-y-6"
            onSubmit={handleSubmit}
            >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="Name" placeholder="Name" required />
                </div>
                <div className="space-y-2">
                <Label htmlFor="surname">Surname</Label>
                <Input id="surname" name="Surname" placeholder="Surname" required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="Email" type="email" placeholder="Email" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="Phone" type="tel" placeholder="Phone" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                id="message"
                name="Message"
                placeholder="Tell us about your project or ask any questions..."
                rows={5}
                required
                />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
        </form>

        {isSuccess && (
            <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>
            ✅ Form has been submitted successfully! Our team will contact you soon.
            </p>
        )}
        {error && (
            <p style={{ color: 'red', marginTop: '10px' }}>
            {error}
            </p>
        )}
    </div>
  );
}
