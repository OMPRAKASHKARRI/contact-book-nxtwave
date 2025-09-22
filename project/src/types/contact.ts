export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export interface PaginatedResponse {
  contacts: Contact[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}