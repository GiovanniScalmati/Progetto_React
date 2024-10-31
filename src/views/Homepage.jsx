import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import { useState } from "react";

export default function Homepage() {
  const games = useLoaderData();
  const [check, setCheck] = useState(true);
  return (
    <>
      <Header />
      <List>
        {( check &&
          games.results.map((game, i) => {
            if (i >= games.results.length - 4) {
              return (
                <List.Card key={game.id}>
                  <List.Card.Img src={game.background_image} />
                  <List.Card.Paragraph>{game.name}</List.Card.Paragraph>
                </List.Card>
              );
            }
          })) ||
          games.results.map((game) => {         
              return (
                <List.Card key={game.id}>
                  <List.Card.Img src={game.background_image} />
                  <List.Card.Paragraph>{game.name}</List.Card.Paragraph>
                </List.Card>
              );
          })}
      </List>
      <button className="btn btn-info" onClick={() => setCheck(!check)}>
        Mostra altri
      </button>
    </>
  );
}

export async function gamesLoader() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const promise = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-08-01,2024-09-01`
  );
  const json = await promise.json();
  return json;
}
