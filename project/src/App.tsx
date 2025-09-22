import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { ErrorMessage } from './components/ErrorMessage';
import { useContacts } from './hooks/useContacts';

function App() {
  const { contacts, loading, error, fetchContacts, addContact, deleteContact } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Contact Book</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Manage your contacts easily with our simple and intuitive interface
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <ErrorMessage 
            message={error} 
            onDismiss={() => window.location.reload()} 
          />
        )}

        {/* Main Content */}
        <div className="space-y-8">
          {/* Contact Form */}
          <ContactForm onSubmit={addContact} loading={loading} />
          
          {/* Contact List */}
          <ContactList 
            contacts={contacts} 
            loading={loading} 
            onDelete={deleteContact} 
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Contact Book App. Built with React, Express.js, and Supabase.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;