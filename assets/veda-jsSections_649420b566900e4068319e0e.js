function veda_fn_97a567a5695e4f08b27f1cf11bf23f41 () {
      
  if (window.veda_fn_97a567a5695e4f08b27f1cf11bf23f41Cleanup === undefined) {
    window.veda_fn_97a567a5695e4f08b27f1cf11bf23f41Cleanup = {
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
  window.veda_fn_97a567a5695e4f08b27f1cf11bf23f41Cleanup.cleanup();

      try {
        const uniqueId = "id_96fb0b7c-aa1c-4f25-a0ce-d32858888d41";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_97a567a5695e4f08b27f1cf11bf23f41();
function veda_fn_e5ab70e3a7d14b1fbd362e7160db9077 () {
      
  if (window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup === undefined) {
    window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup = {
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
  window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.cleanup();

      try {
        const uniqueId = "id_d38ee119-87d0-41b1-ae0d-e943907cbc03";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  sticky,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes, store } = veda.utils;

let loading = false;

store.create(`@bundleItem-${uniqueId}`, {
  initialState: [],
});
store.set(`@bundleItem-${uniqueId}`, []);

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function handleAddBundle() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    const dataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(dataEl.textContent);
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        const currentVariant = productData.variants.filter(
          (product) => product.id == currentVariantIdEl.textContent.trim()
        )[0];
        const hasImage =
          currentVariant.featured_image?.src ||
          currentVariant.image?.src ||
          typeof currentVariant.image === "string" ||
          typeof currentVariant.featured_image === "string";
        let itemAdd;
        if (hasImage) {
          itemAdd = {
            product_id: productData.id,
            product_title: productData.title,
            ...currentVariant,
          };
        } else {
          itemAdd = {
            product_id: productData.id,
            product_title: productData.title,
            ...currentVariant,
            featured_image: productData.featured_image?.src
              ? productData.featured_image
              : typeof productData.featured_image === "string"
              ? productData.featured_image
              : "",
          };
        }
        store.set(`@bundleItem-${uniqueId}`, (state) => [...state, itemAdd]);
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl?.style?.removeProperty("display");
    }
    store.set(`@bundleItem-${uniqueId}`, []);
    const bundleWrapperContent = container.querySelector(
      ".product-bundle-wrapper-content"
    );
    const iconPlus = container.querySelector(".fa-plus");
    const iconMinus = container.querySelector(".fa-minus");
    if (
      window.innerWidth <= 768 &&
      !bundleWrapperContent.classList.contains("d:none")
    ) {
      bundleWrapperContent.classList.add("d:none");
      if (!iconMinus.classList.contains("d:none")) {
        iconMinus.classList.add("d:none");
      }
      if (iconPlus.classList.contains("d:none")) {
        iconPlus.classList.remove("d:none");
      }
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
    clearTimeout(id);
  });
}

async function insertBundle(items) {
  try {
    const res = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items,
      }),
    });
    if (res.status !== 201 && res.status !== 201) {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function handleCart() {
  const btnAddCartEls = container.querySelectorAll(".product-cart-add-js ");
  if (!btnAddCartEls) {
    return;
  }
  btnAddCartEls.forEach((btnAddCartEl) => {
    const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
    const handleClick = async (event) => {
      if (!loading) {
        loading = true;
        const spinner =
          "<div class='veda-spinner bdw:2px mr:10px' style='--spinner-color: var(--color-gray9); --spinner-size: 14px'></div>";
        btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
        if (!!iconEl) {
          iconEl.style.display = "none";
        }
        if (builderMode) {
          const id = setTimeout(() => {
            const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
            currentSpinner.remove();
            addCartSuccess(btnAddCartEl);
            clearTimeout(id);
          }, 2000);
          window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
            clearTimeout(id);
          });
        } else {
          const result = store
            .get(`@bundleItem-${uniqueId}`)
            .reduce((acc, item) => {
              return [...acc, { id: item.id, quantity: 1 }];
            }, []);
          insertBundle(result)
            .then(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
            })
            .catch((err) => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              loading = false;
              message.error(err.toString());
            });
        }
      }
    };
    btnAddCartEl.addEventListener("click", handleClick);
    window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
      btnAddCartEl.removeEventListener("click", handleClick);
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const availableEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".available-product-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!availableEl) {
        if (variant.available) {
          const availableCss =
            availableEl.parentNode.getAttribute("data-instock");
          availableEl.textContent = `${quickViewData.in_stock}`;
          availableEl.parentNode.classList.remove(
            ..."bgc:#ddf1e9 c:#599078 bgc:#ffe7e7 c:#eb4747".split(" ")
          );
          availableEl.parentNode.classList.add("bgc:#ddf1e9", "c:#599078");
          if (!!availableCss) {
            availableEl.parentNode.setAttribute(
              "data-css",
              getObjectAttributes(availableCss)["data-css"]
            );
          }
        } else {
          const availableCss = availableEl.getAttribute("data-outofstock");
          availableEl.textContent = `${quickViewData.out_of_stock}`;
          availableEl.parentNode.classList.remove(
            ..."bgc:#ddf1e9 c:#599078 bgc:#ffe7e7 c:#eb4747".split(" ")
          );
          availableEl.parentNode.classList.add("bgc:#ffe7e7", "c:#eb4747");
          if (!!availableCss) {
            availableEl.setAttribute(
              "data-css",
              getObjectAttributes(availableCss)["data-css"]
            );
          }
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function renderBundleItem(items) {
  const sidebar = container.querySelector(".sidebar");
  const imageRadius = Number(sidebar.getAttribute("data-image-radius"));
  const itemDesign = getObjectAttributes(
    sidebar.getAttribute("data-item-design")
  );
  const nameDesign = getObjectAttributes(
    sidebar.getAttribute("data-name-design")
  );
  const optionDesign = getObjectAttributes(
    sidebar.getAttribute("data-option-design")
  );
  const quantity = Number(sidebar.getAttribute("data-quantity"));
  let htmlItems = "";
  for (let i = 0; i < quantity; i++) {
    if (!!items[i]) {
      htmlItems += `
        <div class="d:flex ${i != 0 ? "mt:15px" : "mt:-10px@sm"}" data-css="${
        itemDesign["data-css"]
      }">
          <div class="pos:relative">
            <div class="veda-image-cover w:58px h:58px mr:10px bd:1px_solid_color-light.2 bdrs:50% flxs:0 ov:hidden" style="${
              !!imageRadius ? `border-radius: ${imageRadius}%` : ""
            }";--aspect-ratio:100>
              <img class="veda-lazyload" src="${imageUrl(
                items[i].featured_image?.src ||
                  items[i].image?.src ||
                  items[i].featured_image ||
                  items[i].image,
                10
              )}" width="50" height="50" loading="lazy">
            </div>
            <span class="remove-bundle-item pos:absolute t:0 r:5px d:flex jc:center ai:center w:20px h:20px bgc:color-light z:2 bdrs:50% cur:pointer" data-id="${i}">
              <span><i class="fal fa-times"></i></span>
            </span>
          </div>
          <div class="w:100% d:flex fld:column jc:center">
            <div class="c:color-light" data-css="${nameDesign["data-css"]}">${
        items[i].product_title
      }</div>
            <div class="mt:5px c:color-gray6" data-css="${
              optionDesign["data-css"]
            }">${items[i].title}</div>
          </div>
        </div>
      `;
    } else {
      htmlItems += `
        <div class="d:flex ${i != 0 ? "mt:15px" : "mt:-10px@sm"}" data-css="${
        itemDesign["data-css"]
      }">
          <div class="w:58px h:58px mr:10px bd:1px_solid_color-light.2 bdrs:50% flxs:0" style="${
            !!imageRadius ? `border-radius: ${imageRadius}%` : ""
          }"></div>
          <div class="w:100% d:flex fld:column jc:center">
            <div class="w:80% h:12px bd:1px_solid_color-light.2" data-css="${
              nameDesign["data-css"]
            }"></div>
            <div class="mt:15px w:60% h:12px bd:1px_solid_color-light.2" data-css="${
              optionDesign["data-css"]
            }"></div>
          </div>
        </div>
      `;
    }
  }
  const bundleContent = container.querySelector(".product-bundle-content");
  bundleContent.innerHTML = htmlItems;
  const btnRemoveEls = bundleContent.querySelectorAll(".remove-bundle-item");
  btnRemoveEls.forEach((btnRemoveEl) => {
    const handleClick = (event) => {
      const currentIndex = event.currentTarget.getAttribute("data-id");
      store.set(`@bundleItem-${uniqueId}`, (state) =>
        state.filter((item, index) => index != currentIndex)
      );
    };
    btnRemoveEl.addEventListener("click", handleClick);
    window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
      btnRemoveEl.removeEventListener("click", handleClick);
    });
  });
}

function toggleBundleMobile() {
  const iconPlus = container.querySelector(".fa-plus");
  const iconMinus = container.querySelector(".fa-minus");
  const bundleWrapperContent = container.querySelector(
    ".product-bundle-wrapper-content"
  );
  if (window.innerWidth <= 768) {
    if (!bundleWrapperContent.classList.contains("d:none")) {
      bundleWrapperContent.classList.add("d:none");
      if (!iconMinus.classList.contains("d:none")) {
        iconMinus.classList.add("d:none");
      }
      if (iconPlus.classList.contains("d:none")) {
        iconPlus.classList.remove("d:none");
      }
    } else {
      bundleWrapperContent.classList.remove("d:none");
      if (!iconPlus.classList.contains("d:none")) {
        iconPlus.classList.add("d:none");
      }
      if (iconMinus.classList.contains("d:none")) {
        iconMinus.classList.remove("d:none");
      }
    }
  }
}

renderBundleItem([]);
handleCompare();
handleWishList();
handleQuickView();
handleAddBundle();
handleCart();
handleColor();
const unsubscribeBundle = store.subscribe(
  `@bundleItem-${uniqueId}`,
  (state) => {
    const btnAddCartEls = container.querySelectorAll(".product-card-add-js");
    btnAddCartEls.forEach((btnAddCartEl) => {
      const dataEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const hasProduct = state.some(
        (item) => item.product_id === productData.id
      );
      const sidebar = container.querySelector(".sidebar");
      const quantity = Number(sidebar.getAttribute("data-quantity"));
      if (hasProduct || state.length >= quantity) {
        btnAddCartEl.classList.add("pe:none", "op:0.7");
      } else {
        btnAddCartEl.classList.remove("pe:none", "op:0.7");
      }
      const btnAdd = container.querySelector(".product-cart-add-js");
      if (state.length >= quantity) {
        btnAdd.classList.remove("pe:none", "op:0.4");
      } else if (!btnAdd.classList.contains("pe:none")) {
        btnAdd.classList.add("pe:none", "op:0.4");
      }
    });
    renderBundleItem(state);
    const iconPlus = container.querySelector(".fa-plus");
    const iconMinus = container.querySelector(".fa-minus");
    const bundleWrapperContent = container.querySelector(
      ".product-bundle-wrapper-content"
    );
    if (
      bundleWrapperContent.classList.contains("d:none") &&
      state.length != 0
    ) {
      bundleWrapperContent.classList.remove("d:none");
      if (!iconPlus.classList.contains("d:none")) {
        iconPlus.classList.add("d:none");
      }
      if (iconMinus.classList.contains("d:none")) {
        iconMinus.classList.remove("d:none");
      }
    }
  }
);

const bundleHeader = container.querySelector(".product-bundle-header");

bundleHeader.addEventListener("click", toggleBundleMobile);
window.veda_fn_e5ab70e3a7d14b1fbd362e7160db9077Cleanup.push(() => {
  bundleHeader.removeEventListener("click", toggleBundleMobile);
  unsubscribeBundle();
});

const sidebarEl = container.querySelector(".sidebar-js");
sticky.subscribe((height) => {
  sidebarEl.style.top = `${height + 10}px`;
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_e5ab70e3a7d14b1fbd362e7160db9077();
function veda_fn_79d5ae21b2774596aee41f20300d720d () {
      
  if (window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup === undefined) {
    window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup = {
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
  window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.cleanup();

      try {
        const uniqueId = "id_e5fc5340-9d1e-417c-adc5-1644f7eb2bff";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  swiper,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty(
      "background-color",
      "var(--color-primary)",
      "important"
    );
    el.style.setProperty("color", "var(--color-light-freeze)", "important");
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("background-color");
    el.style.removeProperty("color");
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          iconEl.style.display = "none";
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const quickViewDataEl = container.querySelector(".quickview-data-js");
      const quickViewData = objectParse(quickViewDataEl.textContent);
      const availableEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".available-product-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.innerHTML = variant.price;
          salePrice.innerHTML = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.innerHTML = variant.price;
        }
      }
      if (!!availableEl) {
        if (variant.available) {
          const availableCss =
            availableEl.parentNode.getAttribute("data-instock");
          availableEl.textContent = `${quickViewData.in_stock}`;
          availableEl.parentNode.classList.remove(
            ..."bgc:#ddf1e9 c:#599078 bgc:#ffe7e7 c:#eb4747".split(" ")
          );
          availableEl.parentNode.classList.add("bgc:#ddf1e9", "c:#599078");
          if (!!availableCss) {
            availableEl.parentNode.setAttribute(
              "data-css",
              getObjectAttributes(availableCss)["data-css"]
            );
          }
        } else {
          const availableCss = availableEl.getAttribute("data-outofstock");
          availableEl.textContent = `${quickViewData.out_of_stock}`;
          availableEl.parentNode.classList.remove(
            ..."bgc:#ddf1e9 c:#599078 bgc:#ffe7e7 c:#eb4747".split(" ")
          );
          availableEl.parentNode.classList.add("bgc:#ffe7e7", "c:#eb4747");
          if (!!availableCss) {
            availableEl.setAttribute(
              "data-css",
              getObjectAttributes(availableCss)["data-css"]
            );
          }
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleSwiper() {
  const id = setTimeout(() => {
    const instance = swiper(container);
    const el = container.querySelector(".swiper-wrapper");
    el.style.alignItems = "stretch";
    window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
      clearTimeout(id);
    });
  }, 0);
  window.veda_fn_79d5ae21b2774596aee41f20300d720dCleanup.push(() => {
    clearTimeout(id);
  });
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
handleSwiper();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_79d5ae21b2774596aee41f20300d720d();