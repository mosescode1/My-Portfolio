import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// In a real implementation, you would send the data to your backend
			// For now, we'll simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));

			toast({
				title: 'Message sent!',
				description: "Thank you for reaching out. I'll get back to you soon.",
			});

			// Reset the form
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
		} catch (error) {
			toast({
				title: `Something went wrong ${error}`,
				description: "Your message couldn't be sent. Please try again later.",
				variant: 'destructive',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id='contact' className='py-20 bg-secondary/30'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='max-w-2xl mx-auto text-center mb-12'>
					<h2 className='text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3'>
						<span className='font-mono text-primary text-xl'>04.</span> Get In
						Touch
					</h2>
					<p className='text-muted-foreground'>
						I'm currently open to new opportunities. Whether you have a question
						or just want to say hi, I'll do my best to get back to you!
					</p>
				</div>

				<div className='max-w-2xl mx-auto'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
							<div className='space-y-2'>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									name='name'
									placeholder='Your name'
									value={formData.name}
									onChange={handleChange}
									required
									className='bg-secondary border-muted'
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									name='email'
									type='email'
									placeholder='your.email@example.com'
									value={formData.email}
									onChange={handleChange}
									required
									className='bg-secondary border-muted'
								/>
							</div>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='subject'>Subject</Label>
							<Input
								id='subject'
								name='subject'
								placeholder='What is this regarding?'
								value={formData.subject}
								onChange={handleChange}
								required
								className='bg-secondary border-muted'
							/>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='message'>Message</Label>
							<Textarea
								id='message'
								name='message'
								placeholder='Your message...'
								rows={6}
								value={formData.message}
								onChange={handleChange}
								required
								className='bg-secondary border-muted'
							/>
						</div>

						<Button
							type='submit'
							disabled={isSubmitting}
							className={cn(
								'w-full sm:w-auto bg-primary hover:bg-primary/90',
								'text-primary-foreground font-medium'
							)}>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</Button>
					</form>
				</div>

				<div className='max-w-2xl mx-auto mt-16 text-center'>
					<p className='text-muted-foreground mb-6'>
						Prefer using email or other platforms?
					</p>

					<div className='flex justify-center gap-6'>
						<a
							href='mailto:emosescode@gmail.com'
							className='text-muted-foreground hover:text-primary transition-colors'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-mail'>
								<rect width='20' height='16' x='2' y='4' rx='2' />
								<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
							</svg>
						</a>

						<a
							href='https://github.com/mosescode1'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-primary transition-colors'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-github'>
								<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
								<path d='M9 18c-4.51 2-5-2-7-2' />
							</svg>
						</a>

						<a
							href='https://www.linkedin.com/in/eteng-moses-001954176'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-primary transition-colors'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-linkedin'>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
								<rect width='4' height='12' x='2' y='9' />
								<circle cx='4' cy='4' r='2' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
