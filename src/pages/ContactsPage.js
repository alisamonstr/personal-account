import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { AddContactModal, ContactCard, Input, PageHeader } from '../components'
import { useMutation, useQuery, useQueryCache } from 'react-query'
import { addNewContact, fetchContactList } from '../utils'
import AddIcon from '@material-ui/icons/Add'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import { Paper } from '@material-ui/core'

const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  const getContacts = useCallback(() => fetchContactList(search), [search])

  const { isLoading, isError, data, error } = useQuery(['contacts', search], getContacts)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const searchChange = (event) => {
    setSearch(event.target.value)
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
              value={search}
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
          {data && data.length === 0 && (
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
