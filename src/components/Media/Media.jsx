import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import UneMedia from "../../assets/icons/a_la_une_media.svg";
import VideoMedia from "../../assets/icons/Video_media.svg";
import { useTheme } from "../../context/themeContext";
import Search from "./Search";
import CardMediaModal from "./CardMediaModal";
import CardsMedia from "./CardsMedia";
import CardSuccess from "./SuccessStories/CardSuccess";
import LoaderMedia from "./LoaderMedia";
import { axios_get, axios_post } from "../../utils/FunctionsComponent";
import CardModalSuccess from "./SuccessStories/CardModalSuccess";
import LinksAPI from "../../utils/LinksAPI";
import { interviews } from "../../data/TestData";
import LinkedInPosts from "../LinkedinPost/LinkedInPosts";

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
  // theme
  const theme = useTheme();

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
      axios_get(LinksAPI.entrevues, handleSetData);
      setPaginationSelect("interview");
      setDisplayDataOf("interview");
    } else if (position == "success") {
      axios_get(LinksAPI.stories, handleSetData);
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
        {/* <LinkedInPosts /> */}
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
    justify-content: right;
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
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    h2 {
      color: ${(props) => props.theme.colorBheti};
      margin-bottom: 5px;
      font-family: 'Montserrat', sans-serif;
    }

    p {
      font-family: "Montserrat", sans-serif;
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
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 1280px) {
      width: 100%;
      margin-left: 0px;
    }

    .plus-consulter {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin-left: 40px;
      justify-content: center;
      gap: 30px;

      @media only screen and (max-width: 1280px) {
        width: 100%;
        margin-left: 0px;
      }

      h2 {
        color: ${(props) => props.theme.colorBheti};
        margin-bottom: 10px;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
      }

      .item-consult {
        a {
          text-decoration: underline;
          font-size: 17px;

          &:hover {
            color: ${(props) => props.theme.colorBheti};
          }
        }
        p {
          font-size: 14px;
        }

        .item-date {
          text-align: right;
          font-size: 11px;
          margin-top: 10px;
        }
      }
    }

    .cards-une {
      display: flex;
      flex-direction: column;
      width: 600px;

      @media only screen and (max-width: 1280px) {
        flex-direction: column;
        width: 1000px;
      }

      .card-1 {
        background-color: #700b0b;
        width: 100%;
        height: 238px;
        border-radius: 20px;
      }

      .sub-card {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 15px;

        .card-2 {
          background-color: #700b0b;
          width: 48%;
          height: 250px;
          border-radius: 20px;
        }

        .card-3 {
          background-color: #700b0b;
          width: 48%;
          height: 250px;
          border-radius: 20px;
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
  justify-content: center;
  align-items: center;
  margin: 50px 0;

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

export default Media;
