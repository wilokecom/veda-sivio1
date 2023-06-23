function veda_fn_b11bb4f8637f4a48b3ba1546bbc86b4a () {
      
  if (window.veda_fn_b11bb4f8637f4a48b3ba1546bbc86b4aCleanup === undefined) {
    window.veda_fn_b11bb4f8637f4a48b3ba1546bbc86b4aCleanup = {
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
  window.veda_fn_b11bb4f8637f4a48b3ba1546bbc86b4aCleanup.cleanup();

      try {
        const uniqueId = "id_044aa2c8-2fe6-48a2-a712-62849014bb25";
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
veda_fn_b11bb4f8637f4a48b3ba1546bbc86b4a();