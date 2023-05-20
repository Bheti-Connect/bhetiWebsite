import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import UneMedia from '../../assets/icons/a_la_une_media.svg';
import VideoMedia from '../../assets/icons/Video_media.svg';
import { useTheme } from '../../context/themeContext';
import Search from './Search';
import CardMediaModal from './CardMediaModal';
import CardsMedia from './CardsMedia';
import CardSuccess from './SuccessStories/CardSuccess';
import LoaderMedia from './LoaderMedia';
import { axios_get, axios_post } from '../../utils/FunctionsComponent';
import SliderMedia from './SliderMedia';
import CardModalSuccess from './SuccessStories/CardModalSuccess';
import LinksAPI from '../../utils/LinksAPI';
import seminary from '../../assets/images/seminary.jpg'

const Media = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0)
  const [initPage, setInitPage] = useState(-1)
  // query useState for search
  const [query, setQuery] = useState("")
  // Position Query
  const [positionQuery, setPositionQuery] = useState()
  // select card useState
  const [select, setSelect] = useState(null)
  // cards data
  const [data, setData] = useState([])
  // Modal
  const [modal, setModal] = useState(false)
  // Loading : React content loader
  const [loading, setLoading] = useState(true)
  // Position change pagination : interview and success stories
  const [paginationSelect, setPaginationSelect] = useState("interview")
  const [displayDataOf, setDisplayDataOf] = useState("interview")
  const [displayDataOfsuccess, setDisplayDataOfsuccess] = useState("success")
  // theme
  const theme = useTheme();


  const [aLaUne, setALaUne] = useState([
    {
      "id": 1,
      "name": "Bizao",
      "secteur": "fintech",
      "type": 'Lévée de fonds',
      "pays": ["Sénégal", "Cameroun"],
      "stage": "Seed",
      "photo": [
        "https://file.notion.so/f/s/413e3097-afe8-46a3-8f1a-05c260bc20d0/1659774299145.jfif?id=b65d406c-253e-442b-b85f-5dbd3331fa8b&table=block&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&expirationTimestamp=1684675163278&signature=R1bnL5_xVNQCwMDxhGn16W9R6aPIgOvQPwPsFynULBg",
      ]
    },
    {
      "id": 2,
      "name": "jack",
      "secteur": "Zazuu",
      "type": "fintech",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31601d58-4d12-4e63-9aa4-6e20e462b076%2F1657715746443_(1).jpg?table=block&id=ef72fd73-6d0a-41cf-8f6f-1e7833859815&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=1600&userId=&cache=v2",
      ]
    },
    {
      "id": 3,
      "name": "omari",
      "description": "Lorem Ipsum dolor set amet 3",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F515d3af6-8cf1-455c-b538-673ed278407f%2Fpremiere-levee-de-fonds-reussie-pour-afrikamart-la-startup-senegalaise-qui-revolutionne-la-chaine-de-valeur-des-produits-frais-grace-au-numerique.jpg?table=block&id=10f83102-687d-4ad1-b586-2f2140a0b5fd&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",
      ]
    },
    {
      "id": 4,
      "name": "jack",
      "description": "Lorem Ipsum dolor set amet 2",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd742b7bc-6e07-4758-ab78-bad6d3ee9fb3%2F1646474558413.jpg?table=block&id=a18550f3-5825-4102-99e4-d2277f71df8f&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=1880&userId=&cache=v2",
 
      ]
    },
    {
      "id": 5,
      "name": "omari",
      "description": "Lorem Ipsum dolor set amet 3",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1bf81f95-1ea7-4349-b466-5cdb4624de93%2FGoMyCode.jpg?table=block&id=9603f47c-3916-47dd-a73b-489158875dfb&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=1920&userId=&cache=v2",

      ]
    },
    {
      "id": 6,
      "name": "omari",
      "description": "Lorem Ipsum dolor set amet 3",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5c8c26aa-60be-4cca-bdbd-cfe0a4306e64%2Fwas.jpg?table=block&id=47af2b8a-5254-4ffc-892b-a0c64747a9ae&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",

      ]
    }
  ]);

  const [interviewList, setinterviewList] = useState([
    {
      "id": 1,
      "name": "P.de Gaétan, PDG Fonds Pierre Castel",
      "secteur": ["fintech"],
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F21342cab-c941-42c4-84cd-5a17f4ebf761%2FPDG.png?table=block&id=a5237d02-62c0-4c26-9dd6-2480c6d89abc&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=1340&userId=&cache=v2",
      ]
    },
    {
      "id": 2,
      "name": "Bubacar Diallo, CEO Benoo",
      "secteur": ["GreenTech"],
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff12f2968-d83d-461e-a0c1-5acfe123e058%2FBD_Intro_canva_(Miniature_YouTube_-_musique).png?table=block&id=4f814c32-4083-4b08-b97b-95cda5037f7c&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",
      ]
    },
    {
      "id": 3,
      "name": "Nelly Chatue-Diop, CEO Ejara",
      "secteur": ["Blockchain"],
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F74a960db-c413-4272-9e2e-fe029bfee3c6%2FFonds_podcast_Notion.png?table=block&id=fcdcd8a3-fea0-45c3-8bd8-4993770dd7e5&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",
      ]
    },
    {
      "id": 4,
      "name": "Duplex Eric Kamgang, CEO Studely",
      "secteur": "Ed Tech",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a242b07-7535-4dfb-8f53-bb4c6d98bfc4%2FFonds_podcast_Notion_(1).png?table=block&id=7b82ac32-5d14-4fd1-8449-abba6392ea35&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",
 
      ]
    },
    {
      "id": 5,
      "name": "Joseph Larrose, VC Fonds Resiliance",
      "secteur": "Capital risque et fond LBO",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F60fcb5f5-79e0-4cd6-bbc4-9f3d7519c8f9%2FWhatsApp_Image_2022-01-05_at_15.51.15.jpeg?table=block&id=c620b29c-9f3a-455d-8d81-e5207780eeee&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",

      ]
    },
    {
      "id": 6,
      "name": "Roger Nengwe, CEO Paysika",
      "secteur": "Fintech",
      "photo": [
        "https://bheticonnect.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d629742-f5e1-4337-ab4d-4643cd86431e%2Froger.png?table=block&id=81337128-c6ca-4ef8-b70b-7710fa314046&spaceId=28a94394-8589-422e-b8b7-7387089d6ce4&width=2000&userId=&cache=v2",

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
    axios_get(LinksAPI.entrevues, handleSetData)
  }


  // Change Section of data : interview, Succes stories
  const changeSectionMenu = (position) => {
    if (position == "interview") {
      axios_get(LinksAPI.entrevues, handleSetData)
      setPaginationSelect("interview")
      setDisplayDataOf("interview")
    } else if (position == "success") {
      axios_get(LinksAPI.stories, handleSetData)
      setPaginationSelect("success")
      setDisplayDataOfsuccess("success")
    } else {
      getData()
      setPaginationSelect("interview")
      setDisplayDataOf("interview")
    }
  }



  // Search data from API
  const searchData = () => {
    // Body POST
    let toSend = {
      search: {
        value: `${query}`
      }
    }
    // Get research
    if (query && paginationSelect == "interview") {
      axios_post(LinksAPI.entrevuesSearch, toSend, handleSetData)
    }

    if (query && paginationSelect == "success") {
      axios_post(LinksAPI.storiesSearch, toSend, handleSetData)
    }

    setPaginationSelect("query")
  }



  // handle change page
  let changePage = ({ selected }) => {
    var pageNumber = selected + 1
    let source = ""
    let request = ""

    switch (paginationSelect) {
      case "query":
        source = LinksAPI.entrevuesSearchPage(pageNumber)
        request = { "search": { "value": `${query}` } }
        break;

      case "success":
        source = LinksAPI.storiesPage(pageNumber)
        break;

      default:
        source = LinksAPI.entrevuesPage(pageNumber)
        break;
    }

    // get Add for another page
    if (request) {
      axios_post(source, request, handleSetData)
    } else {
      axios_get(source, handleSetData)
    }

  }

  // display items
  let displayItemsStory = aLaUne.map((item, index) => {

    if (displayDataOfsuccess == "success"){
      return (<CardSuccess key={index} item={item} setSelect={setSelect} setModal={setModal} />) 
    }

  });
  let displayItemsInterview = interviewList.map((item, index) => {
    if (displayDataOf == "interview"){
    return  (<CardsMedia key={index} item={item} setSelect={setSelect} setModal={setModal} />) }

  });

  // handle menu : tous, startup and PME for CSS
  const handleMenu = (e) => {
    let activeBtn = document.querySelector(".menuSection .active");
    let valid = e.target.tagName.toLowerCase()

    if (!e.target.classList.contains("active") && valid == "li") {
      activeBtn.classList.remove("active")
      e.target.classList.add("active")
    }
  }

  // First UseEffect
  useEffect(() => {
    const waiting = setTimeout(() => {
      setLoading(false)
    }, 4000);

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
    }, 2000);

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
        <img src={UneMedia} alt="a la une icon" />
      </div>

      <div>
        <h2>A LA UNE...</h2>
        <p>Chaque semaine, découvrez les figures comme les startups qui font bouger les lignes sur les  marchés africains</p>
      </div>
      </div>
      <div className='body-une'>

      <div className='cards-une'>

         <div className='card-1'>lorem ispum</div>

        <div className='sub-card'>
          <div className='card-2'>lorem ispum</div>
          <div className='card-3'>3</div>
        </div>

      </div>

      <div className='plus-consulter'>
      <h2>Les plus consultés</h2>

      <div className='item-consult'>
        <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
        <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
        <p className='item-date'>15 decembre 2022</p>
      </div>

      <div className='item-consult'>
        <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
        <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
        <p className='item-date'>15 decembre 2022</p>
      </div>

      <div className='item-consult'>
        <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
        <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
        <p className='item-date'>15 decembre 2022</p>
      </div>

      <div className='item-consult'>
        <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
        <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
        <p className='item-date'>15 decembre 2022</p>
      </div>

      <div className='item-consult'>
        <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
        <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
        <p className='item-date'>15 decembre 2022</p>
      </div>

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
              {/* interview */}
              <li className='active' onClick={() => changeSectionMenu("interview")}>Interview</li>
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
               loading ? <LoaderMedia count={15} /> : (displayItemsInterview ? displayItemsStory : displayItemsStory)
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
          modal && (displayDataOf == "interview" ? (<CardMediaModal select={select} setModal={setModal} />) : (<CardModalSuccess select={select} setModal={setModal} />))
        }

      </SectionEcouteVoir>

    </Container>
  )
}


// Style CSS

const AllMedia = styled.div`
margin: auto;
#background-color: green;
display:flex;
flex-direction: column;

.containerClassName {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items:center;
  justify-content: center;
  user-select: none;
  font-size: 10px;
  

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
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 70px 0px 70px 70px ;
  

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
    

    img{
      height: 70px;
      width: 80px;
    }
  }

}

.body-une {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;  
  #background-color: blue;
  flex-direction: row;

  @media only screen and (max-width: 1580px) {
    width: 100%;
    flex-direction: row;
  }

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }

  .plus-consulter {
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: center;
    gap: 30px;
    

    @media only screen and (max-width: 414px) {
      width: 100%;
      background-color: white;
    }

    @media only screen and (max-width: 1280px) {
      width: 80%;
  
    }

    h2 {
      color: ${props => props.theme.colorBheti};
      margin-bottom: 10px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      
  
    }


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
        text-align: center;
      }

      .item-date {
        text-align: right;
        font-size: 11px;
        margin-top: 10px;
      }
    }
  }

  .cards-une{
    display:flex;
    flex-direction: column;
    width: 800px;
    margin-left: 20px;


    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      width: 800px;
  
    }

    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      width: 80%;
  
    }

    .card-1 {
      width: 100%;
      height: 250px;
      border-radius: 10px;
      background-image: url(${seminary});
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sub-card {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 15px;

      .card-2{
        background-color: #700b0b;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48%;
        height: 250px;
        border-radius: 20px;
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/785239/background.jpg");
        object-fit: contain;
      }

      .card-3{
        background-color: #700b0b;
        width: 48%;
        height: 250px;
        border-radius: 20px;
        background-image: url(${seminary});
      }
    }

  }


}

@media only screen and (max-width: 768px) {

  .head-text {

    margin-left: 20px;
    margin-right: 20px;

    h2 {
      margin-bottom: 5px;
      font-size: 18px;
    }

    p{
      font-weight: 600;
      font-size: 15px;
    }

    .icon-media {
      img{
        height: 60px;
        width: 50px;
      }
    }
  }

}

@media only screen and (max-width: 578px) {

}


@media only screen and (max-width: 425px) {

}

@media only screen and (max-width: 375px) {

}

@media only screen and (max-width: 320px) {

}

`;

const SectionEcouteVoir = styled.div`

.head-text {
  display:flex;
  justify-content: start;
  align-items: center;
  margin: 60px 0px 60px 60px;

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
    width:50%;
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


@media only screen and (max-width: 1100px) {
  .head-text {
    margin-left: 20px;
    margin-right: 20px;

    h2 {
      margin-bottom: 5px;
      font-size: 18px;
    }

    p{
      font-weight: 600;
      font-size: 15px;
    }

    .icon-media {
      img{
        height: 60px;
        width: 50px;
      }
    }
  }

  .containerMenu .Box ul li{
      font-size: 13px;
}


}

@media only screen and (max-width: 930px) {
  .containerMenu .Box{
    justify-content: space-between;
  }
}


@media only screen and (max-width: 768px) {
  .containerMenu{
    width:100%;
}
  .containerMenu .Box{
    flex-direction: column;
    justify-content: center;

  .head-text {

  margin-left: 20px;
  margin-right: 20px;

  h2 {
    margin-bottom: 5px;
    font-size: 18px;
  }

  p{
    font-weight: 600;
    font-size: 15px;
  }

  .icon-media {
    img{
      height: 60px;
      width: 50px;
    }
  }
  }
}


@media only screen and (max-width: 428px) {

  .head-text {

    margin-left: 20px;
    margin-right: 20px;

    h2 {
      margin-bottom: 5px;
      font-size: 17px;
    }

    p{
      font-weight: 600;
      font-size: 14px;
    }
  }
}



/*
@media only screen and (max-width: 768px) {

}

@media only screen and (max-width: 578px) {

}

@media only screen and (max-width: 508px) {

}



@media only screen and (max-width: 415px) {

}
*/
`;

export default Media