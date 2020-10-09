import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { useQuery } from 'react-query'
import { Container, Paper, Box, CircularProgress } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { AddContactModal, ContactCard, Input, PageHeader } from '../components'
import { fetchContactList } from '../utils'
import { useDebounce } from 'react-use'

const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 350px;
  border: 1px solid gold;
  border-radius: 15px;
  padding-bottom: 20px;
  margin: 50px auto;
  overflow: hidden;
`
const Title = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex: 1;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: gold;
  padding: 20px;
  width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`

export const ContactsPage = () => {
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const getContacts = useCallback(() => fetchContactList(search), [search])

  const { isLoading, data } = useQuery(['contacts', search], getContacts)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useDebounce(
    () => {
      if (inputValue !== search) {
        setSearch(inputValue)
      }
    },
    500,
    [inputValue],
  )

  const handleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const searchChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <PageHeader>
      <Container>
        <Content>
          <Header>
            <Title>Contacts</Title>
            <AddIcon onClick={handleIsModalOpen} />
          </Header>
          <Box mt={2}>
            <Input
              value={inputValue}
              active
              variant="outlined"
              placeholder="Search"
              size="small"
              onChange={(event) => searchChange(event)}
            />
          </Box>
          {isLoading && (
            <Wrapper>
              <CircularProgress />
            </Wrapper>
          )}
          {data && !data.length && (
            <Wrapper>
              <SentimentVeryDissatisfiedIcon fontSize="large" />
              <Title>You don't have any contacts.</Title>
            </Wrapper>
          )}
          {data &&
            data.map((x) => (
              <ContactCard
                key={x.id}
                firstName={x.firstName}
                secondName={x.secondName}
                phone={x.phone}
                email={x.email}
                id={x.id}
              />
            ))}
        </Content>
        <AddContactModal isModalOpen={isModalOpen} handleIsModalOpen={handleIsModalOpen} />
      </Container>
    </PageHeader>
  )
}
