import { useSnack } from "../../../hooks/useSnack"

import { SnackTitle } from "../../../components/SnackTitle"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"


export default function Bebidas() {
  const { bebidas } = useSnack()

  return(
    <>
    <Head title='Bebidas' description="Nossas Bebidas" />
    <SnackTitle>Bebidas</SnackTitle>
    <Snacks snacks={bebidas}></Snacks>
    </>
    )
}
