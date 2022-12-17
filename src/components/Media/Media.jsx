import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import UneMedia from '../../assets/icons/a_la_une_media.svg';
import VideoMedia from '../../assets/icons/Video_media.svg';
import {useTheme} from '../../context/themeContext';
import Search from './Search';
import CardMediaModal from './CardMediaModal';
import CardsMedia from './CardsMedia';
import CardSuccess from './SuccessStories/CardSuccess';
import LoaderMedia from './LoaderMedia';
import { axios_get, axios_post } from '../../utils/FunctionsComponent';
import SliderMedia from './SliderMedia';
import CardModalSuccess from './SuccessStories/CardModalSuccess';

const Media = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0)
  const [initPage, setInitPage] = useState(-1)
  // query useState for search
  const [query, setQuery] = useState("")
  // select card useState
  const [select, setSelect] = useState(null)
  // cards data
  const [data, setData] = useState([])
  // Modal
  const [modal, setModal] = useState(false)
  // Loading : React content loader
  const [loading, setLoading] = useState(true)
  // Position change pagination : Tout and success stories
  const [paginationSelect, setPaginationSelect] = useState("tout")
  // theme
  const theme = useTheme();


  const [aLaUne, setALaUne] = useState([
    {
      "id": 1,
      "name": "peter",
      "description": "Lorem Ipsum dolor set amet 1",
      "photo": [
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      "id": 2,
      "name": "jack",
      "description": "Lorem Ipsum dolor set amet 2",
      "photo": [
        "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/35857/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1198817/pexels-photo-1198817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      "id": 3,
      "name": "omari",
      "description": "Lorem Ipsum dolor set amet 3",
      "photo": [
        "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      "id": 4,
      "name": "jack",
      "description": "Lorem Ipsum dolor set amet 2",
      "photo": [
        "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/35857/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1198817/pexels-photo-1198817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      "id": 5,
      "name": "omari",
      "description": "Lorem Ipsum dolor set amet 3",
      "photo": [
        "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      "id": 6,
      "name": "omari",
      "description": "Lorem Ipsum dolor set amet 3",
      "photo": [
        "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    }
  ]);



  // handle for receive data and set in useState
  const handleSetData = (response) => {
    setCurrentPage(response.meta.current_page);
    setTotalPage(response.meta.last_page);
    setItemsPerPage(response.meta.per_page);
    setData(response.data);
  }

  // GET data from API
  const getData = () => {
    let source = "https://bheti-connect.smirltech.com/api/entrevues";
    axios_get(source, handleSetData)
  }


  // Change Section of data : Tout, Succes stories
  const changeSectionMenu = (position) => {
    let source = "";

    if (position == "tout")
    {
      source = "https://bheti-connect.smirltech.com/api/entrevues"
      axios_get(source, handleSetData)

      setPaginationSelect("tout")

    }else if(position == "success")
    {
      source = "https://bheti-connect.smirltech.com/api/stories"
      axios_get(source, handleSetData)

      setPaginationSelect("success")
    }else{
      getData()
      setPaginationSelect("tout")
    }
  }



  // Search data from API
  const searchData = () => {
    // API : Search
    let source = "https://bheti-connect.smirltech.com/api/entrevues/search"
    // Body POST
    let toSend = {
      search: {
        value: `${query}`
    }
    }
    // Get research
    if (query)
    {
      axios_post(source, toSend, handleSetData)
      setPaginationSelect("query")
    }
  }



  // handle change page
  let changePage = ({selected}) => {
    var pageNumber = selected + 1
    let source = ""
    let request = ""

    if (paginationSelect == "query"){
      source = `https://bheti-connect.smirltech.com/api/entrevues?page=${pageNumber}`
      /*request = {
        "search": {
          "value": `${query}`
      }
      }*/
    }else if(paginationSelect == "success"){
      source = `https://bheti-connect.smirltech.com/api/stories?page=${pageNumber}`

    }else{
      source = `https://bheti-connect.smirltech.com/api/entrevues?page=${pageNumber}`
    }

    // get Add for another page
   if (request)
    {
      axios_post(source, request, handleSetData)
    }
    else{
      axios_get(source, handleSetData)
    }
  }

  // display items
  let displayItems = data.map((item, index) => {
    return paginationSelect == "tout" ? (<CardsMedia key={index} item={item} setSelect={setSelect} setModal={setModal}/>) : (<CardSuccess key={index} item={item} setSelect={setSelect} setModal={setModal}/>)
  })

  // handle menu : tous, startup and PME for CSS
  const handleMenu = (e) => {
    let activeBtn = document.querySelector(".menuSection .active");
    let valid = e.target.tagName.toLowerCase()

    if(!e.target.classList.contains("active") && valid == "li")
    {
      activeBtn.classList.remove("active")
      e.target.classList.add("active")
    }
}

  // First UseEffect
  useEffect(() => {
    const waiting = setTimeout(() => {
      setLoading(false)
    }, 4000);

    getData()
    changeSectionMenu()

    return () => {
      clearTimeout(waiting)
    }
  }, [])

  // UseEffect if currentPage change
  useEffect(() => {
    setLoading(true)
    const waiting = setTimeout(() => {
      setLoading(false)
    }, 4000);

    setInitPage(currentPage - 1)

    return () => {
      clearTimeout(waiting)
    }
  }, [currentPage, query])

  // useEffect of query
  useEffect(() => {
    searchData()
  }, [query])




  return (
    <Container>

        <SectionUne theme={theme}>
          <div className='head-text'>

            <div className='icon-media'>
              <img src={UneMedia} alt="a la une icon"/>
            </div>

            <div>
              <h2>A LA UNE...</h2>
              <p>Chaque semaine, découvrez les figures comme les startups qui font bouger les lignes sur les  marchés africains</p>
            </div>
          </div>

          <div className='body-une'>

            <div className='cards-une'>

              {aLaUne.map((u, i) => (
                <SliderMedia items={u} item_key={i}/>
              ))}

            </div>

          </div>


        </SectionUne>

        <SectionEcouteVoir theme={theme}>

          <div className='head-text'>

            <div className='icon-media'>
              <img src={VideoMedia} alt="video icon" />
            </div>

            <div>
              <h2>Ecouter et voir</h2>
              <p>Apprenez de ceux qui analysent le climat des affaires pour piloter et prendre des décisions au quotidien</p>
            </div>
          </div>

          <div className="containerMenu">
                <div className='Box'>

                    {/* Section menu */}
                    <ul className='menuSection' onClick={handleMenu}>
                        {/* tout */}
                        <li className='active' onClick={() => changeSectionMenu("tout")}>Tout</li>
                        {/* success stories */}
                        <li onClick={() => changeSectionMenu("success")}>Les success stories</li>
                    </ul>

                    {/* Filter and search */}
                    <Search setQuery={setQuery} />
                </div>
            </div>

          <AllMedia theme={theme}>

            <AllCards>

              <div className='container-all-cards'>
                {
                  loading ? (<LoaderMedia count={15}/>) : (displayItems)
                }
              </div>

            </AllCards>

            {/* Pagination */}
            <ReactPaginate
              previousLabel={"Précédent"}
              nextLabel={"Suivant"}
              pageCount={totalPage}
              onPageChange={changePage}
              forcePage={initPage}
              breakLabel="..."
              pageRangeDisplayed={7}
              marginPagesDisplayed={1}
              containerClassName={"containerClassName"}
              pageClassName={"pageClassName"}
              previousLinkClassName={"previousLinkClassName"}
              nextLinkClassName={"nextLinkClassName"}
              disabledClassName={"disabledClassName"}
              activeClassName={"activeClassName"}
              />

          </AllMedia>

          {
              modal && (paginationSelect == "tout" ? (<CardMediaModal select={select} setModal={setModal}/>) : (<CardModalSuccess select={select} setModal={setModal}/>))
          }

        </SectionEcouteVoir>

    </Container>
  )
}


// Style CSS

const AllMedia = styled.div`
margin: auto;


.containerClassName {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: right;
  align-items:center;
  user-select: none;
  font-size: 10px;
  margin-right: 50px;
}

.containerClassName li {
  margin: 50px 10px;
}

.pageClassName{
  background-color: ${props => props.theme.colorGrey5};
  border-radius: 50px;
  cursor: pointer;
  padding: 4px 7px;
  transition: .3s ease;


  &:hover{
    background-color: ${props => props.theme.colorBheti};
  }

  a{
    color:white;
    margin:auto;

    &:hover{
      color:white;
    }
  }
}

.previousLinkClassName{
  color: ${props => props.theme.colorBheti};
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover{
    opacity: 0.7;
  }
}

.nextLinkClassName{
  color: ${props => props.theme.colorBheti};
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover{
    opacity: 0.7;
  }
}


.activeClassName{
  background-color: ${props => props.theme.colorBheti};
  color: white;
  border-radius: 50px;
  padding: 4px 7px;
}

.disabledClassName{

}





`;

const AllCards = styled.div`
width: 100%;

.container-all-cards{
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
  width:80%;
  margin:auto;
}

`;

const Container = styled.div`



`;

const SectionUne = styled.div`
margin-bottom: 80px;

.head-text {
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  h2 {
    color: ${props => props.theme.colorBheti};
    margin-bottom: 5px;
  }

  p{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }

  .icon-media {
    margin-right: 30px;

    img{
      height: 70px;
      width: 80px;
    }
  }

}

.body-une {
  display: flex;
  justify-content: center;
  
/*
  .plus-consulter h2 {
    color: ${props => props.theme.colorBheti};
    margin-bottom: 10px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;

  }
  .plus-consulter {
    width: 30%;
    margin-left: 40px;

    .item-consult {
      a{
        text-decoration: underline;
        font-size: 17px;
        
        &:hover{
          color:${props => props.theme.colorBheti};
        }
      }
      p{
        font-size: 14px;
        text-align: justify;
      }

      .item-date {
        text-align: right;
        font-size: 11px;
        margin-top: 10px;
      }
    }
  }
*/
  .cards-une{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;


    /*

    .item_1, .item_2, .item_0{
      
    }
    */
  }


}

`;

const SectionEcouteVoir = styled.div`

.head-text {
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  h2 {
    color: ${props => props.theme.colorBheti};
    margin-bottom: 5px;
  }

  p{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }

  .icon-media {
    margin-right: 30px;

    img{
      height: 70px;
      width: 110px;
    }
  }

}

.menuSection{
    display: flex;
    flex-direction:row;
    list-style: none;
    margin-bottom:-5px;
}

.menuSection li, a {
  margin-right: 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  font-style: normal;

  &:hover{
    color: ${props => props.theme.colorBheti};
  }

}

.containerMenu{
    width:900px;
    margin: 30px auto;
}

.containerMenu .Box{
    display: flex;
    justify-content: space-between;
    align-items:center;
}

.active {
    border-bottom: 2px solid ${props => props.theme.colorBheti};
}

`;

export default Media