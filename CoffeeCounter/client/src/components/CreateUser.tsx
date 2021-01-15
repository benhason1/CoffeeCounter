import { Button, Input, TextField, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { createUsers } from '../services/mongo'
import './css/CreateUser.css'


const useStyles = makeStyles({
    form:{
        display: 'flex',
        justifyContent:'center',
        '& > *':{
            margin: '1rem'
        }
    }
})

export function CreateUser() {
    const [name, setName] = useState('')
    const [coffeeGrams, setCoffeeGrams] = useState(0)
    const classes = useStyles()

    return <form className={classes.form}>
        <TextField label="שם" type="text" onChange={(input) => setName(input.target.value)} />
        <TextField InputProps={{ inputProps: { min: 0 } }}  label="מספר גרמים" type="number" onChange={(input) => setCoffeeGrams(+input.target.value)} value={coffeeGrams} />
        <Button onClick={() => createUsers([{ name, coffeeGrams }])}>create user</Button>
    </form>

}


