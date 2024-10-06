"use client";

// Use transition
import { useTransition } from "react";

// Use form
import { useForm } from "react-hook-form";

// Use zod resolver
import { zodResolver } from "@hookform/resolvers/zod";

// Import zod
import { Form } from "@repo/ui/form";

// Import zod
import { z } from "zod";

// Import button
import { Button } from "@repo/ui/button";

// Import login action
import { login } from "@actions/login";

// Import FormInput
import { FormInput } from "@components/auth/form-input";
import { FormTextarea } from "@components/auth/form-textarea";

// Import toast
import { toast } from "sonner";

// Import Link
import Link from "next/link";

// Import useRouter
import { useRouter } from "next/navigation";

// Import contact schema
import { contactSchema } from "@schemas/contact";

// Contact form
export const ContactForm = () => {
  // Use router
  const router = useRouter();

  // Pending transition
  const [isPending, startTransition] = useTransition();

  // Use form hook
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
        email: "",
        name: "",
        message: "",
    },
  });

  // Handle submit
  const handleSubmit = form.handleSubmit((values) => {
    startTransition(() => {
      login(values)
        .then((data) => {
          if (!data) return;
          if (!data.success) {
            return toast.error(data.error.message);
          }
          return router.push("/two-factor");
        })
        .catch(() => toast.error("Something went wrong."));
    });
  });

  // Return the form
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
            <FormInput
                control={form.control}
                name="name"
                label="Name"
                type="text"
                placeholder="e.g. John Doe"
                isPending={isPending}
            />
            <FormInput
                control={form.control}
                name="email"
                label="Email Address"
                type="email"
                placeholder="e.g. johndoe@example.com"
                isPending={isPending}
            />
            <FormTextarea
                control={form.control}
                name="message"
                label="Message"
                placeholder="e.g. Hello, I have a question about..."
                isPending={isPending}
            />
        </div>
        <Button type="submit" disabled={isPending} className="w-full">
            Submit
        </Button>
      </form>
    </Form>
  );
};
