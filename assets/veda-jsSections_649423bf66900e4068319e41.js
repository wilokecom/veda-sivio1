function veda_fn_b24169ab0afe49b6843abf7b37fa8d8d () {
      
  if (window.veda_fn_b24169ab0afe49b6843abf7b37fa8d8dCleanup === undefined) {
    window.veda_fn_b24169ab0afe49b6843abf7b37fa8d8dCleanup = {
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
  window.veda_fn_b24169ab0afe49b6843abf7b37fa8d8dCleanup.cleanup();

      try {
        const uniqueId = "id_f8d4eb4f-f01b-42af-a258-531eb8b64ed6";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { animatedSlider } = veda.plugins;

const slider = animatedSlider(container.querySelector(".veda-animated-slider"));

window.veda_fn_b24169ab0afe49b6843abf7b37fa8d8dCleanup.push(() => {
  slider.destroy();
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_b24169ab0afe49b6843abf7b37fa8d8d();
function veda_fn_352e4cc0adf943e9bfd7e34140c7d2ea () {
      
  if (window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup === undefined) {
    window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup = {
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
  window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.cleanup();

      try {
        const uniqueId = "id_157e00f2-bb47-47d9-9efe-65610f6f9d1e";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          let loading = false;
const {
  cart,
  productWishList,
  productCompare,
  photoSwipe,
  message,
  toggleGroup,
  swiper,
  imageZoom,
  countdown,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes, store, random } =
  veda.utils;
let iconType = "";
const wishListDataEl = container.querySelector(".product-card-data-js");
const productData = objectParse(wishListDataEl.textContent);
const countdownEls = container.querySelectorAll(".veda-countdown");

countdownEls.forEach((countdownEl) => {
  const destroy = countdown(countdownEl);
  window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
    destroy();
  });
});
class PageProduct {
  constructor() {
    this.data = productData;
    this.option = productData.selected_or_first_available_variant.options;
    this.variantId = productData.selected_or_first_available_variant.id;
    this.toggleGroup = [];
    this.swipper = swiper(container);
    this.init();
  }

  handleChangeVariant(variant, changeSlide) {
    const btnAddCart = container.querySelector(".product-card-add-js");
    const btnBuyNow = container.querySelector(".btn-buy-now-js");
    if (!!variant) {
      btnAddCart.classList.remove(..."pe:none op:0.5".split(" "));
      btnBuyNow?.parentNode?.classList?.remove(..."pe:none op:0.5".split(" "));
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      const onSaleEl = priceEl.querySelector(".product-price-on-sale-js");
      const notSaleEl = priceEl.querySelector(".product-price-not-sale-js");
      availableEl?.classList?.remove("d:none");
      skuEl?.classList?.remove("d:none");
      if (priceEl.classList.contains("d:none")) {
        priceEl?.classList?.remove("d:none");
      }
      const currentSelectedIdEl = container.querySelector(
        ".veda-product-variant-select-id-js"
      );
      const variantPosition = this.data.variants.findIndex((currentVariant) => {
        return currentVariant.id == variant.id;
      });
      if (changeSlide) {
        this.swipper?.slideTo(variantPosition);
      }
      this.variantId = variant.id;
      currentSelectedIdEl.value = `${this.variantId}`;
      // change available
      if (!!availableEl) {
        const availableTitle = availableEl.getAttribute("data-title");
        const availableInStockText =
          availableEl.getAttribute("data-instock-text");
        const availableOutOfStockText = availableEl.getAttribute(
          "data-outofstock-text"
        );
        if (variant.available) {
          const inStockText = availableInStockText.replace(
            /\d+/g,
            `${variant.inventory_quantity}`
          );
          availableEl.textContent = `${availableTitle}: ${inStockText}`;
        } else {
          availableEl.textContent = `${availableTitle}: ${availableOutOfStockText}`;
        }
      }
      // change price
      if (!!priceEl) {
        const regularPriceValue =
          Number(`${variant.compare_at_price}`.replaceAll(/\W/g, "")) | 0;
        const salePriceValue =
          Number(`${variant.price}`.replaceAll(/\W/g, "")) | 0;
        if (regularPriceValue > salePriceValue) {
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
      if (!!skuEl && !!variant.sku) {
        skuEl.textContent = `SKU: ${variant.sku}`;
      }
      this.data.options_with_values.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    } else {
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      if (!btnAddCart.classList.contains("pe:none")) {
        btnAddCart.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!!btnBuyNow && !btnBuyNow?.classList?.contains?.("pe:none")) {
        btnBuyNow.parentNode.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!availableEl.classList.contains("d:none") && !!availableEl) {
        availableEl.classList.add("d:none");
      }
      if (!!skuEl && !skuEl.classList.contains("d:none")) {
        skuEl.classList.add("d:none");
      }
      if (!priceEl.classList.contains("d:none") && !!priceEl) {
        priceEl.classList.add("d:none");
      }
      this.data.options_with_values.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    }
  }

  handleChangeSlide() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option, index) => {
        const activeIndex = option.values.findIndex(
          (item) => item == this.option[index]
        );
        this.toggleGroup[index].go(activeIndex);
      });
    }
  }

  handleSelectOption() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option) => {
        const position = Number(option.position) - 1;
        const currentActiveIndex = option.values.findIndex(
          (item) => item === option.selected_value
        );
        const el = container.querySelector(
          `.veda-toggle-group-${option.position}`
        );
        const itemDataCss = getObjectAttributes(
          el.getAttribute("data-item-css")
        );
        const itemActiveDataCss = getObjectAttributes(
          el.getAttribute("data-item-active-css")
        );
        let classItemAdd = "c:color-light bgc:color-gray9";
        let classItemRemove = "c:color-gray9 bgc:color-gray2";
        if (option.name === "Color") {
          classItemAdd = "bd:1px_solid_color-gray9";
          classItemRemove = "bd:1px_solid_color-gray3";
        }
        const currentToggle = toggleGroup(el, {
          activeIndex: Number(currentActiveIndex),
          onChange: (index) => {
            const itemEls = el.querySelectorAll(".veda-toggle-group__item");
            this.option.splice(position, 1, option.values[index]);
            const currentVariant = this.data.variants.filter(
              (variant) =>
                variant.options.length === this.option.length &&
                variant.options.every((value, index) => {
                  return value === this.option[index];
                })
            )[0];
            this.handleChangeVariant(currentVariant, true);
            itemEls.forEach((itemEl, currentIndex) => {
              if (index != currentIndex) {
                itemEl.setAttribute("data-css", itemDataCss["data-css"]);
              }
            });
            itemEls[index].setAttribute(
              "data-css",
              itemActiveDataCss["data-css"]
            );
          },
          addClassName: classItemAdd,
          removeClassName: classItemRemove,
        });
        this.toggleGroup = [...this.toggleGroup, currentToggle];
      });
    }
  }

  checkHasItem(productData, storeData) {
    return storeData?.some((item) => item.id === productData.id);
  }

  changeStatus(el, hasItem) {
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

  handleQuantity() {
    const quantityEl = container.querySelector(".veda-counter");
    if (!quantityEl) {
      return;
    }
    veda.plugins.counter(container, {
      min: 1,
      max: Infinity,
      step: 1,
      value: 1,
      onChange: (value) => {},
    });
  }

  handleWishList() {
    const btnWishListEl = container.querySelector(".wishlist-toggle-js");
    const wishListDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(wishListDataEl.textContent);
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productWishList.getData());
    this.changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      const hasItem = () =>
        this.checkHasItem(productData, productWishList.getData());
      const addText = btnWishListEl.getAttribute("data-add-text");
      const removeText = btnWishListEl.getAttribute("data-remove-text");
      productWishList.toggleWishList(productData);
      this.changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        message.success(addText);
      } else {
        message.error(removeText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    let unsubscribeWishList = productWishList.subscribe((state) => {
      const btnWishListEl = container.querySelector(".wishlist-toggle-js");
      const wishListDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(wishListDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnWishListEl, hasItem);
    });
    window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
      unsubscribeWishList();
      btnWishListEl.removeEventListener("click", handleClick);
    });
  }

  handleCompare() {
    const btnCompareEl = container.querySelector(".compare-toggle-js");
    const compareDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const ratingCustom = container.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productCompare.getData());
    this.changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const addText = btnCompareEl.getAttribute("data-add-text");
      const removeText = btnCompareEl.getAttribute("data-remove-text");
      this.changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        addText && message.success(addText);
      } else {
        removeText && message.error(removeText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    let unsubscribeCompare = productCompare.subscribe((state) => {
      const btnCompareEl = container.querySelector(".compare-toggle-js");
      const compareDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnCompareEl, hasItem);
    });
    window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
      unsubscribeCompare();
      btnCompareEl.removeEventListener("click", handleClick);
    });
  }

  addCartSuccess(el) {
    const check = `
      <svg class="checkmark w:14px h:14px mr:5px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
    el.insertAdjacentHTML("afterbegin", check);
    setTimeout(() => {
      const checkEl = el.querySelector(".checkmark");
      const iconEl = el.querySelector("i");
      if (!!checkEl) {
        checkEl.remove();
        iconEl?.style?.removeProperty("display");
      }
      loading = false;
    }, 2000);
  }

  handleAddCart() {
    const btnAddCart = container.querySelector(".product-card-add-js");
    if (!btnAddCart) {
      return;
    }
    const handleClick = () => {
      if (!loading) {
        const iconEl = btnAddCart.querySelector("i");
        const quantityEl = container.querySelector(".veda-product-quantity-js");
        loading = true;
        const spinner =
          "<div class='veda-spinner bdw:2px mr:5px' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
        btnAddCart.insertAdjacentHTML("afterbegin", spinner);
        if (iconEl) {
          iconEl.style.display = "none";
        }
        if (builderMode) {
          setTimeout(() => {
            const currentSpinner = btnAddCart.querySelector(".veda-spinner");
            currentSpinner.remove();
            this.addCartSuccess(btnAddCart);
          }, 2000);
        } else {
          const currentVariantId = container.querySelector(
            ".veda-product-variant-select-id-js"
          ).value;
          cart
            .addToCart(
              Number(currentVariantId.trim()),
              Number(quantityEl.value)
            )
            .then(() => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              this.addCartSuccess(btnAddCart);
            })
            .catch((err) => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              loading = false;
              message.error(err.toString());
            });
        }
      }
    };
    btnAddCart.addEventListener("click", handleClick);
    window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
      btnAddCart.removeEventListener("click", handleClick);
    });
  }
  handleViewing() {
    const viewingEl = container.querySelector(".quantity-viewing-js");
    if (!viewingEl) {
      return;
    }
    const min = viewingEl.getAttribute("data-min");
    const max = viewingEl.getAttribute("data-max");
    const text = viewingEl.getAttribute("data-text");
    const time = viewingEl.getAttribute("data-time");
    const intervalID = setInterval(() => {
      viewingEl.textContent = `${text.replace(
        /\d/g,
        `${random(Number(min), Number(max))}`
      )}`;
    }, Number(time) * 1000);
    window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
      clearInterval(intervalID);
    });
  }

  handleDOM() {
    this.handleSelectOption();
    this.handleQuantity();
    this.handleWishList();
    this.handleCompare();
    this.handleAddCart();
    this.handleViewing();
  }

  init() {
    this.handleDOM();
    if (!!this.swipper) {
      this.swipper?.on("slideChange", () => {
        this.option.forEach((item, index) => {
          this.option[index] =
            this.data.variants[this.swipper?.realIndex].options[index];
        });
        this.handleChangeVariant(
          this.data.variants[this.swipper?.realIndex],
          false
        );
        this.handleChangeSlide();
      });
    }
    this.handleChangeSlide();
    window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
      this.swipper?.destroy();
    });
  }
}
new PageProduct();
const photo = photoSwipe({
  gallery: ".veda-photo-swipe",
});
imageZoom(container);
window.veda_fn_352e4cc0adf943e9bfd7e34140c7d2eaCleanup.push(() => {
  photo();
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_352e4cc0adf943e9bfd7e34140c7d2ea();
function veda_fn_1a6a8aca827e410884962836725b6100 () {
        
  if (window.veda_fn_1a6a8aca827e410884962836725b6100Cleanup === undefined) {
    window.veda_fn_1a6a8aca827e410884962836725b6100Cleanup = {
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
  window.veda_fn_1a6a8aca827e410884962836725b6100Cleanup.cleanup();

        try {
          const uniqueIds = ["id_50d1691e-2e0b-4bda-9315-dac0ae06a595","id_f4a5d73f-0715-4bec-a6e7-4106ceb8c68e","id_3ebcb489-ec78-4d82-a003-6a4bd9554de3","id_2a737de9-4293-4e93-a20f-d1a42f077ba8","id_6a32d481-5587-44e2-a3ae-7e64b76c801f"];
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
veda_fn_1a6a8aca827e410884962836725b6100();
function veda_fn_4def33dce5134b0f90d7877ca64c623c () {
      
  if (window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup === undefined) {
    window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup = {
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
  window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup.cleanup();

      try {
        const uniqueId = "id_6061fdf6-a4cb-4efb-89d9-dea4565742e0";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { countdown, cart, message } = veda.plugins;
const countdownEls = container.querySelectorAll(".veda-countdown");
let loading = false;
countdownEls.forEach((countdownEl) => {
  const destroy = countdown(countdownEl);
  window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup.push(() => {
    destroy();
  });
});

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
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
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const btnAddCartEls = container.querySelectorAll(".product-card-add-js");
  if (!btnAddCartEls.length) {
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
          "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
        btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
        if (iconEl) {
          iconEl.style.display = "none";
        }
        if (builderMode) {
          const id = setTimeout(() => {
            const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
            currentSpinner.remove();
            addCartSuccess(btnAddCartEl);
            clearTimeout(id);
          }, 2000);
          window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup.push(() => {
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
    window.veda_fn_4def33dce5134b0f90d7877ca64c623cCleanup.push(() => {
      btnAddCartEl.removeEventListener("click", handleClick);
    });
  });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_4def33dce5134b0f90d7877ca64c623c();
function veda_fn_c37bb2113f364cc996ebae3bab53c241 () {
      
  if (window.veda_fn_c37bb2113f364cc996ebae3bab53c241Cleanup === undefined) {
    window.veda_fn_c37bb2113f364cc996ebae3bab53c241Cleanup = {
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
  window.veda_fn_c37bb2113f364cc996ebae3bab53c241Cleanup.cleanup();

      try {
        const uniqueId = "id_e5496f25-2ff8-4167-82de-9b45a818af9f";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const instance = veda.plugins.swiper(container);
window.veda_fn_c37bb2113f364cc996ebae3bab53c241Cleanup.push(() => {
  instance.destroy();
})
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_c37bb2113f364cc996ebae3bab53c241();
function veda_fn_73edaa64b8f742118e0645f6659bb0c8 () {
      
  if (window.veda_fn_73edaa64b8f742118e0645f6659bb0c8Cleanup === undefined) {
    window.veda_fn_73edaa64b8f742118e0645f6659bb0c8Cleanup = {
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
  window.veda_fn_73edaa64b8f742118e0645f6659bb0c8Cleanup.cleanup();

      try {
        const uniqueId = "id_8537fca4-fb39-436f-ab16-93172b4f887d";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { collapse } = veda.plugins;
collapse(container, {
  activeClass: "collapse-active",
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_73edaa64b8f742118e0645f6659bb0c8();
function veda_fn_0d89d093066e4b21a020636e4f4edf6a () {
      
  if (window.veda_fn_0d89d093066e4b21a020636e4f4edf6aCleanup === undefined) {
    window.veda_fn_0d89d093066e4b21a020636e4f4edf6aCleanup = {
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
  window.veda_fn_0d89d093066e4b21a020636e4f4edf6aCleanup.cleanup();

      try {
        const uniqueId = "id_b7e00287-9b42-4035-a711-6b9614c9f252";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { instagram } = veda.plugins;
const { objectParse } = veda.utils;

const instaEl = container.querySelector(".veda-instagram-js");
const instaDataEl = container.querySelector(".veda-instagram-data-js");
const { access_token, limit, layout, row_height, column, gap } = objectParse(
  instaDataEl.textContent
);

if (access_token) {
  instagram(instaEl, {
    accessToken: access_token,
    limit,
    layout:
      layout === "equal"
        ? instagram.equal({
            columns: column,
            gap,
          })
        : instagram.justified({
            rowHeight: row_height,
            gap,
          }),
  });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_0d89d093066e4b21a020636e4f4edf6a();