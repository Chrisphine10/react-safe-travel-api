import React from 'react';
const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p> No repos, sorry </p>;
    return ( 
        <ul>
            <h2 className = 'list-head' > Data report from safe travel api </h2> {
                 Object.keys(repos).map((repo, index) => {
                    return ( 
                    <li key = { index  }
                        className = 'list' >
                            {console.log(repo.place)}
                        <span className = 'repo-text'> { repo.place }  </span><br></br>
                        <span className = 'repo-description' > { repo.country } </span> <br></br>
                        <span className = 'repo-description' > { repo.province } </span><br></br>
                        <span className = 'repo-description' > { repo.total_active } </span><br></br>
                        <span className = 'repo-description' > { repo.total_confirmed } </span><br></br>
                        <span className = 'repo-description' > { repo.total_deaths } </span><br></br>
                        <span className = 'repo-description' > { repo.total_recovered } </span><br></br>
                        <span className = 'repo-description' > { repo.weekly_new_cases } </span><br></br>
                        <span className = 'repo-description' > { repo.restrictions } </span><br></br>
                        <span className = 'repo-description' > { repo.warning_color } </span><br></br>
                        <span className = 'repo-description' > { repo.safety_index } </span><br></br>
                        <span className = 'repo-description' > { repo.risk } </span><br></br>
                        <span className = 'repo-description' > { repo.has_province_data } </span><br></br>

                    </li>
                );
                })
            } 
        </ul>
    );
};
export default List;