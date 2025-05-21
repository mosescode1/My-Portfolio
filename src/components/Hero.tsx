import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Terminal, Code } from 'lucide-react';

const Hero = () => {
	const [languageIndex, setLanguageIndex] = useState(0);
	const [specialtyIndex, setSpecialtyIndex] = useState(0);
	const [languageFade, setLanguageFade] = useState(true);
	const [specialtyFade, setSpecialtyFade] = useState(true);

	const languageSets = [
		['TypeScript', 'Node.js', 'Golang'],
		['PostgreSQL', 'MongoDB', 'Redis'],
		['Docker', 'Kubernetes', 'AWS'],
		['gRPC', 'GraphQL', 'REST'],
	];

	const specialties = [
		'robust backend systems',
		'scalable cloud architecture',
		'high-performance APIs',
		'secure authentication services',
		'real-time data processing',
	];

	useEffect(() => {
		const langTimer = setInterval(() => {
			setLanguageFade(false);
			setTimeout(() => {
				setLanguageIndex((i) => (i + 1) % languageSets.length);
				setLanguageFade(true);
			}, 300);
		}, 3000);

		const specTimer = setInterval(() => {
			setSpecialtyFade(false);
			setTimeout(() => {
				setSpecialtyIndex((i) => (i + 1) % specialties.length);
				setSpecialtyFade(true);
			}, 300);
		}, 4000);

		return () => {
			clearInterval(langTimer);
			clearInterval(specTimer);
		};
	}, []);

	return (
		<section className='min-h-screen flex items-center pt-16 bg-gradient-to-b from-background via-background/95 to-secondary/20'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid md:grid-cols-5 gap-10 items-center'>
					<div className='md:col-span-3'>
						<p className='font-mono text-primary mb-5'>
							<span className='inline-flex items-center gap-2 text-[#0a85ff] text-2xl'>
								<Terminal className='h-4 w-4' /> Hello, I'm
							</span>
						</p>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
							<span className='block text-foreground'>Eteng Moses Efa</span>
							<div className='h-16 md:h-20 my-2'>
								<span
									className={cn(
										'block text-muted-foreground transition-all duration-500 transform',
										specialtyFade
											? 'opacity-100 translate-y-0'
											: 'opacity-0 -translate-y-3'
									)}>
									I build{' '}
									<span className='text-[#0a85ff]'>
										{specialties[specialtyIndex]}
									</span>
								</span>
							</div>
						</h1>
						<p className='text-muted-foreground max-w-lg text-lg mb-8 leading-relaxed mt-12 text-xl'>
							Backend developer with 2+ years of experience building scalable,
							cloud-native systems focused on distributed architectures, secure
							file management, and fine-grained access control. Proficient in
							Node.js, PostgreSQL, and cloud platforms — with emphasis on
							performance and maintainability.
						</p>

						<div className='mt-8 flex flex-wrap gap-4'>
							<Button
								asChild
								className='transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 bg-[#0a85ff]'>
								<a href='#contact'>Get in Touch</a>
							</Button>
							<Button
								variant='outline'
								asChild
								className='bg-background/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1'>
								<a href='#projects'>View My Work</a>
							</Button>
						</div>
					</div>

					<div className='md:col-span-2 relative'>
						<div
							className={cn(
								'font-mono p-5 rounded-lg border',
								'bg-gradient-to-br from-secondary/90 to-background',
								'shadow-lg relative transform transition-all duration-300',
								'backdrop-blur-sm md:ml-5',
								languageFade ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.98]'
							)}>
							<div className='flex items-center gap-2 mb-3 text-sm'>
								<div className='bg-red-500 w-3 h-3 rounded-full'></div>
								<div className='bg-yellow-500 w-3 h-3 rounded-full'></div>
								<div className='bg-green-500 w-3 h-3 rounded-full'></div>
								<div className='ml-2 text-muted-foreground'>
									developer.profile
								</div>
							</div>
							<div className='text-sm overflow-x-auto'>
								<span className='text-code-green'>const</span>{' '}
								<span className='text-code-blue'>developer</span> = {'{'}
								<br />
								&nbsp;&nbsp;<span className='text-code-purple'>expertise:</span>{' '}
								"<span className='text-code-yellow'>
									{specialties[specialtyIndex]}
								</span>
								",<br />
								&nbsp;&nbsp;<span className='text-code-purple'>tech:</span> [
								{languageSets[languageIndex].map((lang, index) => (
									<span key={lang}>
										<span className='text-code-yellow'>"{lang}"</span>
										{index < languageSets[languageIndex].length - 1 && ', '}
									</span>
								))}
								],<br />
								&nbsp;&nbsp;<span className='text-code-purple'>location:</span>{' '}
								"<span className='text-code-yellow'>Nigeria, Lagos</span>",<br />
								&nbsp;&nbsp;<span className='text-code-purple'>available:</span>{' '}
								<span className='text-code-green'>true</span>
								<br />
								{'};'}
							</div>

							<div className='absolute -top-3 -right-3'>
								<Code className='text-primary h-6 w-6' />
							</div>
						</div>

						<div className='absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl'></div>
						<div className='absolute -top-4 -left-4 w-20 h-20 bg-primary/5 rounded-full blur-xl'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
