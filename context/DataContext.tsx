import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export type Business = {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	ownerId: string;
	password?: string;
};

export type Invoice = {
	id: string;
	invoiceNumber: string;
	date: string;
	dueDate: string;
	businessId: string;
	clientName: string;
	clientEmail: string;
	clientAddress: string;
	items: InvoiceItem[];
	notes: string;
	status: 'draft' | 'sent' | 'paid' | 'overdue';
	createdBy: string;
	total: number;
};

export type InvoiceItem = {
	id: string;
	description: string;
	quantity: number;
	rate: number;
	amount: number;
};

type DataContextType = {
	businesses: Business[];
	invoices: Invoice[];
	addBusiness: (business: Omit<Business, 'id' | 'ownerId'>) => void;
	updateBusiness: (id: string, business: Partial<Business>) => void;
	deleteBusiness: (id: string) => void;
	addInvoice: (invoice: Omit<Invoice, 'id' | 'createdBy'>) => void;
	updateInvoice: (id: string, invoice: Partial<Invoice>) => void;
	deleteInvoice: (id: string) => void;
	getBusinessInvoices: (businessId: string) => Invoice[];
	getInvoice: (id: string) => Invoice | undefined;
	getBusiness: (id: string) => Business | undefined;
	businessLogin: (email: string, password: string) => Promise<Business>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
	const context = useContext(DataContext);
	if (context === undefined) {
		throw new Error('useData must be used within a DataProvider');
	}
	return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { currentUser } = useAuth();
	const [businesses, setBusinesses] = useState<Business[]>([]);
	const [invoices, setInvoices] = useState<Invoice[]>([]);

	// Load data from localStorage on initial load
	useEffect(() => {
		if (currentUser) {
			const storedBusinesses = JSON.parse(
				localStorage.getItem('businesses') || '[]'
			);
			const storedInvoices = JSON.parse(
				localStorage.getItem('invoices') || '[]'
			);

			// Filter data based on the current user
			setBusinesses(
				storedBusinesses.filter((b: Business) => b.ownerId === currentUser.id)
			);
			setInvoices(
				storedInvoices.filter((i: Invoice) => i.createdBy === currentUser.id)
			);
		} else {
			setBusinesses([]);
			setInvoices([]);
		}
	}, [currentUser]);

	// Save data to localStorage whenever it changes
	useEffect(() => {
		if (currentUser) {
			// Get all businesses from localStorage (including those from other users)
			const allBusinesses = JSON.parse(
				localStorage.getItem('businesses') || '[]'
			);
			const otherUsersBusinesses = allBusinesses.filter(
				(b: Business) => b.ownerId !== currentUser.id
			);

			// Save combined list
			localStorage.setItem(
				'businesses',
				JSON.stringify([...otherUsersBusinesses, ...businesses])
			);
		}
	}, [businesses, currentUser]);

	useEffect(() => {
		if (currentUser) {
			// Get all invoices from localStorage (including those from other users)
			const allInvoices = JSON.parse(localStorage.getItem('invoices') || '[]');
			const otherUsersInvoices = allInvoices.filter(
				(i: Invoice) => i.createdBy !== currentUser.id
			);

			// Save combined list
			localStorage.setItem(
				'invoices',
				JSON.stringify([...otherUsersInvoices, ...invoices])
			);
		}
	}, [invoices, currentUser]);

	// Business management functions
	const addBusiness = (business: Omit<Business, 'id' | 'ownerId'>) => {
		if (!currentUser) return;

		const newBusiness: Business = {
			...business,
			id: `business_${Date.now()}`,
			ownerId: currentUser.id,
		};

		setBusinesses([...businesses, newBusiness]);
	};

	const updateBusiness = (id: string, businessData: Partial<Business>) => {
		setBusinesses(
			businesses.map((business) =>
				business.id === id ? { ...business, ...businessData } : business
			)
		);
	};

	const deleteBusiness = (id: string) => {
		setBusinesses(businesses.filter((business) => business.id !== id));
		// Also delete all invoices for this business
		setInvoices(invoices.filter((invoice) => invoice.businessId !== id));
	};

	const getBusiness = (id: string) => {
		return businesses.find((business) => business.id === id);
	};

	// Invoice management functions
	const addInvoice = (invoice: Omit<Invoice, 'id' | 'createdBy'>) => {
		if (!currentUser) return;

		const newInvoice: Invoice = {
			...invoice,
			id: `invoice_${Date.now()}`,
			createdBy: currentUser.id,
		};

		setInvoices([...invoices, newInvoice]);
	};

	const updateInvoice = (id: string, invoiceData: Partial<Invoice>) => {
		setInvoices(
			invoices.map((invoice) =>
				invoice.id === id ? { ...invoice, ...invoiceData } : invoice
			)
		);
	};

	const deleteInvoice = (id: string) => {
		setInvoices(invoices.filter((invoice) => invoice.id !== id));
	};

	const getInvoice = (id: string) => {
		return invoices.find((invoice) => invoice.id === id);
	};

	const getBusinessInvoices = (businessId: string) => {
		return invoices.filter((invoice) => invoice.businessId === businessId);
	};

	const businessLogin = async (email: string, password: string) => {
		// Get all businesses from localStorage
		const allBusinesses = JSON.parse(
			localStorage.getItem('businesses') || '[]'
		);
		const business = allBusinesses.find(
			(b: Business) => b.email === email && b.password === password
		);

		if (!business) {
			throw new Error('Invalid email or password');
		}

		return business;
	};

	const value = {
		businesses,
		invoices,
		addBusiness,
		updateBusiness,
		deleteBusiness,
		addInvoice,
		updateInvoice,
		deleteInvoice,
		getBusinessInvoices,
		getInvoice,
		getBusiness,
		businessLogin,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
