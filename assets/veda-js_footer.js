function veda_fn_67d6b6f90b594856aadfb7e1c6ba2a70 () {
      
  if (window.veda_fn_67d6b6f90b594856aadfb7e1c6ba2a70Cleanup === undefined) {
    window.veda_fn_67d6b6f90b594856aadfb7e1c6ba2a70Cleanup = {
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
  window.veda_fn_67d6b6f90b594856aadfb7e1c6ba2a70Cleanup.cleanup();

      try {
        const uniqueId = "id_bcce1779-4471-498a-a163-14c93a687305";
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
veda_fn_67d6b6f90b594856aadfb7e1c6ba2a70();
function veda_fn_65921510cdce446a924ae17e3b346fe5 () {
      
  if (window.veda_fn_65921510cdce446a924ae17e3b346fe5Cleanup === undefined) {
    window.veda_fn_65921510cdce446a924ae17e3b346fe5Cleanup = {
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
  window.veda_fn_65921510cdce446a924ae17e3b346fe5Cleanup.cleanup();

      try {
        const uniqueId = "id_5ac92229-793f-4cf8-b07f-17d73c04ed9e";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { store } = veda.utils;
const { productWishList, cart } = veda.plugins;
const linkEls = container.querySelectorAll(".link-js");

function handleBodyHeightCalc() {
  const { display } = window.getComputedStyle(container);
  const height = container.offsetHeight;
  if (display === "none") {
    document.body.style.removeProperty("padding-bottom");
  } else {
    document.body.style.paddingBottom = `${height}px`;
  }
}
handleBodyHeightCalc();
window.addEventListener("scroll", handleBodyHeightCalc);

function renderWishlistCount() {
  linkEls.forEach((el) => {
    if (el.href.includes("wishlist")) {
      const badgeEl = el.querySelector(".badge-js");
      const count = productWishList.getData()?.length ?? "0";
      badgeEl.textContent = count;
    }
  });
}

function renderCartCount() {
  linkEls.forEach((el) => {
    if (el.href.includes("/cart")) {
      const badgeEl = el.querySelector(".badge-js");
      const count = cart.getData()?.item_count ?? "0";
      badgeEl.textContent = count;
    }
  });
}

function handleShow() {
  const isMobile = document.body.classList.contains("mobile");
  if (isMobile || window.innerWidth < 768) {
    container.style.display = "block";
  } else {
    container.style.removeProperty("display");
  }
}

const unsub = productWishList.subscribe(renderWishlistCount);
const unsub2 = cart.subscribe(renderCartCount);

handleShow();
const observer = new MutationObserver(handleShow);
window.addEventListener("resize", handleShow);

observer.observe(document.body, {
  attributes: true,
  attributeFilter: ["class"],
});

function handleActive() {
  if (!builderMode) {
    linkEls.forEach((el) => {
      const url = new URL(el.href);
      const { root } = window.Shopify.routes;
      const pathname = url.pathname.includes(root)
        ? url.pathname
        : `${root}${url.pathname}`.replace(/\/\//g, "/");
      if (
        pathname.replace(/\/$/g, "") ===
        window.location.pathname.replace(/\/$/g, "")
      ) {
        const colorEls = el.querySelectorAll(".color-js");
        colorEls.forEach((colorEl) => {
          colorEl.style.color = "var(--color-primary)";
        });
      }
    });
  }
}
handleActive();

window.veda_fn_65921510cdce446a924ae17e3b346fe5Cleanup.push(() => {
  unsub();
  unsub2();
  observer.disconnect();
  window.removeEventListener("resize", handleShow);
  window.removeEventListener("scroll", handleBodyHeightCalc);
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_65921510cdce446a924ae17e3b346fe5();