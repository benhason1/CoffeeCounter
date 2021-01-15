import { Button, Card, Input } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { addCoffeeGrams, getAllUsers, User } from '../services/mongo'


export default function Users() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        async function getUsers() {
            setUsers(await getAllUsers())
        }
        getUsers()
    }, [])
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        {users.map(user =>
            <Card style={{ padding: '5rem', margin: '1rem' }}>
                <UserRender id={user.id} coffeeGrams={user.coffeeGrams} name={user.name}></UserRender>
            </Card>
        )}
    </div>
}


function UserRender({ name, coffeeGrams, id }: User) {
    const [addedCoffeeGrams, setAddedCoffeeGrams] = useState(0)
    return <div style={{ width: '100%', height: '100%' }}>
        <div>
            name: {name}
        </div>
        <div>
            grams: {coffeeGrams}
        </div>
        <form onClick={() => addCoffeeGrams({ name, coffeeGrams, id }, addedCoffeeGrams)}>
            add cofee grams: <Input type="number" onChange={(input => setAddedCoffeeGrams(+input.target.value))} aria-label="add cofee grams"></Input>
            <div>
                <Button>submit</Button>
            </div>
        </form>
    </div>
}