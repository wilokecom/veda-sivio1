function veda_fn_6db3c5a9f4a04d3699a94ad7d3b5ad6c () {
        
  if (window.veda_fn_6db3c5a9f4a04d3699a94ad7d3b5ad6cCleanup === undefined) {
    window.veda_fn_6db3c5a9f4a04d3699a94ad7d3b5ad6cCleanup = {
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
  window.veda_fn_6db3c5a9f4a04d3699a94ad7d3b5ad6cCleanup.cleanup();

        try {
          const uniqueIds = ["id_fa377e75-464e-4e5a-a3a7-cb49e62d60e5","id_798fde1a-747f-4caa-9293-5037dbd898d0"];
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
veda_fn_6db3c5a9f4a04d3699a94ad7d3b5ad6c();
function veda_fn_b252c5e2e3374864a10cdf0aeed6302f () {
      
  if (window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup === undefined) {
    window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup = {
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
  window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup.cleanup();

      try {
        const uniqueId = "id_24460593-ec08-43b3-acc7-6f286930dda9";
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
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes, csr } = veda.utils;
const { html, render } = csr;
let loading = false;
let updating = false;

const schemaEl = container.querySelector(".schema-settings-js");
const translateTextEl = container.querySelector(".translate-text-js");
const schemaData = objectParse(schemaEl.textContent);
const translateText = objectParse(translateTextEl.textContent);

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

function handleCompare(e) {
  const btnCompareEl = e.currentTarget;
  const card = btnCompareEl.closest(".product-card-js");
  const compareDataEl = card.querySelector(".product-card-data-js");
  const productData = objectParse(compareDataEl.textContent);
  const ratingCustom = card.querySelector(".compare-rating-js");
  const hasItem = () => checkHasItem(productData, productCompare.getData());
  changeStatus(btnCompareEl, hasItem);
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
}

function handleWishList(e) {
  const btnWishListEl = e.currentTarget;
  const card = btnWishListEl.closest(".product-card-js");
  const compareDataEl = card.querySelector(".product-card-data-js");
  const productData = objectParse(compareDataEl.textContent);
  const hasItem = () => checkHasItem(productData, productWishList.getData());
  changeStatus(btnWishListEl, hasItem);
  productWishList.toggleWishList(productData);
  const tooltipActiveText = btnWishListEl.getAttribute(
    "data-tooltip-active-text"
  );
  tooltipActiveText && message.error(tooltipActiveText);
}

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
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart(e) {
  const btnAddCartEl = e.currentTarget;
  const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
  const currentVariantIdEl = btnAddCartEl
    .closest(".product-card-js")
    .querySelector(".current-variant-id");
  e.preventDefault();
  if (!loading) {
    loading = true;
    const spinner =
      "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
    btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
    iconEl.style.display = "none";
    if (builderMode) {
      const id = setTimeout(() => {
        const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
        currentSpinner.remove();
        addCartSuccess(btnAddCartEl);
        clearTimeout(id);
      }, 2000);
      window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup.push(() => {
        clearTimeout(id);
      });
    } else {
      cart
        .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
        .then(() => {
          const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
          currentSpinner.remove();
          addCartSuccess(btnAddCartEl);
        })
        .catch((err) => {
          const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
          currentSpinner.remove();
          loading = false;
          message.error(err.toString());
        });
    }
  }
}

function handleQuickView(e) {
  const btnQuickViewEl = e.currentTarget;
  const card = btnQuickViewEl.closest(".product-card-js");
  const cartDataEl = card.querySelector(".product-card-data-js");
  const productData = objectParse(cartDataEl.textContent);
  productQuickView.togglePopup({
    ...productData,
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
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

const renderScript = (product) => {
  let price_compare = product.compare_at_price;
  if (!price_compare) {
    price_compare = 0;
  }
  const data = {
    id: product.id,
    title: product.title,
    vendor: product.vendor,
    handle: product.handle,
    available: product.available,
    content: product.content,
    description: product.description,
    featured_image: product.featured_image,
    images: product.images,
    options: product.options,
    selected_or_first_available_variant:
      product.selected_or_first_available_variant
        ? product.selected_or_first_available_variant
        : product.variants[0],
    price_max: product.price_max,
    price_min: product.price_min,
    type: product.type,
    tags: product.tags,
    variants: product.variants,
    price: product.price,
    compare_at_price: price_compare,
    options_with_values: product.options_with_values,
    url: product.url,
  };
  return html`   
    <script class="product-card-data-js" type="application/json">
      ${JSON.stringify(data)}
    </script>
    
    <script type="application/json" class="current-variant-id">
      ${
        product.selected_or_first_available_variant
          ? product.selected_or_first_available_variant.id
          : product.variants[0]?.id
      }
    </script>
  `;
};

const renderImage = (product) => {
  let aspectRatio = 130;
  let imageRadius = "";
  if (schemaData.product_settings.aspect_ratio) {
    aspectRatio = schemaData.product_settings.aspect_ratio;
  }
  if (schemaData.product_settings.image_border_radius) {
    imageRadius = `border-radius: ${schemaData.product_settings.image_border_radius}px`;
  }
  return html`
      <div class="ov:hidden w:100%" style="${imageRadius}">
        <a
          href="${product.url}"
          style="--aspect-ratio: ${aspectRatio}"
          class="veda-image-cover pos:relative d:block trs:opacity_0.3s z:1 ${
            !!product.images[1] ? "op:0*group-hover" : ""
          }"
        >
          <img
            class="product-card-image-js veda-lazyload"
             src="${
               product?.featured_image?.src
                 ? imageUrl(product?.featured_image?.src, 10)
                 : imageUrl(product?.featured_image, 10)
             }"
            alt="${product.title}"
            data-intrinsic-width="${product.featured_image.width}"
            data-intrinsic-height="${product.featured_image.height}"
            width="${product.featured_image.width}"
            height="${product.featured_image.height}"
            loading="lazy"
            > </img>
        </a>
        ${
          !!product.images[1] &&
          html`
            <a
            href="${product.url}"
            class="veda-image-cover pos:absolute t:0 l:-100000px w:100% z:9 op:0 trs:opacity_0.4s,left_0s_0.4s trs:opacity_0.4s,left_0s_0s*group-hover op:1*group-hover l:0*group-hover"
            style="--aspect-ratio:${aspectRatio}"
            >
              <img
                class="veda-lazyload"
                src="${
                  product.images[1]?.src
                    ? imageUrl(product.images[1]?.src, 10)
                    : imageUrl(product.images[1], 10)
                }"
                alt="${product.title}"
                data-intrinsic-width="${product.images[1].width}"
                data-intrinsic-height="${product.images[1].height}"
                width="${product.images[1].width}"
                height="${product.images[1].height}"
                loading="lazy"
              ></img>
            </a>
          `
        }
      </div>
  `;
};

const renderProductSale = (product) => {
  const saleCss = schemaData.sale?.design?.css
    ? getObjectAttributes(schemaData.sale.design.css)["data-css"]
    : "";
  let regularPrice = 0,
    salePrice = 0;

  if (!!product.compare_at_price && product.compare_at_price > product.price) {
    regularPrice =
      Number(`${product.compare_at_price}`.replaceAll(/\W/g, "")) | 0;
    salePrice = Number(`${product.price}`.replaceAll(/\W/g, "")) | 0;
  }
  return (
    !!product.compare_at_price &&
    regularPrice > salePrice &&
    schemaData.sale.enable == "true" &&
    html`
      <div
        class="p:3px_10px bdrs:3px bgc:#eb4747 lh:normal fz:12px ff:font-secondary tt:uppercase lts:1px c:color-light-freeze"
        data-css="${saleCss}">
        -${Math.ceil(100 - (salePrice / regularPrice) * 100)}%
      </div>
    `
  );
};

const renderProductNew = (product) => {
  const productDate = new Date(product.published_at);
  const date = (Date.now() - productDate) / 68400000;
  const isNew = 10 > date;
  const newCss = schemaData.new.design?.css
    ? getObjectAttributes(schemaData.new.design.css)["data-css"]
    : "";
  return (
    isNew &&
    schemaData.new.enable == "true" &&
    html`
      <div
        class="p:3px_10px bdrs:3px bgc:#17c478 lh:normal fz:12px ff:font-secondary tt:uppercase lts:1px c:color-light-freeze mb:5px"
        data-css="${newCss}"
      >
        ${translateText.new_text}
      </div>
    `
  );
};

const renderSoldOut = (product) => {
  let isSoldOut = true;
  let poiterEvent = "";
  let variant = product.selected_or_first_available_variant
    ? product.selected_or_first_available_variant
    : product.variants[0];
  if (variant.available) {
    isSoldOut = false;
  }
  if (builderMode) {
    poiterEvent = "";
  } else {
    poiterEvent = "pe:none";
  }
  const soldOutCss = schemaData.sold_out?.design?.css
    ? getObjectAttributes(schemaData.sold_out.design.css)["data-css"]
    : "";
  return (
    isSoldOut &&
    schemaData.sold_out.enable == "true" &&
    html`
    <div
      class="sold-out-js pos:absolute t:50% l:0 p:pfs(5px,20px) w:100% h:fit-content trf:translateY(-50%) bg:transparent!*span z:10 ${poiterEvent}"
    >
      <div
        class="pos:absolute t:0 l:0 w:100% h:100% bgc:color-gray9 op:0.4 z:-1"
        data-css="${soldOutCss}"
      ></div>
      <span
        class="fz:pfs(13px,20px) fw:500 c:color-light"
        style="background: transparent !important; background-color: transparent !important"
        data-css="${soldOutCss}"
      >
        ${translateText.sold_out}
      </span>
    </div>
  `
  );
};

const renderAction = (product) => {
  const quickViewCss = schemaData.quick_view.design?.css
    ? getObjectAttributes(schemaData.quick_view.design.css)["data-css"]
    : "";
  const cartCss = schemaData.add_to_cart.design?.css
    ? getObjectAttributes(schemaData.add_to_cart.design.css)["data-css"]
    : "";
  const wishlistCss = schemaData.wish_list_action?.design?.css
    ? getObjectAttributes(schemaData.wish_list_action.design.css)["data-css"]
    : "";
  const compareCss = schemaData.compare_action.design?.css
    ? getObjectAttributes(schemaData.compare_action.design.css)["data-css"]
    : "";
  return html`
    <div class="pos:absolute l:0 b:0 r:0 z:12 h:50px m:auto ov:hidden ov:visible|h">
      <div class="pos:absolute l:10px b:10px b:-5px@md r:10px h:30px h:38px@md d:flex cur:pointer trf:translateY(100%)@md trs:0.3s trf:translateY(0)*group-hover b:10px*group-hover">
        ${
          schemaData.quick_view.enable == "true" &&
          html`<span
            class="quickview-toggle-js mr:5px w:30px w:38px@md h:100% pos:relative fz:14px bgc:color-gray9-freeze c:color-light-freeze trs:0.3s c:color-primary|h d:flex ai:center jc:center bdrs:4px|be fz:12px|be"
            data-tooltip-position="top"
            data-tooltip-active="false"
            data-tooltip-text="${translateText.quickview_text}"
            data-css="${quickViewCss}"
            onClick=${handleQuickView}
          >
            <i class="far fa-eye"></i>
          </span>`
        }
        ${html`
            <span
              class="product-card-add-js lines-1 w:30px@+md flx:1@md h:100% pos:relative fz:14px ff:font-secondary bgc:color-gray9-freeze c:color-light-freeze trs:0.3s c:color-primary|h d:flex ai:center jc:center us:none"
              data-cart-success-text="${translateText.add_to_cart_text}"
              data-tooltip-position="top"
              data-tooltip-text="${translateText.add_to_cart_text}"
              data-css="${cartCss}"
              onClick=${handleCart}
            >
              <div class="product-cart-add-icon-js mr:10px@md"><i class="far fa-shopping-cart"></i></div>
              <span class="d:none@+md">${translateText.add_to_cart_text}</span>
            </span>
          `}
      </div>
    </div>
    <div class="pos:absolute t:0 r:0 b:0 z:12 w:44px m:auto ov:hidden ov:visible|h">
      <div class="pos:absolute r:5px r:-5px@md t:50% w:34px d:flex fld:column ai:center cur:pointer trf:translate(100%,-50%)@md trs:0.3s trf:translate(0,-50%)*group-hover r:10px*group-hover">
        ${
          schemaData.wish_list_action.enable == "true" &&
          html`
            <span
              class="wishlist-toggle-js mb:8px w:34px h:34px pos:relative fz:14px bdrs:50% bgc:color-light c:color-gray9 trs:0.3s c:color-primary|h d:flex ai:center jc:center bdrs:4px|be fz:12px|be"
              data-tooltip-text="${translateText.add_wish_list}"
              data-tooltip-active-text="${translateText.remove_wish_list}"
              data-tooltip-position="left"
              data-tooltip-active="${checkHasItem(
                product,
                productWishList.getData()
              )}"
              data-css="${wishlistCss}"
              onClick=${handleWishList}
              style="${
                checkHasItem(product, productWishList.getData())
                  ? "color:var(--color-primary)"
                  : ""
              }"
            >
              <i class="fas fa-heart"></i>
            </span>
          `
        }
        ${
          schemaData.compare_action.enable == "true" &&
          html`
            <span
              class="compare-toggle-js w:34px h:34px pos:relative fz:14px bdrs:50% bgc:color-light c:color-gray9 trs:0.3s c:color-primary|h d:flex ai:center jc:center bdrs:4px|be fz:12px|be"
              component="compare_action"
              data-tooltip-position="left"
              data-tooltip-active="${checkHasItem(
                product,
                productCompare.getData()
              )}"
              data-tooltip-text="${translateText.add_compare}"
              data-tooltip-active-text="${translateText.remove_compare}"
              data-css="${compareCss}"
              onClick=${handleCompare}
              style="${
                checkHasItem(product, productCompare.getData())
                  ? "color:var(--color-primary)"
                  : ""
              }"
            >
              <i class="fas fa-repeat-alt"></i>
            </span>
          `
        }
      </div>
    </div>
  `;
};

const renderContent = (product) => {
  return html`
    <div class="w:100% d:flex fld:column pt:10px"
      style="text-align: ${schemaData.product_settings.align}"
    >
      ${
        schemaData.product_settings.enable_vendor == "true" &&
        html`
        <div style="order:${schemaData.product_settings.sortable.vendor}">
          <a
            class="d:block fz:12px ff:font-secondary c:color-gray7 trs:0.3s"
            data-css="${
              schemaData.product_settings?.vendor_design?.css
                ? getObjectAttributes(
                    schemaData.product_settings.vendor_design.css
                  )["data-css"]
                : ""
            }"
            href="/collections/vendors?q=${product.vendor}"
          >
            ${product.vendor}
          </a>
        </div>
      `
      }
      <h3 style="order:${schemaData.product_settings.sortable.name}">
        <a
          class="d:block mt:5px fz:14px ff:font-secondary fw:400 c:color-gray9 trs:0.3s"
          href="${product.url}"
          data-css="${
            schemaData.product_settings?.name_design?.css
              ? getObjectAttributes(
                  schemaData.product_settings.name_design.css
                )["data-css"]
              : ""
          }"
        >
          ${product.title}
        </a>
      </h3>
      <div style="order:${schemaData.product_settings.sortable.price}">
        ${
          product.compare_at_price > product.price
            ? html`
            <div class="product-content-price-js d:inline-flex mt:5px">
              <div class="product-price-on-sale-js">
                <ins
                  class="fw:400 ff:font-secondary fz:18px c:color-primary td:none mr:5px"
                  data-css="${
                    schemaData.product_settings?.sale_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.sale_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.price}
                </ins>
                <del
                  class="fw:400 ff:font-secondary fz:16px c:color-gray6"
                  data-css="${
                    schemaData.product_settings?.regular_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.regular_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.compare_at_price}
                </del>
              </div>
              <ins
                class="fw:400 ff:font-secondary fz:18px c:color-primary td:none product-price-not-sale-js d:none"
                data-css="${
                  schemaData.product_settings?.regular_price_design?.css
                    ? getObjectAttributes(
                        schemaData.product_settings.regular_price_design.css
                      )["data-css"]
                    : ""
                }"
              >
              </ins>
            </div>
          `
            : html`
             <div class="product-content-price-js d:inline-flex mt:5px">
              <div class="product-price-on-sale-js d:none">
                <ins
                  class="fw:400 ff:font-secondary fz:18px c:color-primary td:none mr:5px"
                  data-css="${
                    schemaData.product_settings?.sale_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.sale_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.price}
                </ins>
                <del
                  class="fw:400 ff:font-secondary fz:16px c:color-gray6"
                  data-css="${
                    schemaData.product_settings?.regular_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.regular_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.compare_at_price}
                </del>
              </div>
              <ins
                class="fw:400 ff:font-secondary fz:18px c:color-primary td:none product-price-not-sale-js"
                data-css="${
                  schemaData.product_settings?.regular_price_design?.css
                    ? getObjectAttributes(
                        schemaData.product_settings.regular_price_design.css
                      )["data-css"]
                    : ""
                }"
              >
              ${product.price}
              </ins>
            </div>
          `
        }
      </div>
      ${
        schemaData.product_settings.enable_color == "true" &&
        html`<div style="order:${schemaData.product_settings.sortable.color}">
        <div class="product-card-colors-js d:flex mt:8px mt:0|e ml:-2px mr:-2px" style="${
          schemaData.product_settings.align == "center"
            ? "justify-content:center"
            : schemaData.product_settings.align == "right"
            ? "justify-content:flex-end"
            : ""
        }"></div>
      </div>`
      }
    </div>
  `;
};

function initAction() {
  productQuickView.customQuickView(translateText);
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
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const wrapper = container.querySelector(".veda-wishlist-wrapper");
    productWishList.renderWishList(wrapper);
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
    handleColor();
  });
  window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup.push(() => {
    unsubscribeCompare();
    unsubscribeWishList();
  });

  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
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
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
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
}

const wrapper = container.querySelector(".veda-wishlist-wrapper");
veda.plugins.productWishList.customWishList({
  renderProduct: (product, index) => {
    return html`
      <div class="col" key="${product.id}">
        <div
          class="product-card-js group* pos:relative d:flex fld:column ai:center ta:center mih:100% ov:hidden"
          data-css="${
            schemaData.product_settings?.content_design?.css
              ? getObjectAttributes(
                  schemaData.product_settings.content_design.css
                )["data-css"]
              : ""
          }"
          component="product_settings"
        >
          ${renderScript(product)}
          <div class="pos:absolute t:10px l:10px z:12 d:flex fld:column">
            ${renderProductNew(product)}
            ${renderProductSale(product)}
          </div>
          <div class="w:100% pos:relative">
            ${renderImage(product)}
            ${renderAction(product)}
            ${renderSoldOut(product)}
          </div>
          ${renderContent(product)}
        </div>
      </div>`;
  },
});
productWishList.renderWishList(wrapper);
initAction();
handleColor();
const unSubWishlist = productWishList.subscribe((state) => {
  if (!!state.length) {
    const emptyEl = container.querySelector(".veda-wishlist-empty-js");
    if (!emptyEl?.classList?.contains("d:none")) {
      emptyEl?.classList?.add("d:none");
    }
  } else {
    const emptyEl = container.querySelector(".veda-wishlist-empty-js");
    if (emptyEl?.classList?.contains("d:none")) {
      emptyEl?.classList?.remove("d:none");
    }
  }
});
window.veda_fn_b252c5e2e3374864a10cdf0aeed6302fCleanup.push(() => {
  unSubWishlist();
});
if (!!productWishList.getData()?.length) {
  const emptyEl = container.querySelector(".veda-wishlist-empty-js");
  if (!emptyEl?.classList?.contains("d:none")) {
    emptyEl?.classList?.add("d:none");
  }
} else {
  const emptyEl = container.querySelector(".veda-wishlist-empty-js");
  if (emptyEl?.classList?.contains("d:none")) {
    emptyEl?.classList?.remove("d:none");
  }
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_b252c5e2e3374864a10cdf0aeed6302f();
function veda_fn_4ded86518ff64268b4d8b4e11c8ed256 () {
      
  if (window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup === undefined) {
    window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup = {
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
  window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.cleanup();

      try {
        const uniqueId = "id_b76d56df-68f4-4004-8992-92a17a58e6e1";
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
    window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
  window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
    window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
  window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
    unsubscribeWishList();
  });
}

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
  window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
      window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
      window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
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
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
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
    window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
      instance.destroy();
    });
    clearTimeout(id);
  }, 0);
  window.veda_fn_4ded86518ff64268b4d8b4e11c8ed256Cleanup.push(() => {
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
veda_fn_4ded86518ff64268b4d8b4e11c8ed256();