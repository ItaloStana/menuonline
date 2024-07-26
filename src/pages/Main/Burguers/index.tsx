import { useSnack } from "../../../hooks/useSnack"


import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Burguers() {
  const { burguers } = useSnack()

  return(
  <>
  <Head title='Hambúrgueres' description="Nossos Hambúrgueres" />
  <SnackTitle>Hambúrgueres</SnackTitle>
  <Snacks snacks={burguers}></Snacks>
  </>
  )
}
