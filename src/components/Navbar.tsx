import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed top-0 w-full z-50 transition-all duration-200',
				scrolled
					? 'bg-background/90 backdrop-blur-lg border-b border-border'
					: 'bg-transparent'
			)}>
			<div className='container mx-auto px-4 md:px-6 flex justify-between items-center h-16'>
				<a
					href='#'
					className='font-mono text-primary font-bold text-xl text-[#0a85ff] dark:text-blue-400'>
					dev.<span className='text-white'>YareYare</span>
				</a>

				<button
					className='md:hidden text-foreground'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? (
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
							className='lucide lucide-x'>
							<path d='M18 6 6 18' />
							<path d='m6 6 12 12' />
						</svg>
					) : (
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
							className='lucide lucide-menu'>
							<line x1='4' x2='20' y1='12' y2='12' />
							<line x1='4' x2='20' y1='6' y2='6' />
							<line x1='4' x2='20' y1='18' y2='18' />
						</svg>
					)}
				</button>

				<nav
					className={cn(
						'fixed md:static top-16 right-0 left-0 bg-background md:bg-transparent border-b border-border md:border-0',
						'md:flex transition-all duration-300 ease-in-out',
						mobileMenuOpen ? 'flex flex-col' : 'hidden'
					)}>
					<ul className='flex flex-col md:flex-row items-center gap-1 md:gap-2 w-full md:w-auto'>
						{['about', 'skills', 'projects', 'contact'].map((item, idx) => (
							<li key={item} className='w-full md:w-auto'>
								<a
									href={`#${item}`}
									onClick={() => setMobileMenuOpen(false)}
									className='text-muted-foreground hover:text-foreground block py-3 px-4 md:py-2 md:px-3 transition duration-150 ease-in-out text-center md:text-left font-medium text-sm'>
									<span className='text-primary text-blue-700 font-bold font-mono mr-1'>
										{`${idx + 1}`.padStart(2, "0")}.
									</span>{' '}
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</a>
							</li>
						))}
						<li className='w-full md:w-auto px-4 py-3 md:p-0'>
							<a
								href='/resume.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-block text-sm text-primary border border-blue-700 rounded px-4 py-2  hover:bg-primary/10 w-full md:w-auto text-center'>
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
