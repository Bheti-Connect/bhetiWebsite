import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BsArrowDownSquareFill } from 'react-icons/bs';
import styled from "styled-components";
import UneMedia from "../../assets/icons/a_la_une_media.svg";
import VideoMedia from "../../assets/icons/Video_media.svg";
import { useTheme } from "../../context/themeContext";
import Search from "./Search";
import CardMediaModal from "./CardMediaModal";
import CardsMedia from "./CardsMedia";
import Img_test from '../../assets/images/Amini-startup.jpg'
import CardSuccess from "./SuccessStories/CardSuccess";
import LoaderMedia from "./LoaderMedia";
import { axios_get, axios_post } from "../../utils/FunctionsComponent";
import CardModalSuccess from "./SuccessStories/CardModalSuccess";
import LinksAPI from "../../utils/LinksAPI";
import { interviews, successstories } from "../../data/TestData";
import LinkedInPosts from "../LinkedinPost/LinkedInPosts";
import PlusConsultes from "./PlusConsultes"

const Media = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [initPage, setInitPage] = useState(-1);
  // query useState for search
  const [query, setQuery] = useState("");
  // Position Query
  const [positionQuery, setPositionQuery] = useState();
  // select card useState
  const [select, setSelect] = useState(null);
  // cards data
  const [data, setData] = useState([]);
  // Modal
  const [modal, setModal] = useState(false);
  // Loading : React content loader
  const [loading, setLoading] = useState(true);
  // Position change pagination : interview and success stories
  const [paginationSelect, setPaginationSelect] = useState("interview");
  const [displayDataOf, setDisplayDataOf] = useState("interview");
  const [showFirstParagraph, setshowFirstParagraph] = useState(false);
  const [showSecondParagraph, setshowSecondParagraph] = useState(false);
  const [showThirdParagraph, setshowThirdParagraph] = useState(false);

  // theme
  const theme = useTheme();

  // initialize

    const handleToggleFirstParagraph = () => {
      setshowFirstParagraph(!showFirstParagraph);
    };
    const handleToggleSecondParagraph = () => {
      setshowSecondParagraph(!showSecondParagraph);
    };
    const handleToggleThirdParagraph = () => {
      setshowThirdParagraph(!showThirdParagraph);
    };

  // handle for receive data and set in useState
  const handleSetData = (response) => {
    setCurrentPage(response.meta.current_page);
    setTotalPage(response.meta.last_page);
    setItemsPerPage(response.meta.per_page);
    setData(response.data);
  };

  // GET data from API
  const getData = () => {
    setData(interviews)
    /*
    axios_get(LinksAPI.entrevues, handleSetData);
    */
  };

  // Change Section of data : interview, Succes stories
  const changeSectionMenu = (position) => {
    if (position == "interview") {
      //axios_get(LinksAPI.entrevues, handleSetData);
      getData();
      setPaginationSelect("interview");
      setDisplayDataOf("interview");
    } else if (position == "success") {
      //axios_get(LinksAPI.stories, handleSetData);
      setData(successstories)
      setPaginationSelect("success");
      setDisplayDataOf("success");
    } else {
      getData();
      setPaginationSelect("interview");
      setDisplayDataOf("interview");
    }
  };

  // Search data from API
  const searchData = () => {
    // Body POST
    let toSend = {
      search: {
        value: `${query}`,
      },
    };
    // Get research
    if (query && paginationSelect == "interview") {
      axios_post(LinksAPI.entrevuesSearch, toSend, handleSetData);
    }

    if (query && paginationSelect == "success") {
      axios_post(LinksAPI.storiesSearch, toSend, handleSetData);
    }

    setPaginationSelect("query");
  };

  // handle change page
  let changePage = ({ selected }) => {
    var pageNumber = selected + 1;
    let source = "";
    let request = "";

    switch (paginationSelect) {
      case "query":
        source = LinksAPI.entrevuesSearchPage(pageNumber);
        request = { search: { value: `${query}` } };
        break;

      case "success":
        source = LinksAPI.storiesPage(pageNumber);
        break;

      default:
        source = LinksAPI.entrevuesPage(pageNumber);
        break;
    }

    // get Add for another page
    if (request) {
      axios_post(source, request, handleSetData);
    } else {
      axios_get(source, handleSetData);
    }
  };

  // display items
  let displayItems = data.map((item, index) => {
    return displayDataOf == "interview" ? (
      <CardsMedia
        key={index}
        item={item}
        setSelect={setSelect}
        setModal={setModal}
      />
    ) : (
      <CardSuccess
        key={index}
        item={item}
        setSelect={setSelect}
        setModal={setModal}
      />
    );
  });

  // handle menu : tous, startup and PME for CSS
  const handleMenu = (e) => {
    let activeBtn = document.querySelector(".menuSection .active");
    let valid = e.target.tagName.toLowerCase();

    if (!e.target.classList.contains("active") && valid == "li") {
      activeBtn.classList.remove("active");
      e.target.classList.add("active");
    }
  };

  // First UseEffect
  useEffect(() => {
    const waiting = setTimeout(() => {
      setLoading(false);
    }, 4000);

    changeSectionMenu();

    return () => {
      clearTimeout(waiting);
    };
  }, []);

  // UseEffect if currentPage change
  useEffect(() => {
    setLoading(true);
    const waiting = setTimeout(() => {
      setLoading(false);
    }, 4000);

    setInitPage(currentPage - 1);

    return () => {
      clearTimeout(waiting);
    };
  }, [currentPage, query]);

  // useEffect of query
  useEffect(() => {
    searchData();
  }, [query]);

  return (
    <Container>
      <SectionUne theme={theme}>
        <div className="head-text">
          <div className="icon-media">
            <img src={UneMedia} alt="a la une icon" />
          </div>

          <div>
            <h2>A LA UNE...</h2>
            <p>
              Chaque semaine, découvrez les figures comme les startups qui font
              bouger les lignes sur les marchés africains
            </p>
          </div>
        </div>
        <div className="body-une">
        <div className="cards-une">
            <div className="card-1" onClick={() => { window.location.href = window.location.href='https://www.linkedin.com/feed/update/urn:li:activity:7088805359523360768/'; }}>
              <img  />
            </div>
            <div className="sub-card">
                <div className="card-2" onClick={() => { window.location.href = window.location.href='https://www.linkedin.com/feed/update/urn:li:activity:7087743547411456001/'; }}></div>
                <div className="card-3" onClick={() => { window.location.href = window.location.href='https://www.linkedin.com/feed/update/urn:li:activity:7091417971025162240/'; }}></div>
            </div>
          </div>
          <div className="plus-consulter">
            <h2>Les plus consultés</h2>
            <PlusConsultes />
            <div className="item-consult">
              <a href="https://www.linkedin.com/posts/bheti-connect_lives-bheti-connect-activity-6971029367661457409-17uq?utm_source=share&utm_medium=member_desktop" className="live-anchor"><b>Les lives Bheti Connect, c'est :</b></a>
              <p className="live-text">
                <li>📌 Plus de 500 participants</li> <br />
                <li> 📌 7 lives avec 8 invités qui font bouger les choses sur les marchés africains</li><br />
                <li>📌 Une pluralité de sujets qui portent sur les réels tendances économiques en Afrique</li>
              </p>
            </div>
          </div>
        </div>
      </SectionUne>
      <SectionEcouteVoir theme={theme}>
        <div className="head-text">
          <div className="icon-media">
            <img src={VideoMedia} alt="video icon" />
          </div>
          <div>
            <h2>Ecouter et voir</h2>
            <p>
              Apprenez de ceux qui analysent le climat des affaires pour piloter
              et prendre des décisions au quotidien
            </p>
          </div>
        </div>
        <div className="containerMenu">
          <div className="Box">
            {/* Section menu */}
            <ul className="menuSection" onClick={handleMenu}>
              {/* interview */}
              <li
                className="active"
                onClick={() => changeSectionMenu("interview")}
              >
                Interview
              </li>
              {/* success stories */}
              <li onClick={() => changeSectionMenu("success")}>
                Les success stories
              </li>
            </ul>

            {/* Filter and search */}
            <Search setQuery={setQuery} />
          </div>
        </div>
        <AllMedia theme={theme}>
          <AllCards>
            <div className="container-all-cards">
              {loading ? <LoaderMedia count={15} /> : displayItems}
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
        {modal &&
          (displayDataOf == "interview" ? (
            <CardMediaModal select={select} setModal={setModal} />
          ) : (
            <CardModalSuccess select={select} setModal={setModal} />
          ))}
      </SectionEcouteVoir>
    </Container>
  );
};

// Style CSS
const AllMedia = styled.div`
  margin: auto;
  .containerClassName {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    user-select: none;
    font-size: 10px;
    margin-right: 50px;
  }
  .containerClassName li {
    margin: 50px 10px;
  }
  .pageClassName {
    background-color: ${(props) => props.theme.colorGrey5};
    border-radius: 50px;
    cursor: pointer;
    padding: 4px 7px;
    transition: 0.3s ease;
    &:hover {
      background-color: ${(props) => props.theme.colorBheti};
    }
    a {
      color: white;
      margin: auto;
      &:hover {
        color: white;
      }
    }
  }
  .previousLinkClassName {
    color: ${(props) => props.theme.colorBheti};
    padding: 5px;
    font-family: 'Montserrat' sans-serif;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    &:hover {
      opacity: 0.7;
    }
  }
  .nextLinkClassName {
    color: ${(props) => props.theme.colorBheti};
    padding: 5px;
    font-family: sans-serif;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    &:hover {
      opacity: 0.7;
    }
  }

  .activeClassName {
    background-color: ${(props) => props.theme.colorBheti};
    color: white;
    border-radius: 50px;
    padding: 4px 7px;
  }
  .disabledClassName {
  }
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px !important;
  font-weight: 900;
  cursor: pointer;
  margin-left: 15px;
  margin-bottom: 10px;
  text-align: left;
  /* Title styles */
  @media only screen and (max-width: 500px) {
    width: 85% !important;
  }
  @media screen and (min-width: 600px) and (max-width:1100px) {
          width: 80%;
        }
`;

const ArrowIcon = styled(BsArrowDownSquareFill)`
  /* Arrow icon styles */
  position: absolute;
  right: 25px;
  margin-left: 16px;
  width: 20px;
  height: 20px;
  color: #641C1C;
  @media screen and (min-width: 600px) and (max-width:1100px) {
    right: 165px;
  }

`;

const AllCards = styled.div`
  width: 100%;

  .container-all-cards {
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
    width: 80%;
    margin: auto;
  }
`;

const Container = styled.div``;

const SectionUne = styled.div`
margin-bottom: 80px;

.head-text {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  margin: 50px 0;
  margin-left: 55px;

    h2 {
      color: ${(props) => props.theme.colorBheti};
      margin-bottom: 5px;
    }

    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
    }

  .icon-media {
    margin-right: 30px;

    img {
      height: 70px;
      width: 80px;
    }
  }
}

.body-une {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;  
  flex-direction: row;

  @media only screen and (max-width: 1580px) {
    width: 100%;
    flex-direction: row;
  }

  @media only screen and (max-width: 1280px) {
    margin: auto;
    width: 98%;
    flex-wrap: nowrap;
  }
  @media only screen and (max-width: 1100px) {
    flex-wrap: wrap;
    width: 80%;
  }

  .plus-consulter {
    display: flex;
    flex-direction: column;
    width: 45%;
    
    @media only screen and (max-width: 1280px) {
      margin-left: 3%;
      width: 45%;
    }
    @media only screen and (max-width: 480px) {
      width: 90%;
      margin: 15px auto 0;
      background-color: white;
    }

      h2 {
        color: ${(props) => props.theme.colorBheti};
        margin-bottom: 10px;
        margin-left: 15px;

        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        @media only screen and (max-width: 480px) {
          font-size: 23px;
          text-align: left;
          margin-left: 15px;
        }
      }

    .item-consult {
      a{
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        &:hover{
          color:${props => props.theme.colorBheti};
          text-decoration: underline;
        }
      }
      .live-anchor{
        font-size: 16px;
        font-weight: 900;
        margin-left: 12px;
        font-weight: 600;
        @media all and (max-width: 480px) {
          margin-left: -65px;
        }
      }
      p{
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        text-align: start;
        &:hover{
          color:${props => props.theme.colorBheti};
        }
        @media only screen and (max-width: 500px){
          width: 90%;
          margin-left: 12px;
        }
      }
      .plusconsultes-subtext{
        width: 88%;
        font-size: 14px;
        margin-left: 12px;
      }
      .live-text{
        width: 90%;
        margin-left: 12px;
        font-weight: 700;
      }

      .item-date {
        text-align: right;
        font-size: 11px;
        margin-top: 10px;
      }
      .title{
        display: flex;
      }
    }
  }

  .cards-une{
    display:flex;
    flex-direction: column;
    width: 700px;
    margin-left: 20px;

    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      width: 800px;
  
    }

    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      width: 80%;
    }
    @media only screen and (max-width: 500px) {
      margin: auto;
      width: 90%;
    }


    .card-1 {
      width: 100%;
      height: 220px;
      border-radius: 10px;
      background-image: url("https://media.licdn.com/dms/image/D4E22AQFxBJEL9MLkTg/feedshare-shrink_1280/0/1690102874576?e=1693440000&v=beta&t=IsNTZ8cTx3M7EOtrsMR9SF1totjKR4DfL33Uh9WVaLw") ;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: 5px 3px 3px #b86a6a;
      cursor: pointer;
      @media only screen and (max-width: 500px) {
          width: 100% ;
          height: 340px;
        }
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
        height: 300px;
        border-radius: 20px;
        background-image: url("https://media.licdn.com/dms/image/D4E22AQFfBDIw2bZ8HA/feedshare-shrink_800/0/1689849744670?e=1693440000&v=beta&t=7HV3m53lsqGwMenL9ShxES4-IkPo7DQKtZ0RWbIWiKU") ;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 5px 3px 3px #b86a6a;
        cursor: pointer;
        @media only screen and (max-width: 500px) {
          width: 100% ;
          height: 340px;
        }
      }

      .card-3{
        background-color: #700b0b;
        width: 48%;
        height: 300px;
        border-radius: 20px;
        background-image: url("https://media.licdn.com/dms/image/D4E22AQF2K23_ggpq-A/feedshare-shrink_800/0/1690725794901?e=1694044800&v=beta&t=ppR0q-kNOJjEMAWyhA1Zc4jkZ90k-u1XLM6dsJx66wY") ;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 5px 3px 3px #b86a6a;
        cursor: pointer;
        @media only screen and (max-width: 500px) {
          margin-top: 12px;
          width: 100%;
          height: 340px;
        }
      }
      @media only screen and (max-width: 500px) {
          display: block;
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
      font-size: 17px;
    }

    p {
      font-weight: 600;
      font-size: 15px;
    }

    .icon-media {
      img {
        height: 60px;
        width: 50px;
      }
    }
  }
}
`;

const SectionEcouteVoir = styled.div`

.head-text {
  display:flex;
  justify-content: flex-start;
  align-items: start;
  margin-left: 55px;

  h2 {
    color: ${(props) => props.theme.colorBheti};
    margin-bottom: 5px;
  }

  p{
    font-family: 'Montserrat', sans-serif;
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 15px;
  font-style: normal;

  &:hover{
    color: ${(props) => props.theme.colorBheti};
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
    border-bottom: 2px solid ${(props) => props.theme.colorBheti};
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
}}


@media only screen and (max-width: 428px) {

  .head-text {

    margin-left: 20px;
    margin-right: 20px;

    h2 {
      margin-bottom: 5px;
      font-size: 16px;
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

export default Media;
