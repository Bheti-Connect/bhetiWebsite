
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