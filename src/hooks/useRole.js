import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VALID_ROLES, DEFAULT_ROLE } from '../data/about';

const STORAGE_KEY = 'portfolio_role';

export function useRole() {
  const [searchParams] = useSearchParams();
  const paramRole = searchParams.get('r');
  const isValid = (role) => VALID_ROLES.includes(role);

  useEffect(() => {
    if (isValid(paramRole)) {
      localStorage.setItem(STORAGE_KEY, paramRole);
    }
  }, [paramRole]);

  if (isValid(paramRole)) return paramRole;
  const stored = localStorage.getItem(STORAGE_KEY);
  return isValid(stored) ? stored : DEFAULT_ROLE;
}
