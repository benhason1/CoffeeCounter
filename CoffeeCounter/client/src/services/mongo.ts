import axios from "axios";
import configuration from "../configuration";

export type User = { name: string; coffeeGrams: number; id?: string };

export async function createUsers(users: User[]) {
  return axios.post(`${configuration.serverUrl}/users`, { users });
}

export async function getAllUsers(): Promise<User[]> {
  return (await axios.get(`${configuration.serverUrl}/users`)).data;
}

export async function addCoffeeGrams(
  user: User,
  addedCofeeGrams: number
): Promise<User> {
  return (
    await axios.put(`${configuration.serverUrl}/users/${user.id}`, {
      coffeeGrams: user.coffeeGrams + addedCofeeGrams,
    })
  ).data;
}

export async function resetAllCoffeeGrams() {
  return (await axios.put(`${configuration.serverUrl}/users/reset`)).data;
}
