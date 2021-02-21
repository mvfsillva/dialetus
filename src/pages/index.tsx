import { useState, useLayoutEffect } from 'react'
import { FiSearch } from 'react-icons/fi'

import { Header, Footer, Card, Input, Regions } from 'components'
import { useDebounce } from 'hooks'
import { Container, Loading } from 'layout'

import * as S from 'layout/main'

const API = process.env.NEXT_PUBLIC_API_URL

type Props = {
  regions: Array<{ name: string; total: number }>
  dialects: Array<{
    dialect: string
    examples: string[]
    meanings: string[]
    slug: string
    region?: string
  }>
}

const Main = ({ regions, dialects }: Props) => {
  const [region, setRegion] = useState('baianes')
  const [data, setData] = useState(dialects)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 1000)

  useLayoutEffect(() => {
    async function changeDialect() {
      setData([])
      const data = await fetch(`${API}/regions/${region}/dialects`)
      const dialectData = await data.json()
      setData(dialectData)
    }

    changeDialect()
  }, [region])

  useLayoutEffect(() => {
    async function searchDialect() {
      if (debouncedSearch !== '') {
        setData([])
        setRegion('')
        const data = await fetch(`${API}/search?q=${debouncedSearch}`)
        const queryData = await data.json()

        return setData(queryData)
      }

      return setRegion('baianes')
    }

    searchDialect()
  }, [debouncedSearch])

  return (
    <>
      <Header />
      <Container>
        <Regions
          data={regions}
          region={region}
          onClick={(name) => [setRegion(name), setSearchTerm('')]}
        />
        <S.SearchContainer>
          <Input
            type="search"
            name="search"
            icon={<FiSearch />}
            value={searchTerm}
            onChange={({ target: { value } }) => setSearchTerm(value)}
          />
        </S.SearchContainer>
        {!data.length ? (
          <S.LoadingWrapper
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Loading />
          </S.LoadingWrapper>
        ) : (
          <>
            <S.RegionTitle>{region}</S.RegionTitle>
            <S.Wrapper>
              {data.map(({ dialect, region, examples, meanings, slug }) => (
                <Card
                  title={dialect}
                  region={region}
                  examples={examples}
                  meanings={meanings}
                  key={slug}
                />
              ))}
            </S.Wrapper>
          </>
        )}
      </Container>
      <Footer />
    </>
  )
}

Main.getInitialProps = async () => {
  try {
    const [regionData, dialectData] = await Promise.all([
      fetch(`${API}/regions`),
      fetch(`${API}/regions/baianes/dialects`)
    ])

    const regions = await regionData.json()
    const dialects = await dialectData.json()

    return { regions, dialects }
  } catch (error) {
    console.error(error)
  }
}

export default Main
