import { useSnack } from "../../../hooks/useSnack"

import { SnackTitle } from "../../../components/SnackTitle"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"


export default function Acompanhamentos() {
  const { acompanhamentos } = useSnack()

  return(
    <>
    <Head title='Acompanhamentos' description="Nossos acompanhamentos" />
    <SnackTitle>Acompanhamentos</SnackTitle>
    <Snacks snacks={acompanhamentos}></Snacks>
    </>
    )
}
