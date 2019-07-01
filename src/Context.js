import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const TeamContext = createContext();

export const TeamProvider = (props) => {
  const [teams, setTeams] = useState([])
  const [favourite, setFavourite] = useState('');
  const [search, setSearch] = useState('');


  const getTeams = async () => {
    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
    setTeams(response.data.data)
    console.log(response.data.data);
  }

  const favoriteTeam = e => {
    console.log(e.target.textContent)
    setFavourite(e.target.textContent)
  }

  const filterText = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getTeams()
  }, [])

  return (
    <TeamContext.Provider value={{
      teams,
      favourite,
      search,
      favoriteTeam,
      filterText
    }}>
      {props.children}
    </TeamContext.Provider>
  )
}