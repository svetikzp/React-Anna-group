import React from 'react'
import Person from './Person'

export default function PersonController() {
   const [person, setPerson] = React.useState(null)
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => { getPerson() }, []);

   async function getPerson() {
      // fetch('https://www.randomuser.me/api?results=2')
      //    .then((response) => response.json())
      //    .then((person) => { setPerson(person) })
      // const response = await fetch('https://www.randomuser.me/api?results=2');
      // const person = await response.json();
      const person = await (await fetch('https://www.randomuser.me/api?results=2')).json();
      // cons
      setPerson(person);
      setIsLoading(false);
   }

   return (
      <div>
         {isLoading ? <div>Loading...</div> :
            person.results.map((item) => {
               return <Person
                  firstName={item.name.first}
                  lastName={item.name.last}
                  email={item.email}
                  key={item.id.value} />
            })}
      </div>
   )

}