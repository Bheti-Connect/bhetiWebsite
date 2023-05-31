import { useEffect, useState } from "react";
import * as Components from "./MoreInformation";
import styled from "styled-components";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import bhetiLogo from "../../assets/images/logoBackground.png";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdditionalInfo from "./AdditionalInfo";
const notify = (e, router) => {
  e.preventDefault();

  let user = JSON.parse(localStorage.getItem("user-info"));

  const entrepreneurSuccess = (e) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const process = async () => {
      let response = await fetch(
        `https://api.bheticonnect.com/api/users/${user.data.id}`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({
            role: "entrepreneur",
          }),
        }
      );
      let data = await response.json();
      if (data.data) {
        if (data.data.role == "entrepreneur") {
          router.push("/Entrepreneur/Accueil");
          let user = JSON.parse(localStorage.getItem("user-info"));
          user = {
            ...user,
            data: {
              ...user.data,
              role: "entrepreneur",
            },
          };
          localStorage.setItem("user-info", JSON.stringify(user));
        }
      }
    };
    process();
  };
  toast.success(
    <div>
      <Components.Paragraph>
        Vous nous confirmez que vous êtes entrepreneur ?
      </Components.Paragraph>
      <ButtonDiv>
        <span>
          <AlertButton
            className="button button-1"
            role="button"
            onClick={entrepreneurSuccess}
          >
            Oui
          </AlertButton>
        </span>
        <span>
          <AlertButton
            className="button button-2"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              toast.dismiss();
            }}
          >
            Non
          </AlertButton>
        </span>
      </ButtonDiv>
    </div>,
    {
      position: "top-center",
      autoClose: 30000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
};

const index = () => {
  const [moreInfo, toggle] = useState(true);
  const router = useRouter();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user-info"));
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.main}>
      <Components.Container>
        <Components.QuestionInfo moreInfo={moreInfo}>
          <Components.Form>
            <Components.Title>ℹ️ Informations</Components.Title>
            <Components.Paragraph>
              Cher Investisseur, merci de compléter les informations
              supplémentaire sur vous et votre entreprise afin d'accéder à la
              plate-forme.
            </Components.Paragraph>
            <AdditionalInfo />
          </Components.Form>
        </Components.QuestionInfo>

        <Components.OptionChoice moreInfo={moreInfo}>
          <Components.Form>
            <Components.Title>Vous êtes ?</Components.Title>
            <Components.Paragraph>
              Choisissez une option ci-dessous pour accédez à la plate-forme.
            </Components.Paragraph>
            <Components.Button
              onClick={(e) => {
                notify(e, router);
              }}
            >
              Entrepreneur
            </Components.Button>
            <Components.Button
              onClick={(e) => {
                e.preventDefault();
                toggle(false);
              }}
            >
              Investisseur
            </Components.Button>
          </Components.Form>
        </Components.OptionChoice>

        <Components.OverlayContainer moreInfo={moreInfo}>
          <Components.Overlay moreInfo={moreInfo}>
            <Components.LeftOverlayPanel moreInfo={moreInfo}>
              <Components.Paragraph>
                Si vous n'êtes pas investisseur retour au choix d'option.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Retour
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel moreInfo={moreInfo}>
              <ImageDiv>
                <Image
                  className="bheti_image"
                  src={bhetiLogo}
                  alt="bheti connect logo"
                />
              </ImageDiv>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
        <ToastContainer
          position="top-center"
          autoClose={30000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Components.Container>
    </div>
  );
};

const ImageDiv = styled.div`
  position: absolute;
  width: 55%;
  .bheti_image {
    width: 100%;
    height: 100%;
  }
`;

const ButtonDiv = styled.div`
  width: 90%;
  margin: auto;
  span + span {
    margin-left: 100px;
  }
  .button-1 {
    background-color: #2ecc71;
  }
  .button-2 {
    background-color: #e74c3c;
  }
  .button-1:hover,
  .button-1:focus {
    background-color: #239b56;
  }
  .button-2:hover,
  .button-2:focus {
    background-color: #b03a2e;
  }
`;

const AlertButton = styled.button`
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
export default index;
