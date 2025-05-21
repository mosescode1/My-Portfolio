// import { cn } from '@/lib/utils';

interface Project {
	title: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	demoUrl?: string;
	image: string;
}

const projects: Project[] = [
	{
		title: 'Scalable API Gateway',
		description:
			'A high-performance API Gateway built with Go that handles 10K+ requests per second with sub-millisecond latency. Features include rate limiting, circuit breaking, and dynamic routing.',
		technologies: ['Go', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
		githubUrl: 'https://github.com',
		demoUrl: 'https://example.com',
		image: '/project.png',
	},
	{
		title: 'Distributed Task Queue',
		description:
			'A fault-tolerant distributed task queue system that ensures reliable execution of background jobs across multiple worker nodes with at-least-once delivery semantics.',
		technologies: ['Nodejs', 'Docker', 'RabbitMQ', 'PostgreSQL'],
		githubUrl: 'https://github.com',
		image: '/project.png',
	},
	{
		title: 'Real-time Analytics Engine',
		description:
			'A streaming analytics platform that processes and analyzes event data in real-time. Handles over 50M events daily with custom aggregation pipelines.',
		technologies: ['Python', 'Kafka', 'Elasticsearch', 'FastAPI'],
		githubUrl: 'https://github.com',
		demoUrl: 'https://example.com',
		image: '/project.png',
	},
	{
		title: 'Microservices Framework',
		description:
			'A lightweight framework for building microservices with built-in service discovery, configuration management, and circuit breaking capabilities.',
		technologies: ['Go', 'Kubernetes', 'gRPC', 'Kafka', 'Aws'],
		githubUrl: 'https://github.com',
		image: '/project.png',
	},
];

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className='bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px]'>
			<div className='h-48 bg-muted overflow-hidden'>
				<img
					src={project.image}
					alt={project.title}
					className='w-full h-full object-cover'
				/>
			</div>

			<div className='p-6'>
				<h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
				<p className='text-muted-foreground mb-4'>{project.description}</p>

				<div className='flex flex-wrap gap-2 mb-4'>
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className='text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1'>
							{tech}
						</span>
					))}
				</div>

				<div className='flex gap-4 mt-4'>
					<a
						href={project.githubUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='text-foreground hover:text-primary transition-colors'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
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

					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground hover:text-primary transition-colors'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-external-link'>
								<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
								<polyline points='15 3 21 3 21 9' />
								<line x1='10' x2='21' y1='14' y2='3' />
							</svg>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<section id='projects' className='py-20 bg-black'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3'>
					<span className='font-mono text-[#0e32a2] text-xl'>03.</span> Projects
					<div className='h-px bg-muted flex-grow ml-4 hidden md:block'></div>
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>

				<div className='text-center mt-12'>
					<p className='text-muted-foreground mb-4'>
						Here are just a few highlighted projects. Check out more of my work
						on GitHub.
					</p>
					<a
						href='https://github.com'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors'>
						<span>View GitHub Profile</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-arrow-right'>
							<path d='M5 12h14' />
							<path d='m12 5 7 7-7 7' />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
