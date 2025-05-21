import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
	id: string;
	email: string;
	name: string;
};

type AuthContextType = {
	currentUser: User | null;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	register: (name: string, email: string, password: string) => Promise<void>;
	isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check if user is logged in from localStorage
		const storedUser = localStorage.getItem('currentUser');
		if (storedUser) {
			setCurrentUser(JSON.parse(storedUser));
		}
		setIsLoading(false);
	}, []);

	const login = async (email: string, password: string) => {
		// In a real app, you would validate against a database
		// For now, we'll simulate by checking localStorage
		// const users = JSON.parse(localStorage.getItem('users') || '[]');
		// const user = users.find(
		// 	(u: any) => u.email === email && u.password === password
		// );

		// if (!user) {
		// 	throw new Error('Invalid email or password');
		// }

		const user1 = {
			id: '1',
			email,
			name: 'Anonymous',
			password,
		};
		// if (!user) {
		// 	throw new Error('Invalid email or password');
		// }

		if (!user1) {
			throw new Error('Invalid email or password');
		}
		setCurrentUser(user1);
		// localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
		return user1;
	};

	const register = async (name: string, email: string, password: string) => {
		// Simulate user registration with localStorage
		const users = JSON.parse(localStorage.getItem('users') || '[]');

		// Check if user already exists
		if (users.some((u: any) => u.email === email)) {
			throw new Error('User with this email already exists');
		}

		const newUser = {
			id: `user_${Date.now()}`,
			name,
			email,
			password,
		};

		users.push(newUser);
		localStorage.setItem('users', JSON.stringify(users));

		// Auto login after registration
		const { password: _, ...userWithoutPassword } = newUser;
		setCurrentUser(userWithoutPassword);
		localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
	};

	const logout = () => {
		setCurrentUser(null);
		localStorage.removeItem('currentUser');
	};

	const value = {
		currentUser,
		login,
		logout,
		register,
		isLoading,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
