import React, { useContext } from 'react'
import { TeamContext } from '../Context';

const Teams = () => {
  const context = useContext(TeamContext);

  const { teams, favourite, search, favoriteTeam, filterText } = context


  return (
    <div className="layout">
      <div className="input">
        <input  onChange={filterText} type="text" placeholder="Search a team..." />
        <h1>{favourite} : Favourite Team</h1>
      </div>
      <div className="list">
        <h2>List of NBA teams:</h2>
        <ul>{teams
          .filter(team => {
            return team.full_name.toLowerCase().indexOf(search.toLowerCase()) >= 0
          })
          .map(team => {
            return <li onClick={favoriteTeam} key={team.id}>{team.full_name}</li>
          })}</ul>
      </div>

    </div>
  )
}

export default Teams;
