import { STORAGE_KEYS } from "@/constants/storageKeys"
import type { ThemeSchema } from "@/types/theme"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react"

interface ThemeContextType {
  schema: ThemeSchema,
  setSchema: (schema: ThemeSchema) => void
  toggleSchema: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  schema: 'dark',
  setSchema: (_: ThemeSchema) => { },
  toggleSchema: () => { },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [schema, setSchema] = useState<ThemeSchema>('dark')

  const toggleSchema = useCallback(() => {
    setSchema(schema === 'dark' ? 'light' : 'dark')
  }, [schema])

  useEffect(() => {
    const themeSchema = localStorage.getItem(STORAGE_KEYS.themeSchema)

    if (themeSchema) {
      setSchema(themeSchema as ThemeSchema)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.themeSchema, schema)

    const body = document.body
    body.classList.toggle('dark', schema === 'dark')
    body.classList.toggle('light', schema === 'light')
  }, [schema])

  return (
    <ThemeContext.Provider
      value={{
        schema,
        setSchema,
        toggleSchema
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
