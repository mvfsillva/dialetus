import { useState, useEffect, useCallback, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import GithubCorner from 'react-github-corner'
import { withTheme } from 'styled-components'

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
  theme: {
    colors: Record<string, string>
  }
}

const Main = ({ regions, dialects, theme }: Props) => {
  const [region, setRegion] = useState('baianes')
  const [data, setData] = useState(dialects)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 1000)
  const initialRender = useRef(true)

  const changeDialect = useCallback(async () => {
    setData([])
    const data = await fetch(`${API}/regions/${region}/dialects`)
    const dialectData = await data.json()
    setData(dialectData)
  }, [region])

  const searchDialect = useCallback(async () => {
    if (debouncedSearch !== '') {
      setData([])
      setRegion('')
      const data = await fetch(`${API}/search?q=${debouncedSearch}`)
      const queryData = await data.json()

      return setData(queryData)
    }
  }, [debouncedSearch])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      changeDialect()
    }
    if (region) {
      setSearchTerm('')
    }
  }, [region, changeDialect])

  useEffect(() => {
    searchDialect()
  }, [debouncedSearch, searchDialect])

  useEffect(() => {
    if (!region && !searchTerm) {
      setRegion('baianes')
    }
  }, [searchTerm, region])

  return (
    <>
      <Header />
      <Container>
        <Regions
          data={regions}
          region={region}
          onClick={(name) => setRegion(name)}
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
                  key={`${slug}_${region}`}
                />
              ))}
            </S.Wrapper>
          </>
        )}
      </Container>
      <Footer />
      <GithubCorner
        octoColor={theme.colors.primary}
        bannerColor={theme.colors.white}
        href="https://github.com/dialetus/dialetus"
      />
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

export default withTheme(Main)
