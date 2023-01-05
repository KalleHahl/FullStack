const Header = ({name}) => {
    return (
      
        <h2>{name}</h2>
      
    )
  
  }
  
  const Content = ({parts}) => {
    return (
      <div>
          {parts.map(part => 
            <Part key={part.id} part={part}/>
          )}
      </div>
    )
  }
  
  const Total = ({all}) => {
    const begin = 0
    const total = all.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      begin
    )
    return (
        <p>
          Number of exercises {total}
        </p>
    )
  }
  
  const Part =({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Course = ({courses}) => {
    return (
      <div>
        <Header name={courses.name} />
        <Content parts = {courses.parts}/>
        <Total all = {courses.parts}/>
      </div>
    )
  }

export default Course