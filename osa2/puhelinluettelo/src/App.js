import { useState } from 'react'

const Person = ({name, number}) => {
  return(
    <p>{name}<br/>{number}</p>
  )
}

const PersonForm = ({name, number, change_number, change_name, action}) => {
  return(
    <form onSubmit={action}>
        <div>
          name: <input value={name} onChange={change_name}/>
        </div>
        <div>
          number: <input value={number} onChange={change_number}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({persons}) => {
  return(
    <div>
      {persons.map(person =>
        <Person key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
  
}

const Filter = ({filter, change}) => {
  return(
    <div>
      filter shown with
      <input value={filter} onChange={change}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setNewFilter] = useState('')

  
  const showThese = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  

  const addNumber = (event) => {
    event.preventDefault()

    const inList = persons.map(person => person.name)

    if (inList.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }

    const numberObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(numberObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={newFilter} change={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm  
        name={newName} 
        number={newNumber} 
        change_name={handleNameChange} 
        change_number={handleNumberChange} 
        action={addNumber}
        />

      <h2>Numbers</h2>
      <Persons persons={showThese}/>

      ...
    </div>
  )

}

export default App