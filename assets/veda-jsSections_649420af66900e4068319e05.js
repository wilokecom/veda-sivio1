function veda_fn_c75b71990a7b42b6b65e3d3f80ac4130 () {
        
  if (window.veda_fn_c75b71990a7b42b6b65e3d3f80ac4130Cleanup === undefined) {
    window.veda_fn_c75b71990a7b42b6b65e3d3f80ac4130Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_c75b71990a7b42b6b65e3d3f80ac4130Cleanup.cleanup();

        try {
          const uniqueIds = ["id_5007e07f-6eef-4e42-a283-b6b90e4d2871","id_f22333dd-a922-4a7f-ab6d-a3d51bdf6bdf"];
          uniqueIds.forEach(uniqueId => {
            const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
            containers.forEach(container => {
              if (!container) {
                return;
              }
              veda.plugins.videoCover(container);
              
            });
          });
        } catch(error) {
          console.error(error);
        }
      }
veda_fn_c75b71990a7b42b6b65e3d3f80ac4130();
function veda_fn_411bf89ba6eb49b4b690b985072fd806 () {
      
  if (window.veda_fn_411bf89ba6eb49b4b690b985072fd806Cleanup === undefined) {
    window.veda_fn_411bf89ba6eb49b4b690b985072fd806Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_411bf89ba6eb49b4b690b985072fd806Cleanup.cleanup();

      try {
        const uniqueId = "id_3fc9c5fb-a126-430d-80e1-8944aaf6eb76";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          function handleTags() {
  const btnShowMore = container.querySelector(".btn-more-tag-check");
  if (!btnShowMore) {
    return;
  }
  const checkBoxShow = btnShowMore.querySelector("input");
  const contentShow = btnShowMore.querySelector("div");
  const showText = contentShow.getAttribute("text-show");
  const hiddenText = contentShow.getAttribute("text-show-active");
  const handleChange = () => {
    const moreTagItems = container.querySelectorAll(".more-tag-item-js");
    if (checkBoxShow.checked) {
      moreTagItems.forEach((moreTagItem) => {
        moreTagItem.style.display = "block";
        contentShow.innerHTML = `${hiddenText}<i class="fal fa-minus ml:5px"></i>`;
      });
    } else {
      moreTagItems.forEach((moreTagItem) => {
        moreTagItem.style.display = "none";
        contentShow.innerHTML = `${showText}<i class="fal fa-plus ml:5px"></i>`;
      });
    }
  };
  checkBoxShow.addEventListener("change", handleChange);
  window.veda_fn_411bf89ba6eb49b4b690b985072fd806Cleanup.push(() => {
    checkBoxShow.removeEventListener("change", handleChange);
  });
}

handleTags();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_411bf89ba6eb49b4b690b985072fd806();