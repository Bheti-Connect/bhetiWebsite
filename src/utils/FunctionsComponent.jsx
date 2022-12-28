import axios from "axios";

// handle disable modal
export const closeModal = (tag, setModal) => {
    if (tag.classList.contains("close"))
    {
        const body = document.querySelector("body");
        body.style.overflow = "auto";
        setModal(false);
    }
}

// handle select modal
export const handleSelect = (setSelect, setModal, item) => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    setSelect(item)
    setModal(true)
}

// axios GET
export const axios_get = (url, functionGetData) => {
    axios.get(url).then(res => {
        functionGetData(res.data)
      }).catch((error) => console.log(error))
}

// axios POST
export const axios_post = (url, data_send, functionGetData) => {
    axios.post(url, data_send).then(res => {
        functionGetData(res.data)
      }).catch((error) => console.log(error))
}