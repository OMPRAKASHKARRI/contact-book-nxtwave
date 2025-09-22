import { useState, useCallback } from 'react';
import { Contact, ContactFormData, PaginatedResponse } from '../types/contact';

const API_BASE_URL = 'http://localhost:5000';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });

  const fetchContacts = useCallback(async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/contacts?page=${page}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      
      const data: PaginatedResponse = await response.json();
      setContacts(data.contacts);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setContacts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const addContact = useCallback(async (contactData: ContactFormData): Promise<boolean> => {
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add contact');
      }

      // Add the new contact to the beginning of the list
      setContacts(prev => [data, ...prev]);
      setPagination(prev => ({ ...prev, total: prev.total + 1 }));
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    }
  }, []);

  const deleteContact = useCallback(async (id: string): Promise<boolean> => {
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete contact');
      }

      // Remove the contact from the list
      setContacts(prev => prev.filter(contact => contact.id !== id));
      setPagination(prev => ({ ...prev, total: prev.total - 1 }));
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    }
  }, []);

  return {
    contacts,
    loading,
    error,
    pagination,
    fetchContacts,
    addContact,
    deleteContact
  };
};