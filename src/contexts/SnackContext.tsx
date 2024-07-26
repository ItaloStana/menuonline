import { ReactNode, createContext, useEffect, useState } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getBurguers, getPizzas, getAcompanhamentos, getBebidas, getSobremesas } from '../services/api'


interface SnackContextProps{
  burguers: SnackData[]
  pizzas: SnackData[]
  acompanhamentos: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]
}

interface SnackProviderProps{
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {

const [burguers, setBurguers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [acompanhamentos, setAcompanhamentos] = useState<SnackData[]>([])
  const [bebidas, setBebidas] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])


  useEffect(() => {
    (async () => {
      try {
      const burguersRequest = await getBurguers()
      const pizzasRequest = await getPizzas()
      const acompanhamentosRequest = await getAcompanhamentos()
      const bebidasRequest = await getBebidas()
      const sobremesasRequest = await getSobremesas()

      const requests = [
        burguersRequest,
        pizzasRequest,
        acompanhamentosRequest,
        bebidasRequest,
        sobremesasRequest]

      const [
        { data: burguersResponse },
        { data: pizzasResponse },
        { data: acompanhamentosResponse },
        { data: bebidasResponse },
        { data: sobremesasResponse },
      ] = await Promise.all(requests)

      setBurguers(burguersResponse)
      setPizzas(pizzasResponse)
      setAcompanhamentos(acompanhamentosResponse)
      setBebidas(bebidasResponse)
      setSobremesas(sobremesasResponse)
    } catch (error) {
      console.log(error)
    }

    })()
  },[])

  return(
    <SnackContext.Provider value={{ burguers, pizzas, acompanhamentos, bebidas, sobremesas }}>
      {children}
    </SnackContext.Provider>
  )
}
