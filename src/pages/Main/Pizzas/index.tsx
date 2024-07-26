import { useSnack } from "../../../hooks/useSnack"

import { SnackTitle } from "../../../components/SnackTitle"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"


export default function Pizzas() {
  const { pizzas } = useSnack()

  return(
    <>
    <Head title='Pizzas' description="Nossos Pizzas" />
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizzas}></Snacks>
    </>
    )
}
