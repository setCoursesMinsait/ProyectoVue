import rickandmortyApi from "@/api/rickAndMortyAPI"

export async function Personajes() {
  const {data} = await rickandmortyApi.get('')

  console.log(data)
  data.map( )
  // commit( 'setValue', data)
}