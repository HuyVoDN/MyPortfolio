import { Fade, Slide } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import { useState } from 'react';
import "./Skills.scss";
import { JSbg, TSbg, CPPbg, Reactbg, MySQLbg, Expressbg, Pythonbg, CSharpbg, Koitlinbg, Postmanbg, Gitbg, VSCodebg, MySQLWorkbenchbg, Vergilbg } from '../../constants/backgroundIMG';

const Skills = () => {

  const skills = [
    { id: 1, category: 'Programming Languages', name: ['JavaScript', 'JS'], class: 'js', bg: JSbg },
    { id: 2, category: 'Programming Languages', name: ['TypeScript', 'TS'], class: 'ts', bg: TSbg },
    { id: 3, category: 'Programming Languages', name: ['C++', 'Cpp', 'C Plus Plus'], class: 'cpp', bg: CPPbg },
    { id: 4, category: 'Programming Languages', name: ['Python', 'Py'], class: 'python', bg: Pythonbg },
    { id: 5, category: 'Programming Languages', name: ['MySQL', 'Squeal'], class: 'sql', bg: MySQLbg },
    { id: 6, category: 'Libraries', name: 'React', class: 'react', bg: Reactbg },
    { id: 7, category: 'Libraries', name: 'ExpressJS', class: 'express', bg: Expressbg },
    { id: 8, category: 'Programming Languages', name: ['C#', 'C Sharp'], class: 'csharp', bg: CSharpbg },
    { id: 9, category: 'Programming Languages', name: ['Kotlin', 'Android'], class: 'kotlin', bg: Koitlinbg },
    { id: 10, category: 'Technologies', name: 'MySQL Workbench', class: 'mysqlworkbench', bg: MySQLWorkbenchbg },
    { id: 11, category: 'Technologies', name: 'Postman', class: 'postman', bg: Postmanbg },
    { id: 12, category: 'Technologies', name: 'VS Code', class: 'vscode', bg: VSCodebg },
    { id: 13, category: 'Technologies', name: 'Git', class: 'git', bg: Gitbg },
    { id: 14, category: 'Eastereggs', name: ['4 Plates Weighted Dip','calisthenics'], class: 'eastereggs' },
    { id: 15, category: 'Eastereggs', name: ['3 plates Weighted Pull Up','calisthenics'], class: 'eastereggs'},
    { id: 16, category: 'Eastereggs', name: ['Vergil', 'The Omega and the Alpha', 'Dark Slayer'], class: 'vergil', bg: Vergilbg},
  ];

  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
  const filteredSkills = skills.filter(skill =>
    Array.isArray(skill.name)
      ? skill.name.some(name => name.toLowerCase().includes(search.toLowerCase()))
      : (skill.name.toLowerCase().includes(search.toLowerCase()) || (search.toLowerCase() === '4 plates weighted dip' && skill.category.toLowerCase() === 'eastereggs'))
  );

  const programmingSkills = filteredSkills.filter(skill => skill.category === 'Programming Languages');
  const librarySkills = filteredSkills.filter(skill => skill.category === 'Libraries');
  const technologies = filteredSkills.filter(skill => skill.category === 'Technologies');

  const eastereggs = filteredSkills.filter(skill => skill.category.toLowerCase() === 'eastereggs');
  const eastereggsTerms = ['calisthenics', 'vergil','the omega and the alpha', 'dark slayer', 'pull up', 'dip'];
  const eastereggsSearch = eastereggsTerms.includes(search.toLowerCase());

  return (
    <div className="skills">
      <Fade>
        <Typography variant='h4' className="title">Skills</Typography>
      </Fade>

      <Slide>
        <div className="skills-container">
          <input className="searchbar" type="text" placeholder="Search..." value={search} onChange={handleSearch} />
          <div className="skills-list">
            {
              
              filteredSkills.length > 0 ? (
                <>
                  <div className="skill-category">
                    <Typography className="category-name" variant='h5'>Programming Languages </Typography>
                    <div className="skills-list-item">
                      {
                        programmingSkills.map(skill => (
                          <div
                            key={skill.id}
                            className={`skill-item-card ${skill.class}`}
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85)), url(${skill.bg})` }}
                          >
                            <Typography className="card-title" variant='h6'> {Array.isArray(skill.name) ? skill.name[0] : skill.name}</Typography>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="skill-category">
                    <Typography className="category-name" variant='h5'>Libraries</Typography>
                    <div className="skills-list-item">
                      {
                        librarySkills.map(skill => (
                          <div
                            key={skill.id}
                            className={`skill-item-card ${skill.class}`}
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85)), url(${skill.bg})` }}
                          >
                            <Typography className="card-title" variant='h6'> {Array.isArray(skill.name) ? skill.name[0] : skill.name}</Typography>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="skill-category">
                    <Typography className="category-name" variant='h5'>Technologies</Typography>
                    <div className="skills-list-item">
                      {
                        technologies.map(skill => (
                          <div
                            key={skill.id}
                            className={`skill-item-card ${skill.class}`}
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85)), url(${skill.bg})` }}
                          >
                            <Typography className="card-title" variant='h6'> {Array.isArray(skill.name) ? skill.name[0] : skill.name}</Typography>
                          </div>
                        ))}
                    </div>
                  </div>
                  { // check for if the term is being searched or not then renders eastereggs category
                    eastereggsSearch && eastereggs.length > 0 && (
                      <div className="skill-category">
                        <Typography className="category-name" variant='h5'>Eastereggs</Typography>
                        <div className="skills-list-item">
                          {
                            eastereggs.map(skill => (
                              <div
                                key={skill.id}
                                className={`skill-item-card ${skill.class}`}
                                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85)), url(${skill.bg})` }}
                              >
                                <Typography className="card-title" variant='h6'> {Array.isArray(skill.name) ? skill.name[0] : skill.name}</Typography>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    )
                  }

                </>


              ) : (
                <Typography className="not-found-message">Not Found</Typography>
              )
            }

          </div>
        </div>
      </Slide>

    </div>
  )
}

export default Skills