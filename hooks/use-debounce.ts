import { DialogDescription } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

// OTIMIZAR O TEMPO DE QUERY.
// Quando o usuario para de digitar por 0,5s é que ira fazer a query no banco de DialogDescription
// isso é um metodo para nao estressar o banco com queries a cada digito do usuario
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
