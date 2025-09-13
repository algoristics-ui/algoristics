import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useUserCache } from '@/hooks/useUserCache';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'org_admin' | 'instructor' | 'learner';
  organization: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users for testing
const DUMMY_USERS: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@algoristicedu.com',
    role: 'super_admin',
    organization: 'Algoristics',
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah@university.edu',
    role: 'org_admin',
    organization: 'Stanford University',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@techcorp.com',
    role: 'instructor',
    organization: 'TechCorp Training',
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma@student.edu',
    role: 'learner',
    organization: 'Stanford University',
  },
];

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { clearCache } = useUserCache();

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check dummy credentials (password is "algoristic123" for all users)
    const foundUser = DUMMY_USERS.find(u => u.email === email);
    
    if (foundUser && password === 'algoristic123') {
      setUser(foundUser);
      localStorage.setItem('auth_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
    clearCache(); // Clear user cache on logout
  };

  // Check for existing session on load
  React.useEffect(() => {
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('auth_user');
      }
    }
  }, []);

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};