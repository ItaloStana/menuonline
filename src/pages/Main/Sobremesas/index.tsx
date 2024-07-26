import { useSnack } from "../../../hooks/useSnack"

import { SnackTitle } from "../../../components/SnackTitle"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"


export default function Sobremesas() {
  const { sobremesas } = useSnack()

  return(
    <>
    <Head title='Sobremesas' description="Nossas Sobremesas" />
    <SnackTitle>Sobremesas</SnackTitle>
    <Snacks snacks={sobremesas}></Snacks>
    </>
    )
}
